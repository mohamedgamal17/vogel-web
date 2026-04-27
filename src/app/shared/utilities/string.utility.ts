export function ensureStringEndWith(str: string, suffix: string): string {
  if(str.endsWith(suffix)) {
    return str;
  }
  return str + suffix;
} 
