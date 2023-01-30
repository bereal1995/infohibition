export function objectToQueryStr(params: any) {
  return Object.keys(params)
    .filter((k) => params[k] !== '')
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}
