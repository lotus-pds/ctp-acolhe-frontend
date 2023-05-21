import { postResource, patchResource } from './config.js';

export const postSubscribe = body => postResource('/conta/cadastro', body);

export const patchSubscriptionVerification = param => patchResource('/conta/cadastro/verificacao/' + param);

export const postSignin =  body => postResource('/conta/acesso', body);