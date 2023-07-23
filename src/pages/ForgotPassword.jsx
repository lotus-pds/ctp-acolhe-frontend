import {
    Card,
    Typography
} from "@material-tailwind/react";
import { GnPopup } from "../components/common/popup/GnPopup";
import { GnButton } from "../components/common/button/GnButton";
import { CommonInput } from "../components/common/input/CommonInput";
import { SecondHeader } from "../components/SecondHeader";
import { useState } from 'react';
import { postForgotPassword, postResendForgotPassword } from "../services/subscribe-signin";
import { validateEmail } from "../common/validations";
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
                                    <CommonInput
                                        size="lg"
                                        label={t("email")}
                                        value={email}
                                        required
                                        success={isEmailValid}
                                        error={isEmailValid === false ? true : false}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                </div>

                                <GnButton
                                    className="mt-4 "
                                    color="BLUE"
                                    variant="gradient"
                                    onClick={sendEmail}
                                    disabled={!isEmailValid}
                                >
                                    {t("send")}
                                </GnButton>
                            </form>
                        </div>

                    </Card>
                </div>
            </div>
            <GnPopup
                open={success}
                type='SUCCESS'
                text={t('emailForgotPassword')}
                btn={
                    <GnButton
                        color="GREEN"
                        onClick={async () => {
                            await postResendForgotPassword(email);
                            setIsResendEmailEnabled(false);
                            enableResendEmail();
                        }}
                        disabled={!isResendEmailEnabled}
                    >
                        {t('resendEmail')}
                    </GnButton>
                }
            />
        </div>
    )
}