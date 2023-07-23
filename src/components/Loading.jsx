import { GnPopup } from "./common/popup/GnPopup";
import { store } from "../redux/store";
import { activateLoading, inactivateLoading } from "../redux/features/loadingSlice";
import { useSelector } from "react-redux";

let count = 0;

export const addCountLoading = () => {
    count++;
    if(count == 1) {
        store.dispatch(activateLoading());
    }
};

export const removeCountLoading = () => {
    count--;
    if(count == 0) {
        store.dispatch(inactivateLoading());
    }
};

export const Loading = (props) => {
    const { open } = useSelector(state => state.loading);

    return (
        <GnPopup
            open={open}
            size="xs"
            type='LOADING'
        />
    );
}