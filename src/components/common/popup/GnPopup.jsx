import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const getTitle = type => {
    const pattern = 'bg-clip-text text-transparent bg-gradient-to-r font-mouse text-xl sm:text-3xl p-4';

    const { t } = useTranslation();

    switch (type) {
        case 'ERROR':
            return (
                <h4 className={pattern + ' from-red-200 to-red-300'}>
                    {t("error")}
                </h4>
            );
        case 'SUCCESS':
            return (
                <h4 className={pattern + ' from-green-200 to-green-300'}>
                    {t('success')}
                </h4>
            );
        case 'LOADING':
            return (
                <h4 className={pattern + ' from-purple-200 to-purple-300'}>
                    {t('loading')}
                </h4>
            );
        default:
            return undefined;
    }
}

export const GnPopup = (props) => {
    const { open, size = 'sm', text = undefined, btn = undefined, type, className = '' } = props;

    return (
        <Dialog
            open={open}
            size={size}
            className={'flex flex-col items-center bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 ' + className}
        >
            <DialogHeader>
                {getTitle(type)}
            </DialogHeader>

            {text != undefined
                ? <DialogBody className='text-center'>
                    {text}
                </DialogBody>
                : undefined
            }

            {btn != undefined
                ? <DialogFooter>
                    {btn}
                </DialogFooter>
                : undefined
            }
        </Dialog>
    )
}