import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import RNSpeedometer from "react-native-speedometer";

export default Speedometer = (props) => {
  return <RNSpeedometer value={props.value} size={300} minValue={0} maxValue={10} defaultValue={5} labelStyle={{ opacity: 0 }} />;
};

const styles = StyleSheet.create({});
