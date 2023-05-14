import { postResource } from './config.js';

export const postEmotion = (body, config) => postResource(`/usuario/autenticado/humor`, body, config);