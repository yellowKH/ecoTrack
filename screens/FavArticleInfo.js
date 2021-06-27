import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import ArticleDescription from "../components/ArticleDescription";
import Speedometer from "../components/Speedometer";

export default FavArticleInfo = (props) => {
  const route = useRoute();
  const { title, description, score, imgSrc } = route.params;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <ArticleImage imgSrc={imgSrc} width={240} height={240} />
      <ArticleDescription description={description} />
      <Speedometer value={score} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "space-evenly", backgroundColor: "#A7E9AF" },
});
