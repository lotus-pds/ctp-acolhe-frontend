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

export function RememberPassword(props) {

    const {t} = useTranslation()

    const {setError} = props;
    
    const [signinData, setSigninData] = useState({
        email: '',
        senha: ''
    });

    const [isFieldValid, setIsFieldValid] = useState({});

    const navigate = useNavigate();
    
    const signIn = async () => {
        let isValid = true;

        for(const key in isFieldValid) {
            isValid = isValid && isFieldValid[key];
        }

        try{            
            if(isValid && signinData.email != '' && signinData.senha != ''){
                let newSigninData = {...signinData};

                for(const key in newSigninData) {
                    newSigninData[key] = newSigninData[key].trim();
                }

                let response = await postSignin(newSigninData);
                setStorage('token', response.data.tokenAcesso);
                setStorage('roles', ['Aluno', 'Admin']);
                setStorage('auth', 'true');
                navigate('/emotions');
            } else {
                setIsFieldValid({
                    email: (signinData.email == '' ? false : true) && isFieldValid.email,
                    password: (signinData.senha == '' ? false : true) && isFieldValid.password
                });
            }
        } catch(e) {
            setError({visible: true, message: e.response.data.errors[0]});
        }
    }

    return(
        <div>
            <SecondHeader/>
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
                                onSubmit={signIn}
                            >
                                <div className="mb-4 flex flex-col gap-6 w-full">
                                    <Input size="lg" label={t("email")} color="gray" value={signinData.email} required
                                        className="text-gray-900 dark:text-gray-200"
                                        success={isFieldValid.email} error={isFieldValid.email === false ? true : false}
                                        onChange={(e) => {
                                            setSigninData({...signinData, email: e.target.value});
                                            setIsFieldValid({...isFieldValid, email: validateEmail(e.target.value)});
                                        }}
                                    />

                                    <Typography
                                        className="
                                        text-red-500 text-xs italic -mt-4 
                                    ">
                                        {isFieldValid.email === false ? t("invalidEmail") : false}
                                    </Typography>
                                </div>
                                
                                
                                {/**
                                 * UTILIZAR ESSE COMPONENTE QUANDO ESTIVER PRONTO O ROTEAMENTO
                                 * <Button className="mt-4 bg-gradient-to-r from-purple-100  to-purple-300
                                        dark:from-purple-400 dark:to-purple-500" color="purple" variant="gradient" onClick="">
                                        {t("send")}
                                    </Button>
                                 */}

                                 {/**
                                 * ESSE É SOMENTE PARA VISUALIZAÇÃO DE FLUXO DE TELA
                                 */}
                                <Link className="mt-4 bg-gradient-to-r from-blue-100  to-blue-200
                                    dark:blue-purple-400 dark:to-blue-700 p-2 rounded  text-gray-100
                                " to="/reset-password">
                                    {t("send")}
                                </Link>
                            </form>
                        </div>
                    
                    </Card>
                </div>
            </div>
        </div>
    )
}