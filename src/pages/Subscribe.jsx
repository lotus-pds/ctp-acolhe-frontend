import { 
    Card,
    Input,
    Button,
    Typography, 
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useState } from 'react';
import { postSubscribe } from "../services/subscribe-signin";
import { validateEmail, validateName, validatePassword, validateRegistration } from "../utils";
import { useTranslation } from "react-i18next";


export function Subscribe(props) {

    const {t} = useTranslation();

    const {setState} = props;

    const [subscription, setSubscription] = useState({
        nome: '',
        email: '',
        prontuario: '',
        senha: ''
    });

    const [isFieldValid, setIsFieldValid] = useState({});

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
                    console.log(newSubscription[key]);
                }

                await postSubscribe(newSubscription);
                navigate('/signin');
            } else {
                setIsFieldValid({
                    name: (subscription.nome == '' ? false : true) && isFieldValid.name,
                    email: (subscription.email == '' ? false : true) && isFieldValid.email,
                    registration: (subscription.email == '' ? false : true) && isFieldValid.registration,
                    password: (subscription.senha == '' ? false : true) && isFieldValid.password
                });
            }
        } catch(e) {
            setState({visible: true, message: e.response.data.errors[0]})
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
                            flex - items-center justify-evenly p-6 shadow-lg
                            ml-[100px]
                        "
                    >
                    
                    <h4 className="
                        bg-clip-text text-transparent bg-gradient-to-r from-green-100  to-green-300
                        font-mouse text-3xl
                    "> 
                        {t("signUp")}
                    </h4>
                    <Typography color="gray" className="mt-1 font-bold">
                        {t("signUpDesc")}
                    </Typography>
                        <form className="mt-5 mb-2 w-full  flex items-center flex-col">
                            <div className="mb-4 flex flex-col gap-6 w-full">
                                <Input size="xl" label={t("name")} color="gray" required
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

                                <Input size="xl" label={t("email")} color="gray" required
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

                                <Input size="xl" label={t("registration")} color="gray" required
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
                                
                                <Input type="password" size="xl" label={t("password")} color="gray" required
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
                            
                            <Button className="mt-0 bg-gradient-to-r from-green-100  to-green-300" color="green" variant="gradient"
                                onClick={subscribe}
                            >
                                {t("continue")}
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                {t("haveRegistration")}{" "}
                            
                            <Link to="/signin" className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200  to-green-300">
                            
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
        </div>
    )
}