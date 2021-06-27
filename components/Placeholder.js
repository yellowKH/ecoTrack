import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default Placeholder = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.message}>no items added yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    width: 20,
    height: 20,
  },
  message: {
    fontSize: 17,
    marginTop: 100,
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    textTransform: "capitalize",
    //textDecorationLine: "underline",
  },
});
