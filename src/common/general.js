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

export const convertDateBars = date => {
    return date.getDate().toString().padStart(2, "0") + "/" + (date.getMonth() + 1).toString().padStart(2, "0") + "/" + date.getFullYear().toString().padStart(4, "0");
}

export const convertDateHyphen = date => {
    return date.getFullYear().toString().padStart(4, "0") + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0");
}

export const getTime = date => {
    return date.getHours().toString().padStart(2, "0") + ":" + date.getMinutes().toString().padStart(2, "0");
}

export function getFirstAndLastDateOfMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();

    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);

    return {
        firstDate: firstDate,
        lastDate: lastDate
    };
}

export const phoneNumberMask = (phoneNumber = "") => {
    if (!phoneNumber) return "";
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    const formattedNumber = `(${cleanedNumber.substring(0, 2)}) ${cleanedNumber.substring(2, 3)} ${cleanedNumber.substring(3, 7)}-${cleanedNumber.substring(7)}`;
    return formattedNumber;
}

export const concatStrings = (strings = [], divider = " - ") => {
    if (!Array.isArray(strings) || strings.length === 0) return "";
    const validStrings = strings.filter(str => typeof str === "string" && str.trim() !== "");
    return validStrings.join(divider);
}