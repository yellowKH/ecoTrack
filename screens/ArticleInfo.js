import React, { useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ArticleContext } from "../data/ArticleContext";
import ArticleDescription from "../components/ArticleDescription";
import Speedometer from "../components/Speedometer";
import FavorizedItem from "../models/favorizedItem";

export default ArticleInfo = (props) => {
  const route = useRoute();
  const { id, title, description, score, quantity, imgSrc } = route.params;
  const [articleData, setArticleData] = useContext(ArticleContext);
  const newFavArticles = articleData.favArticles;
  
  const updateFavArticles = () => {
    newFavArticles.push(
      new FavorizedItem(
        {id},
        {title},
        {description},
        {imgSrc},
        new Date().toDateString()
      )
    );
    // console.log({newFavArticles})
    setArticleData((articleData) => ({
      favArticles: newFavArticles
    }));
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
