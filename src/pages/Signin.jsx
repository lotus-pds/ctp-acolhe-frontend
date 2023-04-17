import { 
    Card,
    Input,
    Button,
    Typography, 
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useState } from 'react';
import { postSignin } from "../services/subscribe-signin";
import { Sucessfull } from "./Sucessfull";

export function Signin() {

    const [signinData, setSigninData] = useState({
        email: '',
        senha: ''
    });
    
    
    //const signIn = useNavigate();

    //signIn('/sucessfull')

    /*
    const signIn = async () => {
        await postSignin({...signinData});
        window.location.href = '/sucessfull';
    }*/

    const sendSignIn = (e) => {
        e.preventDefault();
        let data = {
            email : signinData.email,
            senha : signinData.senha
        }
        console.log("data", data)
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
                    <img src="src/assets/img/sigin-form.png" alt="" 
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
                            onSubmit={sendSignIn}
                        >
                            <div className="mb-4 flex flex-col gap-6 w-full">
                                <Input size="lg" label="Email Institucional" color="gray" value={signinData.email} required
                                    onChange={(e) => setSigninData({...signinData, email: e.target.value})}
                                />
                                <Input type="password" size="lg" label="Senha" color="gray" value={signinData.senha} required
                                    onChange={(e) => setSigninData({...signinData, senha: e.target.value})}
                                />
                            </div>
                            
                            
                            
                            <Button className="mt-6" color="purple" variant="gradient" >
                            <Link to="/sucessfull">
                                Acessar
                            </Link>
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