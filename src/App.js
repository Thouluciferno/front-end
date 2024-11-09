// App.js
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderNav from './components/HeaderNav';
import Footer from './layouts/Footer';
import {
  HomePage, ProductPage, ProfilePage, CartPage, LoginPage, RegisterPage, CheckoutPage,
  DetailProduct
} from "./pages/index.js";

import authService from './services/auth/auth.jsx';


import AdminPage from "./pages/Admin/AdminPage.jsx";

import axios from './utils/axiosConfig.jsx';

const { Content } = Layout;


// Private Route

function PrivateRoute({ element, allowedRoles }) {
  const isLoggedIn = authService.isAuthenticated();
  const userRole = authService.getUserRole();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return element;
}


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

          console.log(response.data.result.valid);

          if (response.data.result.valid) {
            setIsAuthenticated(true);
          } else {
            // Token is invalid or expired
            localStorage.removeItem('token');
            setIsAuthenticated(false);
          }
        } catch (error) {
          // API call failed or token is invalid
          console.error('Token validation error:', error);
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
    // Optional: Set up periodic checks
    const interval = setInterval(checkAuth, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout className="layout">
      {!isAdminRoute && <HeaderNav isAuthenticated={isAuthenticated} />}
      <Content style={{ padding: '0 50px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<DetailProduct />} />

          {/* Conditional rendering for login and register routes */}
          {!isAuthenticated && (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          )}

          {/* Protected routes */}
          <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
          <Route path="/cart" element={<PrivateRoute element={<CartPage />} />} />
          <Route path="/checkout/" element={<PrivateRoute element={<CheckoutPage />} />} />

          {/* Admin Routes */}
          <Route path="/admin/*" element={<PrivateRoute element={<AdminPage />} allowedRoles={['admin']} />} />

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
