import { Navigate } from "react-router-dom";
import { getStorage } from "../services/config";

export function PrivateRoute(props) {
    const{children} = props;

    if(getStorage('auth') !== 'true') {
        return <Navigate to={'/'} replace/>;
    }

    return children;
}