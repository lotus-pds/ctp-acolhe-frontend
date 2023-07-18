import { Alert, Button } from "@material-tailwind/react";
import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid"
import { getStorage, setStorage } from "../services/config";

export function CookieAlert(props) {
    let cookie = (getStorage('cookieCtpAcolhe') || 'false') != 'true'

    const [show, setShow] = useState(cookie);

    const handleClick = () => {
        setShow(false);
        setStorage('cookieCtpAcolhe', 'true');
    }

    return (
        <Alert
            color="blue"
            className='fixed w-500 bottom-14 z-50 drop-shadow-lg pr-0'
            show={show}
            icon={
                <InformationCircleIcon className="h-8 w-6" />
            }
        >
            Este site utiliza cookies para armazenar informações. Ao continuar navegando, você concorda com o seu uso.
            <Button
                color='white'
                size='sm'
                className='ml-5'
                onClick={handleClick}
            >
                OK
            </Button>
        </Alert>
    )
}