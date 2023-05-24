import {
    Card,
    Input,
    Button,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { SecondHeader } from "../components/SecondHeader";
import { useState } from 'react';
import { postForgotPassword } from "../services/subscribe-signin";
import { validateEmail } from "../utils";
import { useTranslation } from "react-i18next";

export function ForgotPassword(props) {

    const { t } = useTranslation()

    const [email, setEmail] = useState('');

    const [isEmailValid, setIsEmailValid] = useState();

    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const sendEmail = async () => {

        if (isEmailValid && email != '') {
            await postForgotPassword(email.trim());
            setSuccess(true);
        } else {
            setIsEmailValid((email == '' ? false : true) && email);
        }
    }

    return (
        <div>
            <SecondHeader />
            <div
                className="w-full bg-none grid grid-cols-1 items-center justify-center"
            >
                <div
                    className="h-[500px] flex items-center justify-center"
                >
                    <Card color="transparent" shadow={false}
                        className="w-[750px] h-full bg-gray-100 dark:bg-gray-800
                            grid grid-cols-2 items-center justify-evenly p-6 shadow-lg 
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
                                            setIsEmailValid(validateEmail(e.target.value));
                                        }}
                                    />

                                    <Typography
                                        className="
                                        text-red-500 text-xs italic -mt-4 
                                    ">
                                        {isEmailValid === false ? t("invalidEmail") : false}
                                    </Typography>
                                </div>
                                
                                <Button className="mt-4 bg-gradient-to-r from-purple-100  to-purple-300
                                        dark:from-purple-400 dark:to-purple-500" color="purple" variant="gradient" onClick={sendEmail}>
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
                className="flex flex-col items-center bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
            >
                <DialogHeader>
                    <h4 className="
                    bg-clip-text text-transparent bg-gradient-to-r from-green-200  to-green-300
                    font-mouse text-3xl
                ">
                        Sucesso
                    </h4>
                </DialogHeader>
                <DialogBody>
                    Um link foi enviado para o seu email. Por ele, você poderá redefinir a sua senha e voltar a acessar nossa plataforma!
                </DialogBody>
            </Dialog>
        </div>
    )
}