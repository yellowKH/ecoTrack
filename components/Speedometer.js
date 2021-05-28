import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import RNSpeedometer from "react-native-speedometer";

export default Speedometer = (props) => {
  return <RNSpeedometer value={props.value} size={300} />;
};

const styles = StyleSheet.create({});
