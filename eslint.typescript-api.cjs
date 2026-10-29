// TypeScript 7 no longer ships the JavaScript compiler API that typescript-eslint
// (pulled in by eslint-config-next) loads; it supports TypeScript < 6.1 only.
// Until it supports 7, lint tooling resolves `typescript` to the `typescript-6`
// alias while the project, `tsc` and `next build` use TypeScript 7.
// Delete this file, its import in eslint.config.mjs and the alias once that lands.
const Module = require('node:module')
const path = require('node:path')

const legacy = require.resolve('typescript-6')
const lintTooling = /[\\/]node_modules[\\/](?:@typescript-eslint|typescript-eslint|ts-api-utils|eslint-config-next|eslint-plugin-[^\\/]+|eslint-import-resolver-typescript)[\\/]/
const resolve = Module._resolveFilename
Module._resolveFilename = function (request, parent, ...rest) {
  if ((request === 'typescript' || request.startsWith('typescript/')) && lintTooling.test(parent?.filename ?? '')) {
    return request === 'typescript' ? legacy : resolve.call(this, request.replace(/^typescript/, path.dirname(path.dirname(legacy))), parent, ...rest)
  }
  return resolve.call(this, request, parent, ...rest)
}
