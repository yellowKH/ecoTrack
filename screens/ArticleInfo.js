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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}>
      <Text>
        {title} {quantity}x
      </Text>
      <Icon raised name={icon} type="font-awesome" color="#f50" onPress={() => updateFavArticlesHandler()} />
      <ArticleImage imgSrc={imgSrc} width={240} height={240} />
      <ArticleDescription description={description} />
      <Speedometer value={score} />
    </View>
  );
};

const styles = StyleSheet.create({});
