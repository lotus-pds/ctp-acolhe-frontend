import { Typography } from "@material-tailwind/react";
import { HeaderUser } from "../components/HeaderUser";
import { useTranslation } from "react-i18next";
import { EmotionCalendar } from "../components/customized/emotions/EmotionCalendar";
import { convertDateHyphen } from "../common/general";
import { useEffect, useState } from "react";
import { getEmotion } from "../services/emotion";
import { Reminder } from "../components/customized/emotions/Reminder";
import { EmotionPopup } from "../components/customized/emotions/EmotionPopup";

export function MyCalendar(props) {
    const { path } = props;

    const [emotions, setEmotions] = useState([]);
    const [popupOpen, setPopupOpen] = useState(false);
    const [todayEmotion, setTodayEmotion] = useState([]);
    const [time, setTime] = useState({});

    const { t } = useTranslation();

    const getTodayEmotion = async () => {
        let response = await getEmotion({
            dataInicial: convertDateHyphen(new Date()),
            dataFinal: convertDateHyphen(new Date())
        });

        setTodayEmotion(response.data);
    }

    const localGetEmotion = async (year, month) => {
        let initialDate = new Date(year, month - 1, 15);
        let finalDate = new Date(year, month + 1, 15);

        let response = await getEmotion({
            dataInicial: convertDateHyphen(initialDate),
            dataFinal: convertDateHyphen(finalDate)
        });

        setEmotions(response.data);
        setTime({ year, month });
    }

    useEffect(() => {
        localGetEmotion(new Date().getFullYear(), new Date().getMonth());
        getTodayEmotion();
    }, []);

    return (
        <div className="flex flex-col items-center">
            <HeaderUser path={path}/>

            <div className="grid grid-cols-1 sm:grid-cols-12 justify-center align-center sm:m-7">
                <div className="flex justify-center align-center col-span-5 sm:ml-40">
                    <img className="w-[300px] sm:w-[450px] object-contain" src="https://media.discordapp.net/attachments/1077345452694970438/1138261449408524479/8487126_3911465-removebg-preview_2.png" alt="" />
                </div>
                <div className="flex flex-col align-end justify-center gap-4 col-span-7 p-12">
                    <Typography variant="h2" className="font-mouse font-normal sm:text-4xl text-2xl mb-4" >
                        {t("calendarTitle")}
                    </Typography>
                    <Typography className="font-normal sm:text-md text-md">
                        {t("calendarDesc.one")}
                    </Typography>
                    <Typography className="font-normal sm:text-md text-md">
                        {t("calendarDesc.two")}
                    </Typography>
                </div>
            </div>

            <Reminder
                show={todayEmotion.length == 0}
                onClick={() => setPopupOpen(!popupOpen)}
            />

            <EmotionCalendar
                emotions={emotions}
                localGetEmotion={localGetEmotion}
            />

            <EmotionPopup
                open={popupOpen}
                setPopupOpen={setPopupOpen}
                localGetEmotion={localGetEmotion}
                time={time}
                getTodayEmotion={getTodayEmotion}
            />
        </div>
    )
}