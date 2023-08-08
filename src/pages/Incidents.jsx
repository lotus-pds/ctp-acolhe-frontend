import { HeaderUser } from "../components/HeaderUser";
import { AdmIncidentTable } from "../components/cutomized/admIncidents/AdmIncidentTable";
import { useEffect, useState } from "react";
import { getIncidents, getIncidentTypes } from "../services/incident";

export function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [incidentTypes, setIncidentTypes] = useState([]);
    const [filters, setFilters] = useState({});

    const localGetIncidents = async () => {
        let innerFilters = {...filters};

        if (innerFilters.dataIncidenteInicial != undefined && innerFilters.dataIncidenteInicial != "") {
            let parts = innerFilters.dataIncidenteInicial.split("/");
            innerFilters.dataIncidenteInicial = `${parts[2]}-${parts[1]}-${parts[0]}`;
        }

        if (innerFilters.dataIncidenteFinal != undefined && innerFilters.dataIncidenteFinal != "") {
            let parts = innerFilters.dataIncidenteFinal.split("/");
            innerFilters.dataIncidenteFinal = `${parts[2]}-${parts[1]}-${parts[0]}`;
        }

        let response = await getIncidents(innerFilters);
        setIncidents(response.data);
    }

    const localGetIncidentTypes = async () => {
        let response = await getIncidentTypes();
        setIncidentTypes(response.data);
    }

    useEffect(() => {
        localGetIncidents();
        localGetIncidentTypes();
    }, []);

    return (
        <div className="flex flex-col items-center">
            <HeaderUser />

            <AdmIncidentTable
                incidents={incidents}
                search={localGetIncidents}
                incidentTypes={incidentTypes}
                filters={filters}
                setFilters={setFilters}
            />
        </div>
    )
}