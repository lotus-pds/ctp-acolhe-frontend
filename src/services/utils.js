export function serializeObjectToParam(filter, first = false) {
  let params = "";
  let firstParam = "?";

  if (first) {
      firstParam = "";
  }

  for (const key in filter) {
      if (filter[key] !== null && filter[key] !== undefined && filter[key] !== "") {
          params += firstParam + key + "=" + filter[key];
          firstParam = "&";
      }
  }
  
  return params;
}