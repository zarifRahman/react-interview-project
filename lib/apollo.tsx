
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://api.apito.io/secured/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  },
});

export default apolloClient;
