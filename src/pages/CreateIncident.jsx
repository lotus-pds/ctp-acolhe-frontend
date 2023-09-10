import { HeaderUser } from "../components/HeaderUser";
import { GnButton } from "../components/common/button/GnButton";
import { useState } from 'react';
import { Chat } from "../components/customized/chat/Chat";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export function CreateIncident() {

    const {t} = useTranslation();

    const [step, setStep] = useState(1);

    const getCompStep = () => {
        switch (step) {
            case 1:
                return (
                    <GnButton
                        color="BLUE"
                        onClick={() => setStep(step + 1)}
                    >
                        {t("initIncident")}
                    </GnButton>
                );
            case 2:
                return (
                    <Chat />
                );
            default:
                return (
                    <GnButton
                        color="BLUE"
                        onClick={() => setStep(step + 1)}
                    >
                        {t("initIncident")}
                    </GnButton>
                );
        }
    }
    return (
        <div className="flex flex-col items-center">
            <HeaderUser/>
            <div className="grid grid-cols-1 sm:grid-cols-12 justify-center align-center sm:m-7">
                <div className="flex justify-center align-center col-span-5 sm:ml-40">
                    <img className="w-[250px] sm:w-[400px] object-contain" src="https://media.discordapp.net/attachments/1077345452694970438/1138249185024557157/3780782_77881.png?width=480&height=480" alt="" />
                </div>
                <div className="flex flex-col align-end justify-center gap-4 col-span-7 p-12">
                    <Typography variant="h2" className="font-mouse font-normal sm:text-4xl text-2xl mb-4" >
                        {t("chatTitle")}
                    </Typography>
                    <Typography className="font-normal sm:text-md text-md" >
                        {t("chatDesc.one")}
                    </Typography>
                    <Typography className="font-normal sm:text-md text-md" >
                        {t("chatDesc.two")}
                    </Typography>
                    <Typography className="font-normal sm:text-md text-md" >
                        {t("chatDesc.three")}
                    </Typography>
                </div>
            </div>
            <div className="sm:mt-[-50px] mb-[-60px] z-20">
                <a href="#chat" className="flex items-center justify-center">
                    <img className="w-[180px] sm:w-[300px]" src="https://media.discordapp.net/attachments/1077345452694970438/1138256400267628544/Component_63.png" alt="" />
                    <Typography className="absolute font-mouse text-3xl dark:text-grey-900">
                        {t("begin")}
                    </Typography>
                </a>
            </div>
            <div id="chat" className="flex flex-col sm:p-6 gap-7 justify-center mt-8 items-center w-[90%] sm:h-[550px] h-[620px] bg-gray-100 dark:bg-gray-800 rounded drop-shadow-md mb-9 border border-solid border-black dark:border-white overflow-x-hidden">
                {getCompStep()}
            </div>
        </div>
    )
}
