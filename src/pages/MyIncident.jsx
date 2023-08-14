import { HeaderUser } from "../components/HeaderUser";
import { IncidentTable } from "../components/customized/studentIncidents/IncidentTable";
import { IncidentDetails } from "../components/customized/studentIncidents/IncidentDetails";
import { useEffect, useState } from "react";
import { getMyIncidents, getIncidentTypes, cancelIncident } from "../services/incident";
import { useTranslation } from "react-i18next";
import { Chip } from "@material-tailwind/react";
import { WarningPopup } from "../components/common/popup/WarningPopup";

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

export function MyIncident() {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [incidents, setIncidents] = useState([]);
    const [incident, setIncident] = useState({});
    const [incidentTypes, setIncidentTypes] = useState([]);
    const [warningOpen, setWarningOpen] = useState(false);
    const [filters, setFilters] = useState({});
    const [totalAmount, setTotalAmount] = useState("0");

    const detailIncident = incident => setIncident({ ...incident });

    const localGetMyIncidents = async () => {
        let innerFilters = {...filters};

        if (innerFilters.dataIncidenteInicial != undefined && innerFilters.dataIncidenteInicial != "") {
            let parts = innerFilters.dataIncidenteInicial.split("/");
            innerFilters.dataIncidenteInicial = `${parts[2]}-${parts[1]}-${parts[0]}`;
        }

        if (innerFilters.dataIncidenteFinal != undefined && innerFilters.dataIncidenteFinal != "") {
            let parts = innerFilters.dataIncidenteFinal.split("/");
            innerFilters.dataIncidenteFinal = `${parts[2]}-${parts[1]}-${parts[0]}`;
        }

        let response = await getMyIncidents(innerFilters);
        setIncidents(response.data);
        setTotalAmount(response.headers['quantidade-total']);
    }

    const localGetIncidentTypes = async () => {
        let response = await getIncidentTypes();
        setIncidentTypes(response.data);
    }

    useEffect(() => {
        localGetMyIncidents();
        localGetIncidentTypes();
    }, []);

    useEffect(() => {
        if( incident != {}) {
            let newIncident = incidents.filter(i => i?.idIncidente == incident?.idIncidente)[0];
            setIncident(newIncident);
        }
    }, [incidents]);

    const toggleDetailsOpen = () => {
        if( detailsOpen == true) {
            setIncident({});
        }

        setDetailsOpen(!detailsOpen)
    };

    return (
        <div className="flex flex-col items-center">
            <HeaderUser />

            <IncidentDetails
                open={detailsOpen}
                handleOpen={toggleDetailsOpen}
                incident={incident}
                ChipStatus={ChipStatus}
                setWarningOpen={setWarningOpen}
            />

            <IncidentTable
                toggleDetailsOpen={toggleDetailsOpen}
                incidents={incidents}
                totalAmount={totalAmount}
                detailIncident={detailIncident}
                ChipStatus={ChipStatus}
                search={localGetMyIncidents}
                incidentTypes={incidentTypes}
                filters={filters}
                setFilters={setFilters}
            />

            <WarningPopup
                open={warningOpen}
                setOpen={setWarningOpen}
                onConfirm={() => {
                    cancelIncident(incident?.idIncidente);
                    setWarningOpen(!open);
                    setTimeout(localGetMyIncidents, 1000);
                }}
            />
        </div>
    )
}