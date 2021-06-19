import React, { useContext } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ArticleContext } from "../data/ArticleContext";
import ArticleDescription from "../components/ArticleDescription";
import Speedometer from "../components/Speedometer";
import FavorizedItem from "../models/favorizedItem";
import { storeData } from "../data/AppStorage";

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
      let listedArticles = articleData.favArticles;
      const toDeleteArticle = listedArticles.find((item) => item.id === id);
      let toDeleteArticleIndex = listedArticles.indexOf(toDeleteArticle);

      listedArticles.splice(toDeleteArticleIndex, 1);

      setArticleData((articleData) => ({
        articles: articleData.articles,
        boughtArticles: articleData.boughtArticles,
        scores: articleData.scores,
        average: articleData.average,
        favArticles: listedArticles,
      }));
      Alert.alert("Article unfavorized");
    }
    storeData(articleData);
  };

  return (
    <View style={[styles.boxes, styles.box1]}>
      <Text style={styles.text}>
        {title} {quantity}x
      </Text>
      <Button
        title="ADD FAV"
        color="#75B79E"
        style ={styles.button}
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

const styles = StyleSheet.create({
  
  //Fonts wird hier hinzugefügt
  text: {
  
  },

  //Farbe vom Button ist in der View
  button: {
  },

  boxes: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
    backgroundColor: "#75B79E"

  },
  //Falls man Titel und Beschreibung in getrennte Flexboxen haben möchte 
  box1: {

  }



});
