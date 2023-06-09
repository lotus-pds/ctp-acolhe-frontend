import axios from 'axios';
import { activateErrorPopup } from '../redux/features/errorPopupSlice';
import { store } from '../redux/store';
import { addCountLoading, removeCountLoading } from '../components/Loading';
import Cookies from 'js-cookie';

axios.interceptors.request.use( req => {
    addCountLoading();
    req.headers = {
        ...req.headers,
        Authorization: getStorage('tokenCtpAcolhe') == null ? null : 'Bearer ' + getStorage('tokenCtpAcolhe'),
        roles: getStorage('rolesCtpAcolhe')
    }
    return req;
});

axios.interceptors.response.use( res => {
    removeCountLoading();
    return res;
}, res => {
    removeCountLoading();
    store.dispatch(activateErrorPopup((res.response === undefined ? [] : res.response.data.errors)[0] || 'Ocorreu um erro'));
    throw res;
});

export function ROOT_URL(){
    // return 'https://ctpacolhe-production.up.railway.app/api/v1';
    // return 'http://localhost:8080/api/v1';
    return 'https://ctp-acolhe-backend-production.up.railway.app/api/v1';
}

export async function postResource(resource, body, config, newInstance) {
    return getAxiosInstance(newInstance).post(ROOT_URL() + resource, body, config).then(resposta => {
        return resposta;
    });
}

export async function putResource(resource, body, config, newInstance) {
    return getAxiosInstance(newInstance).put(ROOT_URL() + resource, body, config).then(resposta => {
        return resposta;
    });
}

export async function patchResource(resource, body, config, newInstance) {
    return getAxiosInstance(newInstance).patch(ROOT_URL() + resource, body, config).then(resposta => {
        return resposta;
    });
}

export async function getResource(resource, config, newInstance) {
    return getAxiosInstance(newInstance).get(ROOT_URL() + resource, config).then(resposta => {
        return resposta;
    });
}

export async function deleteResource(resource, config, newInstance) {
    return getAxiosInstance(newInstance).delete(ROOT_URL() + resource, config).then(resposta => {
        return resposta;
    });
}

function getAxiosInstance(newInstance) {
    let axiosInstance = axios;
    if (newInstance) {
        axiosInstance = axios.create();
    }

    return axiosInstance;
}

export function setStorage(key, value) {
    Cookies.set(key, value, { secure: true });
}

export function getStorage(key) {
    return Cookies.get(key);
}

export function removeStorage(key) {
    Cookies.remove(key);
}