import axios from 'axios';

export function ROOT_URL(){
    // return 'https://ctpacolhe-production.up.railway.app/api/v1';
    return 'http://localhost:8080/api/v1';
    //return 'https://ctp-acolhe-backend-production.up.railway.app/api/v1';
}

export function postResource(resource, body, config, newInstance) {
    return getAxiosInstance(newInstance).post(ROOT_URL() + resource, body, config).then(resposta => {
        return resposta;
    });
}

export function putResource(resource, body, config, newInstance) {
    return getAxiosInstance(newInstance).put(ROOT_URL() + resource, body, config).then(resposta => {
        return resposta;
    });
}

export function getResource(resource, config, newInstance) {
    return getAxiosInstance(newInstance).get(ROOT_URL() + resource, config).then(resposta => {
        return resposta;
    });
}

export function deleteResource(resource, config, newInstance) {
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