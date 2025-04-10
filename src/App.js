// App.js
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderNav from './components/HeaderNav';
import Footer from './layouts/Footer';
import AdminLayout from './layouts/AdminLayout';
import {
  HomePage, ProductPage, ProfilePage, CartPage, LoginPage, RegisterPage, CheckoutPage,
  DetailProduct, NotFoundPage, AdminPage, ProductAdminPage, UserPage
} from "./pages/index.js";

import axios from './utils/axiosConfig.jsx';
import PrivateRoute from './utils/PrivateRoute';

const { Content } = Layout;


function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.post('/auth/introspect', { token }, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });



          if (response.data.result.valid) {
            setIsAuthenticated(true);
          } else {

            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
            setIsAuthenticated(false);
          }
        } catch (error) {

          console.error('Token validation error:', error);
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();

    // const interval = setInterval(checkAuth, 60000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <Layout className="layout">
      {!isAdminRoute && <HeaderNav isAuthenticated={isAuthenticated} />}

      <Content style={{ padding: '0 50px' }}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/productDetail/:id" element={<DetailProduct />} />

          {!isAuthenticated && (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          )}


          {/* Protected routes */}
          <Route path="/profile/*" element={<PrivateRoute element={<ProfilePage />} />} />
          <Route path="/cart" element={<PrivateRoute element={<CartPage />} />} />
          <Route path="/checkout" element={<PrivateRoute element={<CheckoutPage />} />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<PrivateRoute element={<AdminLayout />} allowedRoles={['ADMIN']} />}>
            <Route index element={<AdminPage />} />  {/* /admin */}
            <Route path="products" element={<ProductAdminPage />} />  {/* /admin/products */}
            <Route path="users" element={<UserPage />} />  {/* /admin/users */}
          </Route>

          {/* Add Not Found Route */}
          <Route path="*" element={<NotFoundPage />} />

          {/* Redirect to profile if authenticated user tries to access login or register */}
          {isAuthenticated && (
            <>
              <Route path="/login" element={<Navigate to="/profile" replace />} />
              <Route path="/register" element={<Navigate to="/profile" replace />} />
            </>
          )}

        </Routes>
      </Content>
      {!isAdminRoute && <Footer />}
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
