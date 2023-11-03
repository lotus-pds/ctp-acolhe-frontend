import { Dialog, DialogBody, Typography } from "@material-tailwind/react";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { EMOTIONS } from "../../../common/constants";
import { postEmotion } from "../../../services/emotion";
import { GnButton } from "../../common/button/GnButton";

export function EmotionPopup(props) {
  const { open, setPopupOpen, localGetEmotion, time, getTodayEmotion } = props;

  const { t } = useTranslation();

  const emotions = EMOTIONS();

  const [emotion, setEmotion] = useState({
    idSentimento: null,
    descricao: "",
  });

  const sendEmotion = async () => {
    await postEmotion(emotion);
    setPopupOpen(false);
    localGetEmotion(time?.year, time?.month);
    getTodayEmotion();
  };

  const changeEmotion = (value, campo) => {
    setEmotion({ ...emotion, [campo]: value });
  };

  const closeModal = () => {
    setEmotion({ idSentimento: null, descricao: "" });
    setPopupOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        size="xl"
        handler={() => {}}
        className="max-h-[90vh] w-[80vw] overflow-auto dark:bg-gray-800"
      >
        <DialogBody>
          <div className="w-full h-full flex items-center justify-center flex-col p-6 gap-16 sm:gap-10">
            <Typography variant="h3" className="dark:text-gray-200">
              {t("emotion")}
            </Typography>

            <div className="flex flex-col sm:flex-row items-center justify-evenly w-full">
              {emotions.map((emotion) => {
                return (
                  <div
                    className="flex items-center justify-center flex-col hover:-translate-y-1 hover:scale-110 transition"
                    onClick={() => changeEmotion(emotion.id, "idSentimento")}
                  >
                    <GnButton color="NONE" className="p-0">
                      <img src={emotion.img} alt="" className="h-[250px]" />
                    </GnButton>
                    <GnButton color={emotion.color}>{emotion.desc}</GnButton>
                  </div>
                );
              })}
            </div>

            <TextArea
              placeholder={t("feelingRightNow")}
              className="w-[85%]"
              onChange={(e) => changeEmotion(e.target.value, "descricao")}
              rows={6}
              maxLength={500}
              allowClear={true}
            />

            <div className="flex flex-col sm:flex-row items-center justify-evenly w-full">
              <GnButton
                color="GRAY"
                className="hover:-translate-y-1 hover:scale-110 transition"
                onClick={closeModal}
              >
                {t("leaveForLater")}
              </GnButton>

              <GnButton
                color="PURPLE"
                className="hover:-translate-y-1 hover:scale-110 transition"
                onClick={sendEmotion}
                disabled={!emotion.idSentimento}
              >
                {t("registerEmotion")}
              </GnButton>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
