import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { GnButton } from "../button/GnButton";

export function WarningPopup(props) {
    const { open, handleOpen, onConfirm } = props;

    const { t } = useTranslation();

    return (
        <Dialog
            open={open}
            size="sm"
            className={'flex flex-col items-center bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100'}
        >
            <DialogHeader>
                <h4 className='bg-clip-text text-transparent bg-gradient-to-r font-mouse text-3xl from-red-200 to-red-300'>
                    {t("warning")}
                </h4>
            </DialogHeader>
            <DialogBody className='text-center dark:text-gray-200'>
                {t("warningAction")}
            </DialogBody>
            <DialogFooter>
                <GnButton
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                >
                    {t("no")}
                </GnButton>
                <GnButton color="RED" onClick={() => onConfirm()}>
                    {t("yes")}
                </GnButton>
            </DialogFooter>
        </Dialog>
    )
}