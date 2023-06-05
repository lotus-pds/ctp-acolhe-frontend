import { HeaderUser } from "../components/HeaderUser";
import { LoadContent } from "../components/LoadingContent";

export function MyCalendar(){
    return(
        <div className="flex flex-col items-center">
            <HeaderUser/>
            <LoadContent/>
        </div>
    )
}