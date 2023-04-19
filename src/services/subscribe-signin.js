import { postResource } from './config.js';

export const postSubscribe = body => postResource(`/conta/cadastro`, body);

export const postSignin =  body => postResource(`/conta/acesso`, body);