import './eslint.typescript-api.cjs' // must load before eslint-config-next (TypeScript 7 bridge)
import next from 'eslint-config-next/core-web-vitals'

// Next 16 removed the `next lint` subcommand; lint runs through ESLint's flat
// config directly. `eslint-config-next` ships a ready flat-config array, so we
// spread it instead of bridging the legacy config through FlatCompat (which
// crashes under ESLint 9).
const eslintConfig = [
  ...next,
  {
    ignores: ['.claude/**', '.next/**', 'node_modules/**'],
  },
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      // eslint-plugin-react-hooks@7 ships React-Compiler-era rules as errors.
      // These flag valid client-only init patterns (matchMedia/localStorage on
      // mount) and admin-only code; surface them as warnings on this existing
      // codebase instead of gating CI on a behavioral refactor sweep.
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/refs': 'warn',
      'react-hooks/purity': 'warn',
      'react-hooks/static-components': 'warn',
    },
  },
]

export default eslintConfig
