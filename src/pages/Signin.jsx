import {
    Card,
    Input,
    Button,
    Typography
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { SecondHeader } from "../components/SecondHeader";
import { useState } from 'react';
import { postSignin } from "../services/subscribe-signin";
import { validateEmail, validatePassword } from "../utils";
import { useTranslation } from "react-i18next";
import { setStorage } from "../services/config";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export function Signin(props) {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [signinData, setSigninData] = useState({
        email: '',
        senha: ''
    });

    const isFieldValid = {
        email: signinData.email === '' ? undefined : validateEmail(signinData.email.trim()),
        password: signinData.senha === '' ? undefined : validatePassword(signinData.senha)
    }

    const signIn = async () => {
        let newSigninData = { ...signinData };

        newSigninData.email = newSigninData.email.trim();

        let response = await postSignin(newSigninData);
        setStorage('tokenCtpAcolhe', response.data.tokenAcesso);
        setStorage('rolesCtpAcolhe', response.data.roles);
        setStorage('authCtpAcolhe', 'true');
        navigate('/emotions');
    }

    return (
        <div>
            <SecondHeader />
            <div
                className="w-full h-full bg-none grid grid-cols-2 items-center justify-center"
            >
                <div
                    className="flex items-center justify-center"
                >
                    <img src="https://media.discordapp.net/attachments/1077345452694970438/1099732041794326698/Component_26.png?width=480&height=480" alt=""
                        className="w-[480px] ml-[100px]"
                    />
                </div>
                <div
                    className="h-[500px] flex items-center justify-center"
                >
                    <Card color="transparent" shadow={false}
                        className="w-[351px] h-full bg-gray-100 dark:bg-gray-800
                            flex - items-center justify-evenly p-6 shadow-lg mr-[100px]
                            dark:shadow-xl
                        "
                    >
                        <Typography variant="h4" className="
                        bg-clip-text text-transparent bg-gradient-to-r from-purple-100  to-purple-300
                        font-mouse text-3xl font-normal dark:from-purple-400 dark:to-purple-500
                    ">
                            {t("signIn")}
                        </Typography>
                        <Typography className="mt-1 font-bold text-gray-900 dark:text-gray-200">
                            {t("signInDesc")}
                        </Typography>
                        <form className="mt-8 mb-2 w-full  flex items-center flex-col"
                        >
                            <div className="mb-4 flex flex-col gap-6 w-full">
                                <Input size="lg" label={t("email")} color="gray" value={signinData.email} required
                                    className="text-gray-900 dark:text-gray-200"
                                    success={isFieldValid.email} error={isFieldValid.email === false ? true : false}
                                    onChange={(e) => {
                                        setSigninData({ ...signinData, email: e.target.value });
                                    }}
                                />

                                <Input type={showPassword ? "text" : "password"}

                                    size="lg" label={t("password")} color="gray" value={signinData.senha} required
                                    className="text-gray-900 dark:text-gray-200"
                                    success={isFieldValid.password} error={isFieldValid.password === false ? true : false}
                                    onChange={(e) => {
                                        setSigninData({ ...signinData, senha: e.target.value });
                                    }}
                                    icon={
                                        <Button size="sm" variant="text" className="ml-[-12px] absolute rounded hover:bg-gray-200 dark:hover:bg-gray-900 active:bg-gray-200"
                                            onClick={() => setShowPassword(!showPassword)}

                                        >
                                            {showPassword ?
                                                <EyeIcon
                                                    strokeWidth={2}
                                                    className="text-gray-800 dark:text-gray-200 w-5 h-5"
                                                /> :
                                                <EyeSlashIcon
                                                    strokeWidth={2}
                                                    className="text-gray-800 dark:text-gray-200 w-5 h-5"
                                                />
                                            }
                                        </Button>
                                    }
                                />

                                <div className="w-full flex justify-end">
                                    <Link to="/forgot-password" className="
                                        text-xs  text-gray-500 dark:text-gray-500 italic
                                    ">
                                        {t("rememberPassword")}
                                    </Link>
                                </div>

                            </div>

                            <Button
                                className="mt-4 bg-gradient-to-r from-purple-100  to-purple-300
                                dark:from-purple-400 dark:to-purple-500" color="purple" variant="gradient" onClick={signIn}
                                disabled={!Object.values(isFieldValid).every(value => value === true)}
                            >
                                {t("signIn")}
                            </Button>
                            <Typography className="mt-6 text-center font-normal text-gray-900 dark:text-gray-200">
                                {t("noRegistry")}{" "}

                                <Link to="/subscribe" className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-100  to-purple-300
                                dark:from-purple-400 dark:to-purple-500
                            ">

                                    {t("signUp")}

                                </Link>

                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}