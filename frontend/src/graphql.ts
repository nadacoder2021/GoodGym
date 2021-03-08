import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const http = createHttpLink({
  uri: "/graphql",
});

export const client = new ApolloClient({
  link: http,
  cache: new InMemoryCache(),
  credentials: "same-origin",
});
