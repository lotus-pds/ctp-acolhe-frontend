import { getResource, putResource, patchResource } from './config.js';
import { serializeObjectToParam } from './utils.js';

export const getUsers = filters => getResource('/usuario' + serializeObjectToParam(filters));

export const patchUserRole = (id, body) => patchResource(`/usuario/${id}/perfil`, body);

/* AUTENTICADO */

export const getUser = () => getResource('/usuario/autenticado');

export const putUser = body => putResource('/usuario/autenticado', body);

export const patchUserPassword = body => patchResource('/usuario/autenticado/alterar-senha', body);

export const patchUserAvatar = body => patchResource('/usuario/autenticado/alterar-avatar', body);