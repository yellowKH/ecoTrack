import React from "react";
import { StyleSheet, View, Button } from "react-native";
import Speedometer from "../components/Speedometer";

export default ArticleInfo = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
      <Speedometer value={70} />
    </View>
  );
};

const styles = StyleSheet.create({});
