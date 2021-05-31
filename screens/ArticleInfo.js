import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import ArticleDescription from "../components/ArticleDescription";
import Speedometer from "../components/Speedometer";

export default ArticleInfo = (props) => {
  const route = useRoute();
  const { title, description, score, quantity } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
      <Text>
        {title} {quantity}x
      </Text>
      <ArticleDescription description={description} />
      <Speedometer value={score} />
    </View>
  );
};

const styles = StyleSheet.create({});
