import { Alert } from "@material-tailwind/react";
import { GnButton } from "./common/button/GnButton";
import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid"
import { getStorage, setStorage } from "../services/config";
import { useTranslation } from "react-i18next";

export function CookieAlert(props) {
    let cookie = (getStorage('cookieCtpAcolhe') || 'false') != 'true'

    const [show, setShow] = useState(cookie);

    const handleClick = () => {
        setShow(false);
        setStorage('cookieCtpAcolhe', 'true');
    }

    const { t } = useTranslation();

    return (
        <Alert
            className='bg-white dark:bg-gray-900 fixed border border-solid border-gray-900 dark:border-gray-200 text-gray-900 dark:text-gray-200 w-500 bottom-14 z-50 shadow-lg pr-0'
            open={show}
            icon={
                <InformationCircleIcon className="h-8 w-6" />
            }
        >
            {t('cookie')}
            <GnButton
                color='white'
                size='sm'
                className='ml-5 border border-solid border-gray-900 dark:border-gray-200'
                onClick={handleClick}
            >
                OK
            </GnButton>
        </Alert>
    )
}