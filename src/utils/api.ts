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