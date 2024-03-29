import {
    Card,
    Typography,
} from "@material-tailwind/react";
import { GnButton } from "../components/common/button/GnButton";
import { CommonInput } from "../components/common/input/CommonInput";
import { InfoInput } from "../components/common/input/InfoInput";
import { useNavigate, useParams } from "react-router-dom";
import { SecondHeader } from "../components/SecondHeader";
import { useState } from 'react';
import { validatePassword } from "../common/validations";
import { useTranslation } from "react-i18next";
import { patchResetPassword } from "../services/subscribe-signin";

export function ResetPassword(props) {

    const { token } = useParams();

    const { t } = useTranslation();

    const [password, setPassword] = useState('');

    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const isFieldValid = {
        password: password === '' ? undefined : validatePassword(password),
        passwordConfirmation: passwordConfirmation === '' ? undefined : ((passwordConfirmation == password) && validatePassword(passwordConfirmation))
    }

    const navigate = useNavigate();

    const resetPassword = async () => {
        let newPassword = { token, senha: password.trim() };
        await patchResetPassword(newPassword);
        navigate('/redefinir_senha/sucesso');
    }

    return (
        <div>
            <SecondHeader />
            <div
                className="w-full bg-none grid grid-cols-1 items-center justify-center"
            >
                <div
                    className="mt-[30px] sm:mt-0 max-h-[750px] flex items-center justify-center"
                >
                    <Card color="transparent" shadow={false}
                        className="w-[750px] max-h-[750px] bg-gray-100 dark:bg-gray-800 m-4
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
                                    <InfoInput
                                        type="password"
                                        size="lg"
                                        label={t("newPassword")}
                                        value={password}
                                        required
                                        success={isFieldValid.password}
                                        error={isFieldValid.password === false ? true : false}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                        info={{
                                            title: t("tooltipPassword.attribute"),
                                            text: [
                                                t("tooltipPassword.description"),
                                                t("tooltipPassword.descriptionTwo"),
                                                t("tooltipPassword.descriptionThree"),
                                                t("tooltipPassword.descriptionFour"),
                                                t("tooltipPassword.descriptionFive")
                                            ]
                                        }}
                                    />

                                    <CommonInput
                                        type="password"
                                        size="md"
                                        label={t("confirmPassword")}
                                        required
                                        success={isFieldValid.passwordConfirmation}
                                        value={passwordConfirmation}
                                        error={isFieldValid.passwordConfirmation === false ? true : false}
                                        onChange={(e) => {
                                            setPasswordConfirmation(e.target.value);
                                        }}
                                    />
                                </div>

                                <GnButton
                                    className="mt-4"
                                    color="BLUE"
                                    variant="gradient"
                                    onClick={resetPassword}
                                    disabled={!Object.values(isFieldValid).every(value => value === true)}
                                >
                                    {t("confirmReset")}
                                </GnButton>
                            </form>
                        </div>

                    </Card>
                </div>
            </div>
        </div>
    )
}