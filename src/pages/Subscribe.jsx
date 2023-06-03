import {
    Card,
    Input,
    Button,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Tooltip,
    Checkbox
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { SecondHeader } from "../components/SecondHeader";
import { useState } from 'react';
import { postSubscribe, postResendVerification } from "../services/subscribe-signin";
import { validateEmail, validateName, validatePassword, validateRegistration } from "../utils";
import { useTranslation } from "react-i18next";
import { InformationCircleIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { FormAccount } from "../components/FormAccount";
import { FormDetails } from "../components/FormDetails";


export function Subscribe(props) {

    const { t } = useTranslation();

    const [step, setStep] = useState(1); 

    const getCompStep = () => {
        switch(step){
            case 1:
                return <FormAccount/> 
            case 2 : 
                return <FormDetails/>
            default:  
                return <FormAccount/> 
        }
    } 

    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };

    const [subscription, setSubscription] = useState({
        nome: '',
        email: '',
        prontuario: '',
        senha: ''
    });

    const [isFieldValid, setIsFieldValid] = useState({terms: false});

    const [success, setSuccess] = useState(false);

    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [isResendEmailEnabled, setIsResendEmailEnabled] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const enableResendEmail = () => {
        setTimeout(() => {
            setIsResendEmailEnabled(true);
        }, 60000);
    }

    const subscribe = async () => {
        let isValid = true;

        for (const key in isFieldValid) {
            isValid = isValid && isFieldValid[key];
        }
        if (
            isValid
            && subscription.nome != ''
            && subscription.email != ''
            && subscription.prontuario != ''
            && subscription.senha != ''
            && passwordConfirmation != ''
        ) {
            let newSubscription = { ...subscription };

            for (const key in newSubscription) {
                newSubscription[key] = newSubscription[key].trim();
            }

            await postSubscribe(newSubscription);
            setSuccess(true);
            enableResendEmail();
        } else {
            setIsFieldValid({
                ...isFieldValid,
                name: (subscription.nome == '' ? false : true) && isFieldValid.name,
                email: (subscription.email == '' ? false : true) && isFieldValid.email,
                registration: (subscription.email == '' ? false : true) && isFieldValid.registration,
                password: (subscription.senha == '' ? false : true) && isFieldValid.password,
                passwordConfirmation: (passwordConfirmation == '' ? false : true) && isFieldValid.passwordConfirmation
            });
        }
    }

    return (
        <div>
            <SecondHeader/>

            <div
                className="w-full h-full bg-none grid grid-cols-2 items-center justify-center"
            >

                <div
                    className="h-[500px] flex items-center justify-center"
                >
                    <Card color="transparent" shadow={true}
                        className="w-[350px] max-h-[650px] bg-gray-100
                            dark:bg-gray-800
                            flex - items-center justify-evenly p-6 shadow-lg
                            dark:shadow-xl
                            ml-[100px]
                        "
                    >

                        <Typography variant="h4" className="
                        bg-clip-text text-transparent bg-gradient-to-r from-green-200  to-green-300
                        dark:from-green-300 dark:to-green-400
                        font-mouse text-3xl font-normal
                    ">
                            {t("signUp")}
                        </Typography>
                        <Typography className="mt-1 font-bold text-gray-900 dark:text-gray-200">
                            {t("signUpDesc")}
                        </Typography>
                        <form className="mt-5 mb-2 w-full  flex items-center flex-col">
                            
                            {getCompStep()}

                            <div className="flex gap-3 p-3 w-full justify-around align-center">
                                <Button className="mt-0 bg-gradient-to-r from-gray-500  to-gray-700
                                        dark:from-gray-200 dark:to-gray-400 dark:text-gray-900
                                    "   
                                    color="gray" variant="gradient"
                                    onClick={() => console.log(setStep(step - 1))}
                                    disabled={step === 1}
                                >
                                    {t("back")}
                                </Button>

                                <Button className="mt-0 bg-gradient-to-r from-green-200  to-green-300
                                        dark:from-green-300 dark:to-green-400
                                    "   
                                        color="green" variant="gradient"
                                        onClick={() => step === 1 ? setStep(step + 1) : subscribe}
                                    >
                                        {step === 2 ? t("subscribe") : t("next")}
                                </Button>
                            </div>

                            <Typography className="mt-4 text-center font-normal text-gray-900 dark:text-gray-200">
                                {t("haveRegistration")}{" "}

                                <Link to="/signin" className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200  to-green-400
                                dark:from-green-300 dark:to-green-400
                            ">

                                    {t("signIn")}

                                </Link>

                            </Typography>
                        </form>
                    </Card>
                </div>

                <div
                    className="flex items-center justify-center"
                >
                    <img src="https://media.discordapp.net/attachments/1077345452694970438/1097572563443531856/subscribe-img.png?width=480&height=480" alt=""
                        className="w-[530px] mr-[100px]"
                    />
                </div>
            </div>

            <Dialog
                open={success}
                size="sm"
                className="flex flex-col items-center bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
            >
                <DialogHeader>
                    <h4 className="
                    bg-clip-text text-transparent bg-gradient-to-r from-green-200  to-green-300
                    font-mouse text-3xl
                ">
                        {t('success')}
                    </h4>
                </DialogHeader>
                <DialogBody className='text-center'>
                    {t('subscriptionSuccess')}
                </DialogBody>
                <DialogFooter>
                    <Button
                        className="bg-gradient-to-r from-green-200  to-green-300"
                        color="green"
                        disabled={!isResendEmailEnabled}
                        onClick={async () => {
                            await postResendVerification(subscription.email);
                            setIsResendEmailEnabled(false);
                            enableResendEmail();
                        }}
                    >
                        <span>{t('resendEmail')}</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}