import { Input, Typography } from "@material-tailwind/react";
import { GnButton } from "../components/common/button/GnButton";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useTheme } from "../hooks/useTheme";

export function NotFound(){

    const navigate = useNavigate()

    const {theme} = useTheme();

    const goHome = useCallback(() => {
        navigate('/')
    }, [])

    if (theme === "dark") {
        return(
            <div className="w-full h-screen grid sm:grid-cols-2 p-12 sm:gap-8 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <Typography variant="h3" className="flex flex-col justify-center items-center sm:items-start sm:p-12 gap-6">
                        <strong className="font-mouse text-[108px]">Ops !!</strong>
                        <span className="font-normal">
                            Nós não conseguimos encontrar essa página
                        </span>
                        <span className="text-xl font-bold">
                            Código de Erro: 404
                        </span>
                        <span className="text-xl font-normal">
                            Clique no Botão abaixo para retornar à página inicial.
                        </span>
                    </Typography>
                    <GnButton className="m-8 dark:bg-gray-200 dark:text-gray-900" onClick={goHome}>
                        Clique Aqui
                    </GnButton>
                </div>
                <div>
                    <img className="mb-8" src="https://media.discordapp.net/attachments/1077345452694970438/1140841793538244638/Component_6_4.png?width=609&height=480" alt="" />
                </div>
            </div>
        )
    }

    return(
        <div className="w-full h-screen grid sm:grid-cols-2 p-12 sm:gap-8 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <Typography variant="h3" className="flex flex-col justify-center items-center sm:items-start sm:p-12 gap-6">
                    <strong className="font-mouse text-[108px]">Ops !!</strong>
                    <span className="font-normal">
                        Nós não conseguimos encontrar essa página
                    </span>
                    <span className="text-xl font-bold">
                        Código de Erro: 404
                    </span>
                    <span className="text-xl font-normal">
                        Clique no Botão abaixo para retornar à página inicial.
                    </span>
                </Typography>
                <GnButton className="m-8 dark:bg-gray-200 dark:text-gray-900" onClick={goHome}>
                    Clique Aqui
                </GnButton>
            </div>
            <div>
                <img className="mb-8" src="https://media.discordapp.net/attachments/1077345452694970438/1140841793211076608/Component_8.png?width=609&height=480" alt="" />
            </div>
        </div>
    )
}