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
import { Header } from "../components/Header";
import { useState } from 'react';
import { postSubscribe } from "../services/subscribe-signin";
import { validateEmail, validateName, validatePassword, validateRegistration } from "../utils";
import { useTranslation } from "react-i18next";


export function Subscribe(props) {

    const {t} = useTranslation();

    const {setError} = props;

    const [subscription, setSubscription] = useState({
        nome: '',
        email: '',
        prontuario: '',
        senha: ''
    });

    const [isFieldValid, setIsFieldValid] = useState({});

    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const subscribe = async () => {
        let isValid = true;

        for(const key in isFieldValid) {
            isValid = isValid && isFieldValid[key];
        }
        
        try{
            if(
                isValid 
                && subscription.nome != '' 
                && subscription.email != '' 
                && subscription.prontuario != ''
                && subscription.senha != ''
            ){
                let newSubscription = {...subscription};

                for(const key in newSubscription) {
                    newSubscription[key] = newSubscription[key].trim();
                }

                await postSubscribe(newSubscription);
                setSuccess(true);
            } else {
                setIsFieldValid({
                    name: (subscription.nome == '' ? false : true) && isFieldValid.name,
                    email: (subscription.email == '' ? false : true) && isFieldValid.email,
                    registration: (subscription.email == '' ? false : true) && isFieldValid.registration,
                    password: (subscription.senha == '' ? false : true) && isFieldValid.password
                });
            }
        } catch(e) {
            setError({visible: true, message: e.response.data.errors[0]})
        }
    }

    return(
        <div>

            <Header/>

            <div 
                className="w-full h-full bg-none grid grid-cols-2 items-center justify-center"
            >

                <div
                    className="h-[500px] flex items-center justify-center"
                >
                    <Card color="transparent" shadow={true}
                        className="w-[351px] max-h-[600px] bg-gray-100
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
                            <div className="mb-4 flex flex-col gap-6 w-full">
                                <Input size="md" label={t("name")} color="gray" required
                                    className="text-gray-900 dark:text-gray-200"
                                    success={isFieldValid.name}
                                    value={subscription.nome} error={isFieldValid.name === false ? true : false}
                                    onChange={(e) => {
                                        setSubscription({...subscription, nome: e.target.value});
                                        setIsFieldValid({...isFieldValid, name: validateName(e.target.value)});
                                }}                                    
                                />

                                <Typography
                                    className="
                                    text-red-500 text-xs italic -mt-4 
                                ">
                                    {isFieldValid.name === false ? t("invalidName") : false}
                                </Typography>

                                <Input size="md" label={t("email")} color="gray" required
                                    className="text-gray-900 dark:text-gray-200"
                                    success={isFieldValid.email}
                                    type="email" value={subscription.email} error={isFieldValid.email === false ? true : false}
                                    onChange={(e) => {
                                        setSubscription({...subscription, email: e.target.value});
                                        setIsFieldValid({...isFieldValid, email: validateEmail(e.target.value)});
                                    }}      
                                />

                                <Typography
                                    className="
                                    text-red-500 text-xs italic -mt-4 
                                ">
                                    {isFieldValid.email === false ? t("invalidEmail") : false}
                                </Typography>

                                <Input size="md" label={t("registration")} color="gray" required
                                    className="text-gray-900 dark:text-gray-200"
                                    success={isFieldValid.registration}
                                    value={subscription.prontuario} error={isFieldValid.registration === false ? true : false}
                                    onChange={(e) => {
                                        setSubscription({...subscription, prontuario: e.target.value});
                                        setIsFieldValid({...isFieldValid, registration: validateRegistration(e.target.value)});
                                    }}      
                                />

                                <Typography
                                    className="
                                    text-red-500 text-xs italic -mt-4 
                                ">
                                    {isFieldValid.registration === false ? t("invalidRegistration") : false}
                                </Typography>
                                
                                <Input type="password" size="md" label={t("password")} color="gray" required
                                    className="text-gray-900 dark:text-gray-200"
                                    success={isFieldValid.password}
                                    value={subscription.senha} error={isFieldValid.password === false ? true : false}
                                    onChange={(e) => {
                                        setSubscription({...subscription, senha: e.target.value});
                                        setIsFieldValid({...isFieldValid, password: validatePassword(e.target.value)});
                                    }}      
                                />

                                <Typography
                                    className=
                                    "text-red-500 text-xs italic -mt-4 float-left"
                                >
                                    {isFieldValid.password === false ? t("invalidPassword") : false}
                                </Typography>
                            </div>
                            
                            <Button className="mt-0 bg-gradient-to-r from-green-200  to-green-300
                                dark:from-green-300 dark:to-green-400
                            "     
                                color="green" variant="gradient"
                                onClick={subscribe}
                            >
                                {t("continue")}
                            </Button>
                            <Typography  className="mt-4 text-center font-normal text-gray-900 dark:text-gray-200">
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
                Ufa, falta pouco! Um link de confirmação foi enviado para o seu email. Após acessá-lo, seu cadastro será concluído.
            </DialogBody>
            <DialogFooter>
            <Button
                className="bg-gradient-to-r from-green-200  to-green-300"
                color="green"
                onClick={() => navigate('/signin')}
            >
                <span>OK</span>
            </Button>
            </DialogFooter>
            </Dialog>
        </div>
    )
}