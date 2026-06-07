import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProducts = createAsyncThunk('product/fetchProducts', 
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch(API_URL);
            if(!response.ok) throw new Error("failed to fetch products");
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchProductById = createAsyncThunk('product/fetchProductById',
    async(id, {rejectWithValue}) => {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if(!response.ok) throw new Error("failed to fetch products");
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const productsSlice = createSlice({
    name: "product",
    initialState:{
        data: [],
        selectedProduct: {},
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default productsSlice.reducer;