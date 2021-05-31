import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Speedometer from "../components/Speedometer";

export default ArticleInfo = (props) => {
  const route = useRoute();
  const { title, score } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
      <Text>{JSON.stringify(title)}</Text>
      <Speedometer value={score} />
    </View>
  );
};

const styles = StyleSheet.create({});
