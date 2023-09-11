import { HeaderUser } from "../components/HeaderUser";
import { LoadContent } from "../components/LoadingContent";

export function Posts(props) {
    const { path } = props;

    return (
        <div className="flex flex-col items-center">
            <HeaderUser path={path}/>
            <LoadContent />
        </div>
    )
}