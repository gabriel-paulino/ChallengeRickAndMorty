import Home from "./src/screens/Home";

import { ApolloProvider } from "@apollo/client";
import client from "./src/service";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
