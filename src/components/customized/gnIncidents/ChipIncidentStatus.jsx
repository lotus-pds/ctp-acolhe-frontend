import { useTranslation } from "react-i18next";
import { GnChip } from "../../common/chip/GnChip";

export const ChipIncidentStatus = props => {
    const { t } = useTranslation();

    const { status } = props;

    let color = "";

    switch (status) {
        case "FIN":
            color = "GREEN";
            break;
        case "PEN":
            color = "YELLOW";
            break;
        case "CAN":
            color = "RED";
            break;
        case "EPR":
            color = "BLUE";
            break;
        default:
            color = "BLUE";
    }

    return <GnChip
        value={t("incidentTypes." + status)}
        color={color}
    />;
}