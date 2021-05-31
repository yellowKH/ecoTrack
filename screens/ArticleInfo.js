import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Speedometer from "../components/Speedometer";
import ArticleDescription from "../components/ArticleDescription";

export default ArticleInfo = (props) => {
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
      <Text>{JSON.stringify(props.title)}</Text>
      <ArticleDescription description={props.description} />
      <Speedometer value={70} />
    </View>
  );
};

const styles = StyleSheet.create({});
