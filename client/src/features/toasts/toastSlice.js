import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
    name: "toasts",
    initialState: {
        alerts: []
    },
    reducers: {
        addToast: (state, action) => {
            state.alerts.push(action.payload);
        },
        removeToast: (state, action) => {
            state.alerts = state.alerts.filter(toast => toast.id !== action.payload);
        }
    }
});

export const { addToast, removeToast } = toastSlice.actions;

export const triggerToast = (message) => (dispatch) => {
    const id = Date.now();

    dispatch(addToast({id, message}));

    setTimeout(() => {
        dispatch(removeToast(id));
    }, 3000)
}

export default toastSlice.reducer;