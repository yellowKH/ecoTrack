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
      <View style={styles.upperWrapper}>
        <Text style={styles.articleNameText}>{title}</Text>
        <ArticleImage imgSrc={imgSrc} width={240} height={240} />
        <ArticleDescription description={description} />
      </View>
      <View style={styles.lowerWrapper}>
        <Speedometer style={styles.speedometer} value={score} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  upperWrapper: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  articleNameText: {
    fontSize: 20,
  },

  lowerWrapper: { position: "relative", flex: 1, marginTop: 20 },

  speedometer: {
    position: "absolute",
    bottom: 0,
  },
});
