import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_CATEGORY = import.meta.env.VITE_API_CATEGORY_URL;

export const fetchCategory = createAsyncThunk('category/fetchCategory',
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch(API_CATEGORY);
            if (!response.ok) throw new Error("failed to fetch categories");
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const categoriesSlice = createSlice({
    name: "category",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export default categoriesSlice.reducer;

