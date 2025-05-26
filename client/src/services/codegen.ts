import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: import.meta.env.VITE_GRAPHQL_URL,
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
