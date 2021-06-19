import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default Placeholder = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.message}>no items added yet</Text>
      <Image style={{ width: 200, height: 200 }} source={require("../assets/no-items-littlefoot.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 20,
    marginTop: 15,
    textAlign: "center",
    textAlignVertical: "center",
    textTransform: "capitalize",
    textDecorationLine: "underline",
  },
});
