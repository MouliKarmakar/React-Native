import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import coldCoffee from "@/assets/images/coldCoffee.jpeg";
export default function app() {
  return (
    <View style={styles.container}>
      <ImageBackground source={coldCoffee} resizeMethod="cover" style={styles.images}>
        <Text style={styles.text}>Coffe-shop</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  images:{
    height:'100%',
    width:'100%',
    flex:1,
    justifyContent:'center',
    resizeMode:'cover',
  }
});
