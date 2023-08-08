import { HeaderTae } from "../components/HeaderTae";
import { LoadContent } from "../components/LoadingContent";


export function ProfileTae(){
    return(
        <div className="flex flex-col items-center">
            <HeaderTae/>
            <LoadContent/>
        </div>
    )
}
   
