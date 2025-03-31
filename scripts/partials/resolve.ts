import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function root(path: string) {
  const rootPath = fileURLToPath(new URL('../..', import.meta.url));
  const resolvedPath = resolve(rootPath, path);
  return resolvedPath;
}
