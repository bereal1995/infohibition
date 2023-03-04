export function objectToQueryStr(params: any) {
  return Object.keys(params)
    .filter((k) => params[k] !== '')
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

export function asPathToObjectQuery<T>(asPath: string): T {
  const query = asPath.split('?')[1];
  const result = {} as T;

  if (!query) return result;

  new URLSearchParams(query).forEach((value, key) => {
    (result as any)[key] = value;
  });

  return result;
}

export function removeEmptyValue<T>(obj: any) {
  const result = {} as T;
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
      (result as any)[key] = obj[key];
    }
  });
  return result;
}
