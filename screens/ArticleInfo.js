import React, { useContext } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ArticleContext } from "../data/ArticleContext";
import ArticleDescription from "../components/ArticleDescription";
import Speedometer from "../components/Speedometer";
import FavorizedItem from "../models/favorizedItem";

export default ArticleInfo = (props) => {
  const route = useRoute();
  const { id, title, description, score, quantity, imgSrc } = route.params;
  const [articleData, setArticleData] = useContext(ArticleContext);
  const foundFav = articleData.favArticles.find((item) => item.id === id);

  const updateFavArticles = () => {
    if (!foundFav) {
      const newFavArticles = articleData.favArticles;
      newFavArticles.push(new FavorizedItem(id, title, description, imgSrc, score, new Date().toDateString()));
      setArticleData((articleData) => ({
        articles: articleData.articles,
        boughtArticles: articleData.boughtArticles,
        scores: articleData.scores,
        average: articleData.average,
        favArticles: newFavArticles,
      }));
      Alert.alert("Article added");
    } else {
      Alert.alert("Article already favorized!");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}>
      <Text>
        {title} {quantity}x
      </Text>
      <Button
        title="ADD FAV"
        onPress={() => {
          updateFavArticles();
        }}
      />
      <ArticleImage imgSrc={imgSrc} width={240} height={240} />
      <ArticleDescription description={description} />
      <Speedometer value={score} />
    </View>
  );
};

const styles = StyleSheet.create({});
