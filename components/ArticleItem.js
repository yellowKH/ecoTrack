import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArticleImage from "./ArticleImage";
import { ArticleContext } from "../data/ArticleContext";
import { storeData } from "../data/AppStorage";
import { deleteArticle } from "../controller/ArticleController";
import BgButton from "./interaction/BgButton";

export default ArticleItem = (props) => {
  const [articleData, setArticleData] = useContext(ArticleContext);
  const navigation = useNavigation();

  const deleteArticleHandler = () => {
    const listedArticles = props.articles;
    const toDeleteArticle = listedArticles.find((item) => item.id === props.id);
    const toDeleteArticleIndex = listedArticles.indexOf(toDeleteArticle);
    const newScores = articleData.scores;
    const [returnScore, returnAverage, returnArticles] = deleteArticle(listedArticles, toDeleteArticle, toDeleteArticleIndex, newScores);

    if ("quantity" in toDeleteArticle) {
      setArticleData((articleData) => ({
        articles: articleData.articles,
        boughtArticles: listedArticles,
        scores: returnScore,
        average: returnAverage,
        favArticles: articleData.favArticles,
      }));
    } else {
      setArticleData((articleData) => ({
        articles: articleData.articles,
        boughtArticles: articleData.boughtArticles,
        scores: articleData.scores,
        average: articleData.average,
        favArticles: returnArticles,
      }));
    }
  };
  storeData(articleData);
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
      <BgButton text="X" onClick={() => deleteArticleHandler()} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderWidth: 0,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: "#83c5be",
    //backgroundColor: "#76c6c5",
    // shadowColor: 'black',
    // shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 10
  },
});
