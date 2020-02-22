const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        { pattern: 'test/**/*.test.ts', type: 'module' },
      ],

      esm: {
        babel: true,
        nodeResolve: true,
        fileExtensions: ['.js', '.ts', '.css'],
        responseTransformers: [
          // HACK: until https://github.com/babel/babel/issues/10981
          // @babel/preset-typescript doesn't support type imports yet
          function removeImportType({ url, body }) {
            if (url.endsWith('.ts')) {
              return {
                body: body.replace(/import type /g, 'import '),
              };
            }
          },

          function resolveJSON({ url, body }) {
            if (url.endsWith('.json')) {
              return {
                body: `export default ${body}`,
                contentType: 'application/javascript',
              };
            }
          },

          function importCSS({ url, body }) {
            if (url.endsWith('.css')) {
              return {
                contentType: 'application/javascript',
                body: `import { css } from 'lit-element'; export default css\`${body}\``,
              };
            }
          },
        ],
      },

      coverageIstanbulReporter: {
        thresholds: {
          global: {
            statements: 100,
            lines: 100,
            branches: 100,
            functions: 100,
          },
        },
      },

    }),
  );
  return config;
};
