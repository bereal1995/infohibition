export function objectToQueryStr(params: any) {
  return Object.keys(params)
    .filter((k) => params[k] !== '')
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

export function asPathToObjectQuery<T>(asPath: string): T {
  const query = asPath.split('?')[1];
  if (!query) return {} as T;
  const params = query.split('&');
  const result: T = {} as T;
  params.forEach((param) => {
    const [key, value] = param.split('=');
    (result as any)[key] = value;
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
