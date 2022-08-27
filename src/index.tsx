import { SafeAreaView } from "react-native";
import Home from "../src/screens/Home";

import { Provider } from "react-redux";
import store from "./store";

import { ApolloProvider } from "@apollo/client";
import client from "../src/service";

const AppStartup = () => {
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <SafeAreaView>
            <Home />
          </SafeAreaView>
        </ApolloProvider>
      </Provider>
    </>
  );
};

export default AppStartup;
