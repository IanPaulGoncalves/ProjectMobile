import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Routes from "./app/modules/Route/Routes";
import store from "./app/store/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </Provider>
  );
}
