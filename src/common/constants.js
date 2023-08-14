import { useTranslation } from "react-i18next";

export const periodTypesEnum = new Map()
  .set("MATUTINO", "Matutino")
  .set("VESPERTINO", "Vespertino")
  .set("NOTURNO", "Noturno");


export const courseTypesEnum = new Map()
  .set("TECNICO_INTEGRADO", "Técnico Integrado")
  .set("TECNICO_CONCOMITANTE_SUBSEQUENTE", "Técnico Concomitante ou Subsequente")
  .set("GRADUACAO", "Graduação").set("POS_GRADUACAO", "Pós Graduação")
  .set("EXTENSAO", "Extensão");

export const EMOTIONS = () => {
  const { t } = useTranslation();

  return [
    {
      id: "EST",
      desc: t("stressed"),
      color: "RED",
      img: "https://media.discordapp.net/attachments/1077345452694970438/1099816858707841024/5184553_2706410-removebg-preview_4_1.png"
    },
    {
      id: "ALE",
      desc: t("happy"),
      color: "YELLOW",
      img: "https://media.discordapp.net/attachments/1077345452694970438/1099816858380664964/Subtract_2_1.png"
    },
    {
      id: "CON",
      desc: t("confused"),
      color: "PURPLE",
      img: "https://media.discordapp.net/attachments/1077345452694970438/1099816857495666831/Component_27_1.png"
    },
    {
      id: "AFL",
      desc: t("sad"),
      color: "BLUE",
      img: "https://media.discordapp.net/attachments/1077345452694970438/1099816857785090158/Subtract_3_1.png"
    },
    {
      id: "TRA",
      desc: t("tranquil"),
      color: "GREEN",
      img: "https://media.discordapp.net/attachments/1077345452694970438/1099816858116444281/Component_26_1_1.png"
    }
  ];
}
