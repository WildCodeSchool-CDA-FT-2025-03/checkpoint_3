import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'http://localhost:4000/graphql': {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  },
  documents: './src/queries/**/*.graphql',
  generates: {
    './src/generated/': {
      preset: 'client',
      plugins: [],
    },
    './src/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
