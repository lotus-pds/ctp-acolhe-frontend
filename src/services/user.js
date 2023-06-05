import { getResource, putResource } from './config.js';

export const getUser = () => getResource('/usuario/autenticado');

export const putUser = body => putResource('/usuario/autenticado', body);