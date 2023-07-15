import { Navigate } from "react-router-dom";
import { getStorage } from "../services/config";

export function OpenRoute(props) {
    const{ children } = props;

    if(getStorage('authCtpAcolhe') === 'true') {
        return <Navigate to='/posts' replace/>;
    }

    return children;
}