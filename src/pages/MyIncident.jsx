import { HeaderUser } from "../components/HeaderUser";
import { IncidentTable } from "../components/cutomized/studentIncidents/IncidentTable";

export function MyIncident(){
    return(
        <div className="flex flex-col items-center">
            <HeaderUser/>
            <IncidentTable/>
        </div>
    )
}