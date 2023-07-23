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
            color="blue"
            className='fixed w-500 bottom-14 z-50 drop-shadow-lg pr-0'
            show={show}
            icon={
                <InformationCircleIcon className="h-8 w-6" />
            }
        >
            {t('cookie')}
            <GnButton
                color='white'
                size='sm'
                className='ml-5'
                onClick={handleClick}
            >
                OK
            </GnButton>
        </Alert>
    )
}