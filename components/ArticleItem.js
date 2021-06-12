import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArticleImage from "./ArticleImage";
import { ArticleContext } from "../data/ArticleContext";

export default ArticleItem = (props) => {
  const [articleData, setArticleData] = useContext(ArticleContext);
  const navigation = useNavigation();

  const deleteArticleHandler = () => {
    let listedArticles = props.articles;
    const toDeleteArticle = listedArticles.find((item) => item.id === props.id);
    let toDeleteArticleIndex = listedArticles.indexOf(toDeleteArticle);

    if ("quantity" in toDeleteArticle) {
      let newScores = articleData.scores;
      newScores = newScores - toDeleteArticle.score * listedArticles[toDeleteArticleIndex].quantity;

      let totalItems = 0;
      for (let i = 0; i < listedArticles.length; i++) {
        totalItems = totalItems + listedArticles[i]["quantity"];
      }

      const newAverage = totalItems === 0 ? 0 : (newScores / totalItems).toFixed(2);

      listedArticles.splice(toDeleteArticleIndex, 1);

      setArticleData((articleData) => ({
        articles: articleData.articles,
        boughtArticles: listedArticles,
        scores: newScores,
        average: newAverage,
        favArticles: articleData.favArticles,
      }));
    } else {
      listedArticles.splice(toDeleteArticleIndex, 1);

      setArticleData((articleData) => ({
        articles: articleData.articles,
        boughtArticles: articleData.boughtArticles,
        scores: articleData.scores,
        average: articleData.average,
        favArticles: listedArticles,
      }));
    }
  };
  
  return (
    <TouchableOpacity
      style={styles.listItemBox}
      onPress={() => {
        navigation.navigate(props.target, {
          id: props.id,
          title: props.title,
          description: props.description,
          score: props.score,
          quantity: props.quantity,
          imgSrc: props.imgSrc,
        });
      }}
    >
      <ArticleImage imgSrc={props.imgSrc} width={40} height={40} />
      <Text>{props.title}</Text>
      <Text>{props.quantity}</Text>
      <Button
        title="X"
        onPress={() => {
          deleteArticleHandler();
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    elevation: 8,
    // shadowColor: 'black',
    // shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 10
  },
});
