import { Logo } from "../components/Logo";

export function Sucessfull(){

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