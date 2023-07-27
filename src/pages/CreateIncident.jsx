import { HeaderUser } from "../components/HeaderUser";
import { GnButton } from "../components/common/button/GnButton";
import { useState } from 'react';
import { Chat } from "../components/Chat";

export function CreateIncident(){

    const [step, setStep] = useState(1);

    const getCompStep = () => {
        switch (step) {
            case 1:
                return (
                    <GnButton color="BLUE"
                        onClick={() => setStep(step + 1)}
                    >Iniciar criação de incidente</GnButton>
                );
            case 2:
                return (
                    <Chat/>
                );
            default:
                return (
                    <GnButton color="BLUE"
                        onClick={() => setStep(step + 1)}
                    >Iniciar criação de incidente</GnButton>
                );
        }
    }
    return(
        <div className="flex flex-col items-center">
            <HeaderUser/>
            <div className="flex flex-col p-6 gap-7 justify-center mt-8 items-center w-[90%] h-[500px] bg-gray-100 dark:bg-gray-800 rounded drop-shadow-md">

                {getCompStep()}
                
            </div>
        </div>
    )
}