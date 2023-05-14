import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        activateLoading: state => {
            state.open = true;
        },
        inactivateLoading: state => {
            state.open = false;
        }
    }
});

export default loadingSlice.reducer;
export const { activateLoading, inactivateLoading } = loadingSlice.actions;