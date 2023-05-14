import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
    message: ''
};

const errorPopupSlice = createSlice({
    name: 'errorPopup',
    initialState,
    reducers: {
        activateErrorPopup: (state, action) => {
            state.open = true;
            state.message = action.payload;
        },
        inactivateErrorPopup: state => {
            state.open = false;
            state.message = '';
        }
    }
});

export default errorPopupSlice.reducer;
export const { activateErrorPopup, inactivateErrorPopup } = errorPopupSlice.actions;