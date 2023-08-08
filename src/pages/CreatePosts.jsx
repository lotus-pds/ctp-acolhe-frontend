import { LoadContent } from "../components/LoadingContent";
import { HeaderTae } from "../components/HeaderTae";

export function CreatePosts(){
    return(
        <div className="flex flex-col items-center">
            <HeaderTae/>
            <LoadContent/>
        </div>
    )
}