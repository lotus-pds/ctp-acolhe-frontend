import {
    Card,
    Input,
    Button,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { SecondHeader } from "../components/SecondHeader";
import { useState } from 'react';
import { postForgotPassword, postResendForgotPassword } from "../services/subscribe-signin";
import { validateEmail } from "../utils";
import { useTranslation } from "react-i18next";

export function ForgotPassword(props) {

    const { t } = useTranslation()

    const [email, setEmail] = useState('');

    const isEmailValid = email === '' ? undefined : validateEmail(email.trim());

    const [success, setSuccess] = useState(false);

    const [isResendEmailEnabled, setIsResendEmailEnabled] = useState(false);

    const enableResendEmail = () => {
        setTimeout(() => {
            setIsResendEmailEnabled(true);
        }, 60000);
    }

    const sendEmail = async () => {
        await postForgotPassword(email.trim());
        setSuccess(true);
        enableResendEmail();
    }

    return (
        <div>
            <SecondHeader />
            <div
                className="w-full bg-none grid grid-cols-1 items-center justify-center"
            >
                <div
                    className="mt-[30px] sm:mt-0 max-h-[700px] flex items-center justify-center"
                >
                    <Card color="transparent" shadow={false}
                        className="w-[750px] max-h-[700px] mt-4 bg-gray-100 dark:bg-gray-800
                            grid grid-cols-1 sm:grid-cols-2 items-center justify-evenly p-6 shadow-lg 
                            dark:shadow-xl
                        "
                    >
                        <div className="
                            
                        ">
                            <img src="https://cdn.discordapp.com/attachments/1077345452694970438/1107294199239430234/11668583_20945597.png" alt="" />
                        </div>

                        <div className="flex flex-col items-center justify-center gap-2 p-4">
                            <Typography variant="h4" className="
                                bg-clip-text text-transparent bg-gradient-to-r from-blue-100  to-blue-200
                                font-mouse text-3xl font-normal dark:from-blue-400 dark:to-blue-700
                            ">
                                {t("rememberPassword")}
                            </Typography>
                            <Typography className="mt-1 font-bold text-gray-900 dark:text-gray-200 text-center">
                                {t("forgotPasswordDescription")}
                            </Typography>
                            <form className="mt-8 mb-2 w-full  flex items-center flex-col"
                            >
                                <div className="mb-4 flex flex-col gap-6 w-full">
                                    <Input size="lg" label={t("email")} color="gray" value={email} required
                                        className="text-gray-900 dark:text-gray-200"
                                        success={isEmailValid} error={isEmailValid === false ? true : false}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>

                                <Button
                                    className="mt-4 bg-gradient-to-r from-blue-100  to-blue-200dark:from-blue-400 dark:to-blue-700" 
                                    color="blue" variant="gradient" onClick={sendEmail} disabled={!isEmailValid}
                                >
                                    {t("send")}
                                </Button>
                            </form>
                        </div>

                    </Card>
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
                    {t('emailForgotPassword')}
                </DialogBody>
                <DialogFooter>
                    <Button
                        className="bg-gradient-to-r from-green-200  to-green-300"
                        color="green"
                        onClick={async () => {
                            await postResendForgotPassword(email);
                            setIsResendEmailEnabled(false);
                            enableResendEmail();
                        }}
                        disabled={!isResendEmailEnabled}
                    >
                        <span>{t('resendEmail')}</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}