import { configureStore } from "@reduxjs/toolkit";
import errorPopupReducer from "./features/errorPopupSlice";
import loadingReducer from "./features/loadingSlice";

const store = configureStore({
    reducer: {
        errorPopup: errorPopupReducer,
        loading: loadingReducer
    }
});

export { store }