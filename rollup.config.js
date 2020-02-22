import commonjs from '@rollup/plugin-commonjs';
import litcss from 'rollup-plugin-lit-css';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const deps = Object.keys(pkg.dependencies);
const external = id =>
  id !== '@morbidick/lit-element-notify' &&
  id.startsWith('lit-html') ||
  id.startsWith('@babel/runtime') ||
  deps.includes(id);

export default {
  input: [
    'src/index.ts',
    'src/stripe-elements.ts',
    'src/stripe-payment-request.ts',
  ],
  external,
  output: {
    dir: '.',
    format: 'es',
    chunkFileNames: '[name].js',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    resolve({ extensions: ['.ts', '.css', '.html'], dedupe: id => id.includes('lit') }),
    litcss(),
    commonjs(),
  ],
};
