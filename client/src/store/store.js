import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categories/categoriesSlice"

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
    }
})