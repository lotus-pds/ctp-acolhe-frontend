import { 
    Card,
    Typography
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { SecondHeader } from "../components/SecondHeader";
import { useTranslation } from "react-i18next";

export function ResetSuccessfull() {

    const {t} = useTranslation()

    return(
        <div>
            <SecondHeader/>
            <div 
                className="w-full bg-none grid grid-cols-1 items-center justify-center"
            >
                <div
                    className="h:[625px] sm:h-[500px] mt-16 m-4 sm:mt-0 flex items-center justify-center"
                >
                    <Card color="transparent" shadow={false}
                        className="w-[750px] h-full bg-gray-100 dark:bg-gray-800
                            flex items-center justify-center p-6 shadow-lg 
                            dark:shadow-xl
                        "
                    >
                        <div className="
                            flex items-center justify-center
                        ">
                            <img className="w-[240px]" src="https://cdn.discordapp.com/attachments/1077345452694970438/1107308952334643230/imagem_2023-05-14_110852526.png" alt="" />
                        </div>

                        <div className="flex flex-col items-center justify-center gap-2 p-4">
                            <Typography variant="h4" className="
                                bg-clip-text text-transparent bg-gradient-to-r from-blue-100  to-blue-300
                                font-mouse text-3xl font-normal dark:from-blue-400 dark:to-blue-500
                            "> 
                                {t("resetSuccessfull")}
                            </Typography>
                            <Typography className="mt-1 font-bold text-gray-900 dark:text-gray-200 text-center">
                                {t("resetSuccessfullDescription")}
                            </Typography>
                            
                            <Link className="mt-4 bg-gradient-to-r from-blue-100  to-blue-300
                                dark:from-blue-400 dark:to-blue-500 p-2 rounded text-gray-100
                            " to="/signin">
                                {t("signIn")}
                            </Link>
                        </div>
                    
                    </Card>
                </div>
            </div>
        </div>
    )
}