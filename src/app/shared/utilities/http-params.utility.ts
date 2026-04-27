export function mapObjectToHttpParams(obj: any): { [param: string]: string | string[] } {
  const params: { [param: string]: string | string[] } = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null) {
      params[key] = String(obj[key]);
    }
  }
  return params;
}
