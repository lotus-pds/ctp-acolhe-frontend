import {
    Card,
    Input,
    Button,
    Typography
} from "@material-tailwind/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SecondHeader } from "../components/SecondHeader";
import { useState } from 'react';
import { validatePassword } from "../utils";
import { useTranslation } from "react-i18next";
import { patchResetPassword } from "../services/subscribe-signin";

export function ResetPassword(props) {

    const { token } = useParams();

    const { t } = useTranslation();

    const [password, setPassword] = useState('');

    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [isFieldValid, setIsFieldValid] = useState({});

    const navigate = useNavigate();

    const resetPassword = async () => {
        let isValid = true;

        for (const key in isFieldValid) {
            isValid = isValid && isFieldValid[key];
        }

        if (isValid && password != '' && passwordConfirmation != '') {
            let newPassword = { token, senha: password.trim() };
            await patchResetPassword(newPassword);
            navigate('/reset-successfull');
        } else {
            setIsFieldValid({
                password: (password == '' ? false : true) && isFieldValid.password,
                passwordConfirmation: (passwordConfirmation == '' ? false : true) && isFieldValid.passwordConfirmation
            });
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
                                bg-clip-text text-transparent bg-gradient-to-r from-blue-100  to-blue-300
                                font-mouse text-3xl font-normal dark:from-blue-400 dark:to-blue-500
                            ">
                                {t("resetPassword")}
                            </Typography>
                            <Typography className="mt-1 font-bold text-gray-900 dark:text-gray-200 text-center">
                                {t("resetPassowordDesciption")}
                            </Typography>
                            <form className="mt-8 mb-2 w-full  flex items-center flex-col"
                            >
                                <div className="mb-4 flex flex-col gap-6 w-full">
                                    <Input type="password" size="lg" label={t("newPassword")} color="gray" value={password} required
                                        className="text-gray-900 dark:text-gray-200"
                                        success={isFieldValid.password} error={isFieldValid.password === false ? true : false}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            setIsFieldValid({ ...isFieldValid, password: validatePassword(e.target.value), passwordConfirmation: (passwordConfirmation == e.target.value) && validatePassword(e.target.value) });
                                        }}
                                    />

                                    <Typography
                                        className=
                                        "text-red-500 text-xs italic -mt-4 float-left"
                                    >
                                        {isFieldValid.password === false ? t("invalidPassword") : false}
                                    </Typography>

                                    <Input type="password" size="md" label={t("confirmPassword")} color="gray" required
                                        className="text-gray-900 dark:text-gray-200"
                                        success={isFieldValid.passwordConfirmation}
                                        value={passwordConfirmation} error={isFieldValid.passwordConfirmation === false ? true : false}
                                        onChange={(e) => {
                                            setIsFieldValid({ ...isFieldValid, passwordConfirmation: (e.target.value == password) && isFieldValid.password });
                                            setPasswordConfirmation(e.target.value);
                                        }}
                                    />

                                    <Typography
                                        className=
                                        "text-red-500 text-xs italic -mt-4 float-left"
                                    >
                                        {isFieldValid.passwordConfirmation === false ? t("invalidPasswordConfirmation") : false}
                                    </Typography>
                                </div>
                                
                                <Button className="mt-4 bg-gradient-to-r from-purple-100  to-purple-300
                                    dark:from-purple-400 dark:to-purple-500
                                    " color="purple" variant="gradient" onClick={resetPassword}>
                                    {t("confirmReset")}
                                </Button>
                            </form>
                        </div>

                    </Card>
                </div>
            </div>
        </div>
    )
}