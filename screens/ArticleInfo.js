import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ArticleContext } from "../data/ArticleContext";
import ArticleDescription from "../components/ArticleDescription";
import Speedometer from "../components/Speedometer";
import { storeData } from "../data/AppStorage";
import { updateFavArticles } from "../controller/ArticleController";
import { Icon } from "react-native-elements";

export default ArticleInfo = (props) => {
  const route = useRoute();
  const { id, title, description, score, quantity, imgSrc } = route.params;
  const [articleData, setArticleData] = useContext(ArticleContext);
  const foundFav = articleData.favArticles.find((item) => item.id === id);
  const [icon, setIcon] = useState(foundFav ? "heart" : "heart-o");

  const updateFavArticlesHandler = () => {
    const newFavArticles = articleData.favArticles;

    const returnArticles = updateFavArticles(foundFav, newFavArticles, id, title, description, imgSrc, score);

    setArticleData((articleData) => ({
      articles: articleData.articles,
      boughtArticles: articleData.boughtArticles,
      scores: articleData.scores,
      average: articleData.average,
      favArticles: returnArticles,
    }));

    storeData(articleData);

    const alertText = !foundFav ? "Article added!" : "Article unfavorized!";
    foundFav ? setIcon("heart-o") : setIcon("heart");
    Alert.alert(alertText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperWrapper}>
        <View style={styles.articleName}>
          <Text style={styles.articleNameText}>{title}</Text>
          <Icon name={icon} type="font-awesome" color="#f50" onPress={() => updateFavArticlesHandler()} />
        </View>
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

  articleName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "60%",
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
