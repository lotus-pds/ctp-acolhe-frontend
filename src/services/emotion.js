import { postResource } from './config.js';

export const postEmotion = (body, config) => postResource(`/humor`, body, config);