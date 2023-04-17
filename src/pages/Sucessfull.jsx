import { Logo } from "../components/Logo";
import { useState } from 'react';

export function Sucessfull(){


    const [subscription, setSubscription] = useState({
        nome: '',
        email: '',
        prontuario: '',
        senha: ''
    });

    return(
        <div
            className="w-screen h-screen flex items-center flex-col justify-center p-4"
        >
            <p
                className="text-4xl"
            >
                Olá, você acessou com sucesso o CTP Acolhe. Seja Bem-vindo(a)!
            </p>
            <Logo/>
        </div>
    );
}