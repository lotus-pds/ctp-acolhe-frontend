import { Typography } from "@material-tailwind/react";
import { HeaderUser } from "../components/HeaderUser";
import { useTranslation } from "react-i18next";
import { EmotionCalendar } from "../components/cutomized/emotions/EmotionCalendar";
import { convertDateHyphen, getFirstAndLastDateOfMonth } from "../common/general";
import { useEffect, useState } from "react";
import { getEmotion } from "../services/emotion";

export function MyCalendar(props) {
    const [emotions, setEmotions] = useState([]);

    const localGetEmotion = async (year, month) => {
        console.log(year, month)
        let initialDate = getFirstAndLastDateOfMonth(new Date(year, month - 1)).firstDate;
        let finalDate = getFirstAndLastDateOfMonth(new Date(year, month + 1)).lastDate;

        let response = await getEmotion({
            dataInicial: convertDateHyphen(initialDate),
            dataFinal: convertDateHyphen(finalDate)
        });

        setEmotions(response.data);
    }

    useEffect(() => {
        localGetEmotion(new Date().getFullYear(), new Date().getMonth());
    }, []);

    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center">
            <HeaderUser />

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center align-center sm:m-7">
                <div className="flex justify-center align-center">
                    <img className="w-[300px] sm:w-[450px]" src="https://media.discordapp.net/attachments/1077345452694970438/1138261449408524479/8487126_3911465-removebg-preview_2.png" alt="" />
                </div>
                <div className="flex flex-col align-end justify-center gap-8 p-12">
                    <Typography
                        variant="h2"
                        className="font-mouse sm:text-4xl text-2xl"
                    >
                        {t("calendarTitle")}
                        {props.user}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="font-normal sm:text-md text-md"
                    >
                        {t("calendarDesc")}
                    </Typography>

                </div>
            </div>

            <EmotionCalendar emotions={emotions} localGetEmotion={localGetEmotion}/>
        </div>
    )
}