import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const addedProduct = action.payload;

            const existingItem = state.items.find(item => item.product.id === addedProduct.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    product: addedProduct,
                    quantity: 1,
                });
            }
        },

        removeFromCart: (state, action) => {
            const productIDToremove = action.payload;

            state.items = state.items.filter(item => item.product.id !== productIDToremove);
        },

        updateQuantity: (state, action) => {
            const { id, amount } = action.payload;
            const existingItem = state.items.find(item => item.product.id === id);

            if (existingItem) {
                existingItem.quantity = amount;
            }

            if (existingItem && existingItem.quantity <= 0) {
                state.items = state.items.filter(item => item.product.id !== id);
            }

        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;