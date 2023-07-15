import { getResource, putResource, patchResource } from './config.js';

export const getUser = () => getResource('/usuario/autenticado');

export const putUser = body => putResource('/usuario/autenticado', body);

export const patchUserPassword = body => patchResource('/usuario/autenticado/alterar-senha', body);