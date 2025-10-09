import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminForgotPassword from './AdminForgotPassword';
import AdminChangePassword from './AdminChangePassword';
import AdminLogin from './AdminLogin';
import AdminAddCategory from './AdminAddCategory';
import AdminAddProduct from './AdminAddProduct';
import AdminCategory from './AdminCategory';
import AdminDashboard from './AdminDashboard';
import AdminEditCategory from './AdminEditCategory';
import AdminEditProduct from './AdminEditProduct';
import AdminOrder from './AdminOrder';
import AdminPrintOrder from './AdminPrintOrder';
import AdminProduct from './AdminProduct';
import AdminUser from './AdminUser';
import AdminViewProduct from './AdminViewProduct';
import AdminViewOrder from './AdminViewOrder';
import AdminPageNotFound from './AdminPageNotFound.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<AdminLogin />} />
        <Route path="/forgot-password" element={<AdminForgotPassword />} />
        <Route path="/change-password" element={<AdminChangePassword />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/category" element={<AdminCategory />} />
        <Route path="/add-category" element={<AdminAddCategory />} />

        {/* dynamic route = (route with parameter) */}
        <Route path="/edit-category/:categoryid" element={<AdminEditCategory />} />
        <Route path="/edit-product/:productid" element={<AdminEditProduct />} />
        <Route path="/view-product/:productid" element={<AdminViewProduct />} />
        <Route path="/view-order/:orderid" element={<AdminViewOrder />} />
        <Route path="/d:id" element={<AdminPrintOrder />} />

        <Route path="/product" element={<AdminProduct />} />
        <Route path="/add-product" element={<AdminAddProduct />} />
        <Route path="/order" element={<AdminOrder />} />
        <Route path="/users" element={<AdminUser />} />
        {/* define 404 route which handle request for non existing routes */}
        <Route path='*' element={<AdminPageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CookiesProvider>
  <MyRouter />
</CookiesProvider>);
