import { store } from "../redux/store";
import { activateLoading, inactivateLoading } from "../redux/features/loadingSlice";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";

let count = 0;

export const addCountLoading = () => {
    count++;
    if (count == 1) {
        store.dispatch(activateLoading());
    }
};

export const removeCountLoading = () => {
    count--;
    if (count == 0) {
        store.dispatch(inactivateLoading());
    }
};

export const Loading = (props) => {
    const { open } = useSelector(state => state.loading);

    if (open) {
        return (
            <div style={{ zIndex: 1000000000 }} className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/80 dark:bg-white/50 flex justify-center items-center">
                <Spinner color="purple" className="h-12 w-12" />
            </div>
        );

    }
}