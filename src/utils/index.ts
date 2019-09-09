import qs from "qs"

export function getQueryString(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return '';
}

export function getQueryPath(path:string,queryObj:any){
  const search = qs.stringify(queryObj)
  if(search.length){
    return `${path}?search`
  }
  return path
}

export { default as request } from './request'