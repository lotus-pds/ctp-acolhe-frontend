import { getResource, putResource, patchResource, postResource } from './config.js';
import { serializeObjectToParam } from './utils.js';

/* RECURSOS AUTENTICADO */

export const postMyIncident = body => postResource('/usuario/autenticado/incidente', body);

export const getMyIncidents = filters => getResource('/usuario/autenticado/incidente' + serializeObjectToParam(filters));

/* RECURSOS GERAIS */

export const getIncidentTypes = () => getResource('/tipoIncidente');

export const getIncident = id => getResource(`/incidente/${id}`);

export const cancelIncident = id => patchResource(`/usuario/autenticado/incidente/${id}/cancelar`);

export const processIncident = id => patchResource(`/incidente/${id}/processar`);

export const finishIncident = id => patchResource(`/incidente/${id}/finalizar`);