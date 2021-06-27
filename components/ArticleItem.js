import React, { useContext } from "react";
import { Platform, StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { COLORS } from "../constants/color.js";
import { useNavigation } from "@react-navigation/native";
import ArticleImage from "./ArticleImage";
import { ArticleContext } from "../data/ArticleContext";
import { storeData } from "../data/AppStorage";
import { deleteArticle } from "../controller/ArticleController";
import BgButton from "./interaction/BgButton";

export default ArticleItem = (props) => {
  const [articleData, setArticleData] = useContext(ArticleContext);
  const navigation = useNavigation();

  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

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
    <ButtonComponent
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
      <View style={styles.listItem}>
        <ArticleImage imgSrc={props.imgSrc} width={40} height={40} />
        <Text>{props.title}</Text>
        <Text>{props.quantity}</Text>
        <BgButton
          text="X"
          buttonStyle={{ backgroundColor: "transparent", width: 40, height: 40 }}
          buttonTextStyle={{ color: "red", fontSize: 20 }}
          onClick={() => deleteArticleHandler()}
        />
      </View>
    </ButtonComponent>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 0,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: COLORS.touchables,
  },
});
