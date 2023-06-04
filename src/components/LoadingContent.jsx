import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";


export function LoadContent (){

    const {t} = useTranslation();

    return(
        <div className="flex justify-center mt-8 items-center w-[90%] h-[500px] bg-gray-100 dark:bg-gray-800 rounded drop-shadow-md">
            <Typography variant="h1">
                {t("loading")}
            </Typography>
        </div>
    )
}