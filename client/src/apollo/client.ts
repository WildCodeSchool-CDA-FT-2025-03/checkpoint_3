import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";

import { onError } from "@apollo/client/link/error";

// Gestion des erreurs
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

// Configuration du lien HTTP
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "same-origin",
});

// Configuration du cache
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        countries: {
          merge: false, // Remplace toujours les données existantes
        },
        continents: {
          merge: false,
        },
      },
    },
  },
});

// Création du client Apollo
export const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "network-only",
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
});
