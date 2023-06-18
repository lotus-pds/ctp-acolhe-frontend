import { postResource, getResource } from './config.js';
import { serializeObjectToParam } from '../services/utils.js';

export const postEmotion = (body, config) => postResource('/usuario/autenticado/humor', body, config);

export const getEmotion = filters => getResource('/usuario/autenticado/humor' + serializeObjectToParam(filters));