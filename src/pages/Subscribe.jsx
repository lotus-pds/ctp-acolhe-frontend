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

export function Subscribe() {
    const [subscription, setSubscription] = useState({
        nome: '',
        email: '',
        prontuario: '',
        senha: ''
    });

    const [isFieldsValid, setIsFieldValids] = useState({});

    const navigate = useNavigate();

    const subscribe = async () => {
        let isValid = true;

        for(const key in isFieldsValid) {
            isValid = isValid && isFieldsValid[key];
        }
        
        if(isValid){
            let newSubscription = Object.assign({
                nome: "",
                email: "",
                telefone: "",
                curso: "",
                periodo: null,
                turma: "",
                prontuario: "",
                senha: ""
            }, subscription);

            await postSubscribe(newSubscription);
            navigate('/signin');
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
                        Cadastrar
                    </h4>
                    <Typography color="gray" className="mt-1 font-bold">
                        Cadastre seus dados para acessar o sistema
                    </Typography>
                        <form className="mt-5 mb-2 w-full  flex items-center flex-col">
                            <div className="mb-4 flex flex-col gap-6 w-full">
                                <Input size="xl" label="Nome" color="gray" required
                                    success={isFieldsValid.name}
                                    value={subscription.nome} error={isFieldsValid.name === false ? true : false}
                                    onChange={(e) => {
                                        setSubscription({...subscription, nome: e.target.value});
                                        setIsFieldValids({...isFieldsValid, name: validateName(e.target.value)});
                                }}                                    
                                />

                                <Typography
                                    className="
                                    text-red-500 text-xs italic -mt-4 
                                ">
                                    {isFieldsValid.name === false ? "Nome Inválido" : false}
                                </Typography>

                                <Input size="xl" label="Email Institucional" color="gray" required
                                    success={isFieldsValid.email}
                                    type="email" value={subscription.email} error={isFieldsValid.email === false ? true : false}
                                    onChange={(e) => {
                                        setSubscription({...subscription, email: e.target.value});
                                        setIsFieldValids({...isFieldsValid, email: validateEmail(e.target.value)});
                                    }}      
                                />

                                <Typography
                                    className="
                                    text-red-500 text-xs italic -mt-4 
                                ">
                                    {isFieldsValid.email === false ? "Email Inválido" : false}
                                </Typography>

                                <Input size="xl" label="Prontuário" color="gray" required
                                    success={isFieldsValid.registration}
                                    value={subscription.prontuario} error={isFieldsValid.registration === false ? true : false}
                                    onChange={(e) => {
                                        setSubscription({...subscription, prontuario: e.target.value});
                                        setIsFieldValids({...isFieldsValid, registration: validateRegistration(e.target.value)});
                                    }}      
                                />

                                <Typography
                                    className="
                                    text-red-500 text-xs italic -mt-4 
                                ">
                                    {isFieldsValid.prontuario === false ? "Prontuário Inválido" : false}
                                </Typography>
                                
                                <Input type="password" size="xl" label="Senha" color="gray" required
                                    success={isFieldsValid.password}
                                    value={subscription.senha} error={isFieldsValid.password === false ? true : false}
                                    onChange={(e) => {
                                        setSubscription({...subscription, senha: e.target.value});
                                        setIsFieldValids({...isFieldsValid, password: validatePassword(e.target.value)});
                                    }}      
                                />

                                <Typography
                                    className=
                                    "text-red-500 text-xs italic -mt-4 float-left"
                                >
                                    {isFieldsValid.password === false ? "Senha Inválida" : false}
                                </Typography>
                            </div>
                            
                            <Button className="mt-0 bg-gradient-to-r from-green-100  to-green-300" color="purple" variant="gradient"
                                onClick={subscribe}
                            >
                                Continuar
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Já possui conta?{" "}
                            
                            <Link to="/signin" className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200  to-green-300">
                            
                                Acessar
                            
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