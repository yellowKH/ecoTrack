import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default BgButton = (props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => props.onClick()}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#76c6c5",
  },
  buttonText: {
    color: "#EBFFF5",
    fontSize: 15,
  },
});
