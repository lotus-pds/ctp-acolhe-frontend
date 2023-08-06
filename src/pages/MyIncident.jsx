import { HeaderUser } from "../components/HeaderUser";
import { IncidentTable } from "../components/cutomized/studentIncidents/IncidentTable";
import { IncidentDetails } from "../components/cutomized/studentIncidents/IncidentDetails";
import { useEffect, useState } from "react";
import { getMyIncidents, getIncidentTypes } from "../services/incident";
import { useTranslation } from "react-i18next";
import { Chip } from "@material-tailwind/react";

const ChipStatus = props => {
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
            className += " from-blue-100 to-blue-200 dark:from-blue-400 dark:to-blue-700'"

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

export function MyIncident() {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [incidents, setIncidents] = useState([]);
    const [incident, setIncident] = useState({});
    const [incidentTypes, setIncidentTypes] = useState([]);

    const detailIncident = incident => setIncident({ ...incident });

    const localGetMyIncidents = async filters => {
        let response = await getMyIncidents(filters);
        setIncidents(response.data);
    }

    const localGetIncidentTypes = async () => {
        let response = await getIncidentTypes();
        setIncidentTypes(response.data);
    }

    useEffect(() => {
        localGetMyIncidents();
        localGetIncidentTypes();
    }, []);

    const toggleDetailsOpen = () => setDetailsOpen(!detailsOpen);

    return (
        <div className="flex flex-col items-center">
            <HeaderUser />

            <IncidentDetails
                open={detailsOpen}
                handleOpen={toggleDetailsOpen}
                incident={incident}
                ChipStatus={ChipStatus}
            />

            <IncidentTable
                toggleDetailsOpen={toggleDetailsOpen}
                incidents={incidents}
                detailIncident={detailIncident}
                ChipStatus={ChipStatus}
                search={localGetMyIncidents}
                incidentTypes={incidentTypes}
            />
        </div>
    )
}