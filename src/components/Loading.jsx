import {
    Button,
    Dialog,
    DialogHeader
} from "@material-tailwind/react";
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
        <Dialog
            open={open}
            size="xs"
            className="flex flex-col items-center bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
        >
            <DialogHeader>
                <h4 className="
                    bg-clip-text text-transparent bg-gradient-to-r from-purple-200  to-purple-300
                    font-mouse text-3xl
                ">
                    Carregando...
                </h4>
            </DialogHeader>
        </Dialog>
    );
}