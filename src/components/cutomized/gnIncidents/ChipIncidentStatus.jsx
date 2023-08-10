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
            className += " from-green-400 to-green-600";
            break;
        case "PEN":
            color = "yellow";
            className += " from-amber-500 to-orange-600";
            break;
        case "CAN":
            color = "red";
            className += " from-red-400 to-red-500";
            break;
        case "EPR":
            color = "blue";
            className += " from-blue-200 to-blue-400";
            break;
        default:
            color = "blue";
            className += " from-blue-300 to-blue-400"
    }

    return (<Chip
        size="sm"
        value={t("incidentTypes." + status)}
        color={color}
        className={className}
    />
    );
}