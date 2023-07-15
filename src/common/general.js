import { getStorage, removeStorage, setStorage } from "../services/config";
import { postRefreshToken } from "../services/subscribe-signin";

export const setAuthData = data => {
    setStorage('tokenAcessoCtpAcolhe', data.tokenAcesso);
    setStorage('tokenRenovacaoCtpAcolhe', data.tokenRenovacao);
    setStorage('rolesCtpAcolhe', data.roles);
    setStorage('expirationTimeCtpAcolhe', data.expiraEm);
    setStorage('authCtpAcolhe', 'true');
}

export const removeAuthData = () => {
    removeStorage('tokenAcessoCtpAcolhe');
    removeStorage('tokenRenovacaoCtpAcolhe');
    removeStorage('rolesCtpAcolhe');
    removeStorage('expirationTimeCtpAcolhe');
    removeStorage('authCtpAcolhe');
}

export const refreshToken = async () => {
    const expirationTime = Number(getStorage('expirationTimeCtpAcolhe'));

    if(expirationTime < new Date().getTime()) {
        let response = await postRefreshToken(getStorage('tokenRenovacaoCtpAcolhe'));
        setAuthData(response.data);
    }
}