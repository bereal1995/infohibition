export function objectToQueryStr(params: any) {
  return Object.keys(params)
    .filter((k) => params[k] !== '')
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

export function asPathToObjectQuery(asPath: string) {
  const query = asPath.split('?')[1];
  if (!query) return {};
  const params = query.split('&');
  const result: any = {};
  params.forEach((param) => {
    const [key, value] = param.split('=');
    result[key] = value;
  });
  return result;
}

export function removeEmptyValue(obj: any) {
  const result: any = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
      result[key] = obj[key];
    }
  });
  return result;
}
