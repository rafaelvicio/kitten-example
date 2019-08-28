import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider, Layout } from "react-native-ui-kitten";

import { HomeScreen } from "./screen/HomeScreen";

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <HomeScreen />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
