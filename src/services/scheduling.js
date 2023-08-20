import { getResource, putResource, deleteResource, postResource } from './config.js';

export const getScheduling = () => getResource('/agendamentoSala');

export const postScheduling = body => postResource('/agendamentoSala', body);

export const putScheduling = (id, body) => putResource('/agendamentoSala/' + id, body);

export const deleteScheduling = id => deleteResource('/agendamentoSala/' + id);