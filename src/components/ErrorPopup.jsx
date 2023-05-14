import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { inactivateErrorPopup } from "../redux/features/errorPopupSlice";

export const ErrorPopup = (props) => {
    const { open, message } = useSelector( state => state.errorPopup );

    const dispatch = useDispatch();
    
    return (
        <Dialog
            open={open}
            size="sm"
            className="flex flex-col items-center bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
        >
            <DialogHeader>
                <h4 className="
                    bg-clip-text text-transparent bg-gradient-to-r from-red-200  to-red-300
                    font-mouse text-3xl
                "> 
                    Erro
                </h4>
            </DialogHeader>
            <DialogBody>
                {message}
            </DialogBody>
            <DialogFooter>
            <Button
                className="bg-gradient-to-r from-red-200  to-red-300"
                color="red"
                onClick={() => dispatch(inactivateErrorPopup())}
            >
                <span>OK</span>
            </Button>
            </DialogFooter>
        </Dialog>
    );
}