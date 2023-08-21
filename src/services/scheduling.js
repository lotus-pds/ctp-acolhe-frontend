import { getResource, putResource, deleteResource, postResource } from './config.js';
import { serializeObjectToParam } from './utils.js';

export const getSchedulings = filters => getResource('/agendamentoSala' + serializeObjectToParam(filters));

export const postScheduling = body => postResource('/agendamentoSala', body);

export const putScheduling = (id, body) => putResource('/agendamentoSala/' + id, body);

export const deleteScheduling = id => deleteResource('/agendamentoSala/' + id);