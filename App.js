import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  console.log("App.js");

  const {landscape} = useDeviceOrientation();

  console.log(useDeviceOrientation());
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor:"dodgerblue",
        width:'100%',
        height: landscape ? '100%': '50%',
      }}></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
