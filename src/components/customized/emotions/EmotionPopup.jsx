import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    IconButton
} from "@material-tailwind/react";
import { GnButton } from "../../common/button/GnButton";
import { useTranslation } from "react-i18next";
import { EMOTIONS } from "../../../common/constants";
import { postEmotion } from "../../../services/emotion";

export function EmotionPopup(props) {
    const { open, handleOpen, localGetEmotion, time  } = props;

    const { t } = useTranslation();

    const emotions = EMOTIONS();

    const sendEmotion = async (emotion) => {
        await postEmotion({ idSentimento: emotion });
        handleOpen();
        localGetEmotion(time?.year, time?.month);
    }

    return (
        <>
            <Dialog
                open={open}
                size="xl"
                handler={() => { }}
                className="max-h-[90vh] w-[80vw] overflow-auto"
            >
                <DialogBody>
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
                            onClick={handleOpen}
                        >
                            {t("leaveForLater")}
                        </GnButton>
                    </div>
                </DialogBody>
            </Dialog >
        </>
    );
}