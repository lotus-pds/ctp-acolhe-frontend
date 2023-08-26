import { HeaderUser } from "../components/HeaderUser";
import { IncidentTable } from "../components/customized/studentIncidents/IncidentTable";
import { IncidentDetails } from "../components/customized/studentIncidents/IncidentDetails";
import { useEffect, useState } from "react";
import { getMyIncidents, getIncidentTypes, cancelIncident } from "../services/incident";
import { WarningPopup } from "../components/common/popup/WarningPopup";

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
        let response = await getMyIncidents({...filters});
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
                setWarningOpen={setWarningOpen}
            />

            <IncidentTable
                toggleDetailsOpen={toggleDetailsOpen}
                incidents={incidents}
                totalAmount={totalAmount}
                detailIncident={detailIncident}
                search={localGetMyIncidents}
                incidentTypes={incidentTypes}
                filters={filters}
                setFilters={setFilters}
            />

            <WarningPopup
                open={warningOpen}
                handleOpen={() => setWarningOpen(!warningOpen)}
                onConfirm={() => {
                    cancelIncident(incident?.idIncidente);
                    setWarningOpen(!open);
                    setTimeout(localGetMyIncidents, 1000);
                }}
            />
        </div>
    )
}