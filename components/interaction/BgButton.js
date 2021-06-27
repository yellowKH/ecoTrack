import React from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { COLORS } from "../../constants/color.js";

export default BgButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <ButtonComponent onPress={() => props.onClick()}>
      <View style={[styles.button, props.buttonStyle]}>
        <Text style={[styles.buttonText, props.buttonTextStyle]}>{props.text}</Text>
      </View>
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.buttons,
  },

  buttonText: {
    color: "#EBFFF5",
    fontSize: 15,
  },
});
