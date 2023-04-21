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
import { postSignin } from "../services/subscribe-signin";
import { Sucessfull } from "./Successful";
import { validateEmail, validatePassword } from "../utils";

export function Signin(props) {
    const {setState} = props;
    
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
                    console.log(newSigninData[key]);
                }

                await postSignin(newSigninData);
                navigate('/successful');
            } else {
                setIsFieldValid({
                    email: (signinData.email == '' ? false : true) && isFieldValid.email,
                    password: (signinData.senha == '' ? false : true) && isFieldValid.password
                });
            }
        } catch(e) {
            setState({visible: true, message: e.response.data.errors[0]});
        }
    }

    return(
        <div>
            <Header/>
            <div 
                className="w-full h-full bg-none grid grid-cols-2 items-center justify-center"
            >
                <div
                    className="flex items-center justify-center"
                >
                    <img src="https://media.discordapp.net/attachments/1077345452694970438/1097572129110773780/sigin-form.png?width=480&height=480" alt="" 
                        className="w-[530px] ml-[100px]"
                    />
                </div>
                <div
                    className="h-[500px] flex items-center justify-center"
                >
                    <Card color="transparent" shadow={false}
                        className="w-[351px] h-full bg-gray-100
                            flex - items-center justify-evenly p-6 shadow-lg mr-[100px]
                        "
                    >
                    <h4 className="
                        bg-clip-text text-transparent bg-gradient-to-r from-purple-100  to-purple-300
                        font-mouse text-3xl
                    "> 
                        Acessar
                    </h4>
                    <Typography color="gray" className="mt-1 font-bold">
                        Entre com suas credencias para seguir adiante!
                    </Typography>
                        <form className="mt-8 mb-2 w-full  flex items-center flex-col"
                            onSubmit={signIn}
                        >
                            <div className="mb-4 flex flex-col gap-6 w-full">
                                <Input size="lg" label="Email Institucional" color="gray" value={signinData.email} required
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
                                    {isFieldValid.email === false ? "Email Inválido" : false}
                                </Typography>

                                <Input type="password" size="lg" label="Senha" color="gray" value={signinData.senha} required
                                    success={isFieldValid.password} error={isFieldValid.password === false ? true : false}
                                    onChange={(e) => {
                                        setSigninData({...signinData, senha: e.target.value});
                                        setIsFieldValid({...isFieldValid, password: validatePassword(e.target.value)});
                                    }}
                                />

                                <Typography
                                    className=
                                    "text-red-500 text-xs italic -mt-4 float-left"
                                >
                                    {isFieldValid.password === false ? "Senha Inválida" : false}
                                </Typography>
                            </div>
                            
                            
                            
                            <Button className="mt-6" color="purple" variant="gradient" onClick={signIn}>
                                Acessar
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Não possui conta ainda?{" "}
                            
                            <Link to="/subscribe" className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-100  to-purple-300">
                            
                                Cadastrar
                            
                            </Link>
                            
                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}