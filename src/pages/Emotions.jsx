import { Typography } from "@material-tailwind/react";
import { GnButton } from "../components/common/button/GnButton";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { postEmotion } from "../services/emotion";
import { getEmotion } from "../services/emotion";
import { useNavigate } from "react-router-dom";
import { EMOTIONS } from "../common/constants";
import { convertDateHyphen } from "../common/general";

export function Emotions(props) {

    const [emotion, setEmotion] = useState([]);

    const { t } = useTranslation();

    const navigate = useNavigate();

    const sendEmotion = async (emotion) => {
        await postEmotion({ idSentimento: emotion });
        navigate('/posts');
    }

    const hasEmotion = async () => {
        const today = new Date();

        const filters = {
            dataInicial: convertDateHyphen(today),
            dataFinal: convertDateHyphen(today)
        };

        const emotions = await getEmotion(filters);

        setEmotion(emotions.data);
    }

    useEffect(() => {
        hasEmotion();
    }, []);

    useEffect(() => {
        if (emotion.length > 0) {
            navigate('/posts');
        }
    }, [emotion]);

    const emotions = EMOTIONS();

    return (
        <div className="w-full h-full flex items-center justify-center flex-col p-10 gap-16 sm:gap-10">
            <Typography variant="h3">
                {t("emotion")}
            </Typography>

            <div className="flex flex-col sm:flex-row items-center justify-evenly w-full">
                {emotions.map(emotion => {
                    return (
                        <div className="flex items-center justify-center flex-col hover:-translate-y-1 hover:scale-110 transition"
                            onClick={() => sendEmotion(emotion.id)}
                        >
                            <GnButton
                                color='NONE'
                                className='p-0'
                            >
                                <img src={emotion.img} alt="" className="h-[350px]" />
                            </GnButton>
                            <GnButton color={emotion.color}>
                                {emotion.desc}
                            </GnButton>
                        </div>
                    );
                })}
            </div>

            <GnButton
                color='GRAY'
                className='hover:-translate-y-1 hover:scale-110 transition'
                onClick={() => navigate('/posts')}
            >
                {t("iPreferNotToAnswer")}
            </GnButton>
        </div>
    )
}