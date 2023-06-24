import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  target: ['es6'],
  format: ['cjs', 'esm'],
});
