import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { GnButton } from "../button/GnButton";

export function WarningPopup(props) {
    const { open, setOpen, onConfirm } = props;

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
            <DialogBody className='text-center'>
                {t("warningAction")}
            </DialogBody>
            <DialogFooter>
                <GnButton
                    variant="text"
                    color="red"
                    onClick={() => setOpen(false)}
                    className="mr-1"
                >
                    {t("cancel")}
                </GnButton>
                <GnButton color="RED" onClick={() => onConfirm()}>
                    {t("confirm")}
                </GnButton>
            </DialogFooter>
        </Dialog>
    )
}