import { HeaderTae } from "../components/HeaderTae";
import { LoadContent } from "../components/LoadingContent";

export function CreatePosts(props) {
    const { path } = props;
    return (
        <div className="flex flex-col items-center">
            <HeaderTae path={path} />
            <LoadContent />
        </div>
    )
}