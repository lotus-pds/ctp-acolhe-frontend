import { Typography } from "@material-tailwind/react";
import { GnButton } from "../../common/button/GnButton";
import { useTranslation } from "react-i18next";


export function Reminder(props) {
    const { onClick, show, getTodayEmotion } = props;

    const { t } = useTranslation();

    if (show) {
        return (
            <div className="relative flex items-center justify-center p-16 mt-12">
                <div className="bg-yellow-100 h-[240px] w-[240px] rotate-2 absolute">

                </div>

                <div className="bg-green-100 h-[240px] w-[240px] rotate-6 absolute">

                </div>

                <div className="bg-blue-100 h-[240px] w-[240px] -rotate-2 absolute">

                </div>

                <div className="bg-pink-200 h-[240px] w-[240px] p-5 flex flex-col items-center gap-5 justify-center absolute">
                    <Typography variant="h4" className="font-mouse font-normal">
                        {t("emotionReminder.notYet")}
                    </Typography>

                    <GnButton onClick={onClick}>
                        {t("emotionReminder.add")}
                    </GnButton>
                </div>

                <img src="https://cdn.discordapp.com/attachments/1077345452694970438/1140874581792534568/imagem_2023-08-15_020800844-removebg-preview.png" alt="" className="w-[110px] h-[110px] relative top-[-115px] right-0" />
            </div>
        )
    }
}