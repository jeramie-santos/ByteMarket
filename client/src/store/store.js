import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filters/filterSlice";
import productReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import toastReducer from "../features/toasts/toastSlice";

export const store = configureStore({
    reducer: {
        filters: filterReducer,
        products: productReducer,
        toasts: toastReducer,
        carts: cartReducer,
    }
})