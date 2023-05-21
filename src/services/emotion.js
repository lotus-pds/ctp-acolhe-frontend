import { postResource, getResource } from './config.js';

export const postEmotion = (body, config) => postResource('/usuario/autenticado/humor', body, config);

export const getEmotion = param => getResource('/usuario/autenticado/humor?' + param);