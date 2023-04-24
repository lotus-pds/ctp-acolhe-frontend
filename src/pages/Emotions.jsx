import { Typography } from "@material-tailwind/react"
import { useTranslation } from "react-i18next"

export function Emotions(){


    const {t} = useTranslation();

    return(
        <div className="w-full h-screen flex items-center justify-center flex-col p-10 gap-10">
            <Typography variant="h3">
                {t("emotion")}
            </Typography>

            <div className="flex items-center justify-evenly w-full">
                <div className="flex items-center justify-center flex-col hover:-translate-y-1 hover:scale-110 transition">
                    <button>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1099816858707841024/5184553_2706410-removebg-preview_4_1.png?width=183&height=479" alt="" className="h-[350px]" />
                    </button>
                    <button className="p-2 font-semibold flex items-center justify-center bg-gradient-to-r from-red-200  to-red-400 rounded">
                       {t("stressed")}
                    </button>
                </div>

                <div className="flex items-center justify-center flex-col hover:-translate-y-1 hover:scale-110 transition">
                    <button>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1099816858380664964/Subtract_2_1.png?width=176&height=479" alt="" className="h-[350px]" />
                    </button>
                    <button className="p-2 font-semibold flex items-center justify-center bg-gradient-to-r from-yellow-100  to-yellow-200 rounded">
                       {t("happy")}
                    </button>
                </div>

                <div className="flex items-center justify-center flex-col hover:-translate-y-1 hover:scale-110 transition">
                    <button>
                    <img src="https://media.discordapp.net/attachments/1077345452694970438/1099816857495666831/Component_27_1.png?width=200&height=480" alt="" className="h-[350px]" />
                    </button>
                    <button className="p-2 font-semibold flex items-center justify-center bg-gradient-to-r from-purple-100  to-purple-300 rounded">
                       {t("confused")}
                    </button>
                </div>

                <div className="flex items-center justify-center flex-col hover:-translate-y-1 hover:scale-110 transition">
                    <button>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1099816857785090158/Subtract_3_1.png?width=163&height=480" alt="" className="h-[350px]" />
                    </button>
                    <button className="p-2 font-semibold flex items-center justify-center bg-gradient-to-r from-blue-100  to-blue-300 rounded">
                       {t("sad")}
                    </button>
                </div>

                <div className="flex items-center justify-center flex-col hover:-translate-y-1 hover:scale-110 transition">
                    <button>
                        <img src="https://media.discordapp.net/attachments/1077345452694970438/1099816858116444281/Component_26_1_1.png?width=205&height=480" alt="" className="h-[350px] " />
                    </button>
                    <button className="p-2 font-semibold flex items-center justify-center bg-gradient-to-r from-green-200  to-green-400 rounded">
                       {t("tranquil")}
                    </button>
                </div>
            </div>
        </div>
    )
}