import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categories/categoriesSlice";
import productReducer from "../features/products/productsSlice";

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productReducer,
    }
})