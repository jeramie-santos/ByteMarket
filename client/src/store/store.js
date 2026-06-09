import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categories/categoriesSlice";
import productReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import toastReducer from "../features/toasts/toastSlice";

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productReducer,
        toasts: toastReducer,
        carts: cartReducer,
    }
})