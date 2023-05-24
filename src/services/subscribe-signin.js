import { postResource, patchResource } from './config.js';

export const postSubscribe = body => postResource('/conta/cadastro', body);

export const patchSubscriptionVerification = param => patchResource('/conta/cadastro/verificacao/' + param);

export const postSignin =  body => postResource('/conta/acesso', body);

export const postForgotPassword = body => postResource('/conta/senha/esqueci', body, {headers: {
    'Content-Type': 'application/plain'
}});

export const postResendForgotPassword = body => postResource('/conta/senha/esqueci/reenviar-email', body);

export const patchResetPassword = body => patchResource('/conta/senha/redefinir', body);