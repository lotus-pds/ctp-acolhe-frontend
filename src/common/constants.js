import { useTranslation } from "react-i18next";

export const PERIOD_TYPES = () => {
  const { t } = useTranslation();

  return [
    {
      value: "MATUTINO",
      label: t("morning")
    },
    {
      value: "VESPERTINO",
      label: t("afternoon")
    },
    {
      value: "NOTURNO",
      label: t("night")
    },
    {
      value: "INTEGRAL",
      label: t("fullTime")
    }
  ];
}

export const ROLES = () => ([
  {
    value: "ALU",
    label: "Aluno"
  },
  {
    value: "ADM",
    label: "Admin"
  },
  {
    value: "CTP",
    label: "CTP"
  }
]);

export const COURSE_TYPES = () => {
  const { t } = useTranslation();

  return [
    {
      value: "TECNICO_INTEGRADO",
      label: t("courseTypes.integrated")
    },
    {
      value: "TECNICO_CONCOMITANTE_SUBSEQUENTE",
      label: t("courseTypes.concurrentSubsequent")
    },
    {
      value: "GRADUACAO",
      label: t("courseTypes.undergraduate")
    },
    {
      value: "POS_GRADUACAO",
      label: t("courseTypes.postgraduate")
    },
    {
      value: "EXTENSAO",
      label: t("courseTypes.extension")
    }
  ];
}

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

export const INCIDENT_STATUS = () => {
  const { t } = useTranslation();

  return [
    {
      label: t("incidentTypes.FIN"),
      value: "FIN"
    },
    {
      label: t("incidentTypes.EPR"),
      value: "EPR"
    },
    {
      label: t("incidentTypes.CAN"),
      value: "CAN"
    },
    {
      label: t("incidentTypes.PEN"),
      value: "PEN"
    }
  ];
}