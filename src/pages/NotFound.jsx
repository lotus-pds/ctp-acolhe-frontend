import { Input, Typography } from "@material-tailwind/react";
import { GnButton } from "../components/common/button/GnButton";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export function NotFound(){

    const navigate = useNavigate()

    const goHome = useCallback(() => {
        navigate('/')
    }, [])

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
                <GnButton className="m-8" onClick={goHome}>
                    Clique Aqui
                </GnButton>
            </div>
            <div>
                <img className="mb-8" src="https://cdn.discordapp.com/attachments/1077345452694970438/1139197088865996840/404-page-5565540-4650907-unscreen.gif" alt="" />
            </div>
        </div>
    )
}