import { HeaderUser } from "../components/HeaderUser";
import { LoadContent } from "../components/LoadingContent";

export function CreateIncident(){
    return(
        <div className="flex flex-col items-center">
            <HeaderUser/>
            <LoadContent/>
        </div>
    )
}