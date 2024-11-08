// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderNav from './components/HeaderNav';
import Footer from './layouts/Footer';
import {
  HomePage, ProductPage, ProfilePage, CartPage, LoginPage, RegisterPage, CheckoutPage,
  CategoryPage, ProductAdminPage, UserPage, SecurityPage, ShippingPage, OrderPage, VoucherPage, DetailProduct
} from "./pages/index.js";

import AdminPage from "./pages/Admin/AdminPage.jsx";

const { Content } = Layout;

function App() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");

  return (
    <Router>
      <Layout className="layout">
        {!isAdminRoute && <HeaderNav />}
        <Content style={{ padding: '0 50px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<DetailProduct />} />
            <Route path="/checkout/" element={<CheckoutPage />} />

            {/* Admin Routes */}
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/admin/products" element={<AdminPage > <ProductAdminPage /> </AdminPage>} />
          </Routes>
        </Content>
        {!isAdminRoute && <Footer />}
      </Layout>
    </Router>
  );
}

export default App;
