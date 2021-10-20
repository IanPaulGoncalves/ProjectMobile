import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Routes from "./app/modules/Route/Routes";

export default function App() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     top: 40,
//     height: "100%",
//     width: "100%",
//     position: "absolute",
//   },
// });
