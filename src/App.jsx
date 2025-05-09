import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

import AdminLayout from "./components/Layout/AdminLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Toaster } from "sonner";
import Register from "./pages/Register";
import CollectionPage from "./pages/CollectionPage";
import ProductDetail from "./components/Products/ProductDetail";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";
function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="collection/:collection" element={<CollectionPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="order/:id" element={<OrderDetailsPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage/>} />
          <Route path="users" element={<UserManagement/>} />
          <Route path="products" element={<ProductManagement/>} />
          <Route path="products/:id/edit" element={<EditProductPage/>} />
          <Route path="orders" element={<OrderManagement/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
