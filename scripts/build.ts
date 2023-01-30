// eslint-disable-next-line import/no-extraneous-dependencies
import { build } from 'esbuild';
import path from 'path';
import { root } from './partials/resolve.js';

const entrypoint = root('src/main.ts');
const outPoint = root('dist/main.js');

await build({
  entryPoints: [entrypoint],
  bundle: true,
  outfile: outPoint,
  platform: 'node',
  format: 'esm',
  minify: true,
  tsconfig: path.resolve(process.cwd(), 'tsconfig.app.json'),
  banner: {
    js: 'import { createRequire } from \'module\';const require = createRequire(import.meta.url);',
  },
});
