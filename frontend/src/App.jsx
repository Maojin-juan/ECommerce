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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/authSlice";
import { Skeleton } from "./components/ui/skeleton";
import PaypalReturnPage from "./pages/shoppingView/paypalReturn";
import PaypalCancelPage from "./pages/shoppingView/paypalCancel";
import PaymentSuccessPage from "./pages/shoppingView/paymentSuccess";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="h-[600px] w-[600px]" />;

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
          <Route path="paypalReturn" element={<PaypalReturnPage />} />
          <Route path="paypalCancel" element={<PaypalCancelPage />} />
          <Route path="paymentSuccess" element={<PaymentSuccessPage />} />
        </Route>
        <Route path="unauth-page" element={<UnAuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
