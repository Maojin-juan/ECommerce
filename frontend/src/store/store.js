import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import adminProductsSlice from "./admin/productsSlice";
import shopProductsSlice from "./shop/productsSlice";
import shopCartSlice from "./shop/cartSlice";
import shopAddressSlice from "./shop/addressSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    shopAddress: shopAddressSlice,
  },
});

export default store;
