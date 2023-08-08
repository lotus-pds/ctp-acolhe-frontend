import { Chip } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export const ChipIncidentStatus = props => {
    const { t } = useTranslation();

    const { status } = props;

    let color = "";
    let className = "text-white bg-gradient-to-r";

    switch (status) {
        case "FIN":
            color = "green";
            className += " from-green-200 to-green-300";
            break;
        case "PEN":
            color = "yellow";
            className += " from-yellow-100 to-yellow-200";
            break;
        case "CAN":
            color = "red";
            className += " from-red-200 to-red-300";
            break;
        case "EPR":
            color: "blue";
            className += " from-blue-100 to-blue-200 dark:from-blue-400 dark:to-blue-700'";
            break;
        default:
            color = "blue";
            className += " from-blue-100 to-blue-200 dark:from-blue-400 dark:to-blue-700'"
    }

    return (<Chip
        size="sm"
        variant="ghost"
        value={t("incidentTypes." + status)}
        color={color}
        className={className}
    />
    );
}