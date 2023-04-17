import { postResource } from './config.js';

export const postSubscribe = body => postResource(`cadastro`, body);

export const postSignin =  body => postResource(`acesso`, body);