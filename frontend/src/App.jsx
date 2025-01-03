import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/adminView/layout";
import AdminDashboard from "./pages/adminView/dashboard";
import AdminFeatures from "./pages/adminView/features";
import AdminOrders from "./pages/adminView/orders";
import AdminProducts from "./pages/adminView/products";
import ShoppingLayout from "./components/shoppingView/layout";
import NotFound from "./pages/notFound";
import ShoppingHome from "./pages/shoppingView/home";
import ShoppingListing from "./pages/shoppingView/listing";
import ShoppingCheckout from "./pages/shoppingView/checkout";
import ShoppingAccount from "./pages/shoppingView/account";
import CheckAuth from "./components/common/checkAuth";
import UnAuthPage from "./pages/unauthPage";

function App() {
  const isAuthenticated = false;
  const user = {
    name: "Sangam",
    role: "admin",
  };

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        <Route path="unauth-page" element={<UnAuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
