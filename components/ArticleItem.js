import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArticleImage from "./ArticleImage";
import { ArticleContext } from "../data/ArticleContext";

export default ArticleItem = (props) => {
  const [articleData, setArticleData] = useContext(ArticleContext);
  const navigation = useNavigation();

  const deleteArticleHandler = () => {
    let newBoughtArticles = articleData.boughtArticles;
    const toDeleteArticle = newBoughtArticles.find((item) => item.id === props.id);
    let toDeleteArticleIndex = newBoughtArticles.indexOf(toDeleteArticle);

    let newScores = articleData.scores;
    newScores = newScores - toDeleteArticle.score * newBoughtArticles[toDeleteArticleIndex].quantity;

    newBoughtArticles.splice(toDeleteArticleIndex, 1);

    let totalItems = 0;
    for (let i = 0; i < newBoughtArticles.length; i++) {
      totalItems = totalItems + newBoughtArticles[i]["quantity"];
    }

    const newAverage = totalItems === 0 ? 0 : (newScores / totalItems).toFixed(2);

    setArticleData((articleData) => ({
      articles: articleData.articles,
      boughtArticles: newBoughtArticles,
      scores: newScores,
      average: newAverage,
    }));
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
      <Text>{props.quantity}x</Text>
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
