import { Navigate } from "react-router-dom";
import { getStorage } from "../services/config";

export function OpenRoute(props) {
    const { children } = props;

    if (getStorage('authCtpAcolhe') === 'true') {
        if (getStorage('rolesCtpAcolhe').includes('Admin')) {
            return <Navigate to='/adm/incidente' replace />;
        }
        return <Navigate to='/calendario' replace />;
    }

    return children;
}