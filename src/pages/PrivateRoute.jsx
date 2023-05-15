import { Navigate } from "react-router-dom";
import { getStorage } from "../services/config";

export function PrivateRoute(props) {
    const{ user, alternative, children } = props;

    let userFlag = false;

    for(const key in user) {
        if(getStorage('rolesCtpAcolhe').includes(user[key])) {
            userFlag = true;
        }
    }

    if(getStorage('authCtpAcolhe') !== 'true' || !userFlag) {
        return <Navigate to={alternative || '/'} replace/>;
    }

    return children;
}