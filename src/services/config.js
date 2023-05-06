import axios from 'axios';

export function ROOT_URL(){
    // return 'https://ctpacolhe-production.up.railway.app/api/v1';
    // return 'http://localhost:8080/api/v1';
    return 'https://ctp-acolhe-backend-production.up.railway.app/api/v1';
}

export function postResource(resource, body, config, newInstance) {
    let inConfig = { headers: {
        Authorization: getStorage('token') == null ? null : 'Bearer ' + getStorage('token'),
        roles: getStorage('roles')
    }, ...config}

    return getAxiosInstance(newInstance).post(ROOT_URL() + resource, body, inConfig).then(resposta => {
        return resposta;
    });
}

export function putResource(resource, body, config, newInstance) {
    let inConfig = { headers: {
        Authorization: getStorage('token') == null ? null : 'Bearer ' + getStorage('token'),
        roles: getStorage('roles')
    }, ...config}

    return getAxiosInstance(newInstance).put(ROOT_URL() + resource, body, inConfig).then(resposta => {
        return resposta;
    });
}

export function getResource(resource, config, newInstance) {
    let inConfig = { headers: {
        Authorization: getStorage('token') == null ? null : 'Bearer ' + getStorage('token'),
        roles: getStorage('roles')
    }, ...config}

    return getAxiosInstance(newInstance).get(ROOT_URL() + resource, inConfig).then(resposta => {
        return resposta;
    });
}

export function deleteResource(resource, config, newInstance) {
    let inConfig = { headers: {
        Authorization: getStorage('token') == null ? null : 'Bearer ' + getStorage('token'),
        roles: getStorage('roles')
    }, ...config}

    return getAxiosInstance(newInstance).delete(ROOT_URL() + resource, inConfig).then(resposta => {
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
    window.localStorage.setItem(key, value);
}

export function getStorage(key) {
    return window.localStorage.getItem(key);
}

export function removeStorage(key) {
    window.localStorage.removeItem(key);
}