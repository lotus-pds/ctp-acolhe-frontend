import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { GnButton } from "./common/button/GnButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { inactivateErrorPopup } from "../redux/features/errorPopupSlice";
import { useTranslation } from "react-i18next";

export const ErrorPopup = (props) => {
    const { open, message } = useSelector(state => state.errorPopup);

    const dispatch = useDispatch();

    const { t } = useTranslation();

    return (
        <Dialog
            open={open}
            size="sm"
            className="flex flex-col items-center bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white"
        >
            <DialogHeader>
                <h4 className="
                    bg-clip-text text-transparent bg-gradient-to-r from-red-200  to-red-300
                    font-mouse text-3xl
                ">
                    {t("error")}
                </h4>
            </DialogHeader>
            <DialogBody className='text-center'>
                {message}
            </DialogBody>
            <DialogFooter>
                <GnButton
                    color="RED"
                    onClick={() => dispatch(inactivateErrorPopup())}
                >
                    <span>OK</span>
                </GnButton>
            </DialogFooter>
        </Dialog>
    );
}