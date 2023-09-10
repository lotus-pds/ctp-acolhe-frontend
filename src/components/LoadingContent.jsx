import { Typography, Spinner } from "@material-tailwind/react";
import { Spin } from "antd";
import { useTranslation } from "react-i18next";



export function LoadContent (){

    const {t} = useTranslation();

    return(
        <div className="flex flex-col p-6 gap-7 justify-center mt-8 items-center w-[90%] h-[500px] bg-gray-100 dark:bg-gray-800 rounded drop-shadow-md">
            <Typography variant="h1">
                {t("loadingContent")}
            </Typography>
            <Spin
                size="large"
                className="bg-transparent"
            />
        </div>
    )
}