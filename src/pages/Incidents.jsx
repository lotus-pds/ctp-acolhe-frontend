import { HeaderTae } from "../components/HeaderTae";
import { AdmIncidentTable } from "../components/customized/admIncidents/AdmIncidentTable";
import { useEffect, useState } from "react";
import { getIncidents, getIncidentTypes } from "../services/incident";

export function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [incidentTypes, setIncidentTypes] = useState([]);
    const [filters, setFilters] = useState({});
    const [totalAmount, setTotalAmount] = useState("0");

    const localGetIncidents = async () => {
        let response = await getIncidents({...filters});
        setIncidents(response.data);
        setTotalAmount(response.headers['quantidade-total']);
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
            <HeaderTae />

            <AdmIncidentTable
                incidents={incidents}
                totalAmount={totalAmount}
                search={localGetIncidents}
                incidentTypes={incidentTypes}
                filters={filters}
                setFilters={setFilters}
            />
        </div>
    )
}