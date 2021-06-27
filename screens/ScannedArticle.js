import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS } from "../constants/color.js";
import AfterScan from "../components/modals/AfterScan";
import Speedometer from "../components/Speedometer";
import BgButton from "../components/interaction/BgButton";
import ArticleDescription from "../components/ArticleDescription";
import { ArticleContext } from "../data/ArticleContext";
import { storeData } from "../data/AppStorage";
import { updateBoughtArticles, updateFavArticles } from "../controller/ArticleController";
import { Icon } from "react-native-elements";

export default ScannedArticle = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { scannedArticle } = route.params;
  const [articleData, setArticleData] = useContext(ArticleContext);
  const [quantity, setQuantity] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const foundFav = articleData.favArticles.find((item) => item.id === scannedArticle.id);
  const [icon, setIcon] = useState(foundFav ? "heart" : "heart-o");

  const updateBoughtArticlesHandler = () => {
    const newBoughtArticles = articleData.boughtArticles;
    const foundArticle = articleData.boughtArticles.find((item) => item.id === scannedArticle.id);
    const newScores = articleData.scores;
    const totalQuantity = quantity;

    const [returnScore, returnAverage, returnBoughtArticles] = updateBoughtArticles(
      scannedArticle,
      quantity,
      newScores,
      totalQuantity,
      foundArticle,
      newBoughtArticles
    );

    setArticleData((articleData) => ({
      articles: articleData.articles,
      boughtArticles: returnBoughtArticles,
      scores: returnScore,
      average: returnAverage,
      favArticles: articleData.favArticles,
    }));

    setIsOpen(true);
  };
  storeData(articleData);

  const updateFavArticlesHandler = () => {
    const newFavArticles = articleData.favArticles;
    const returnArticles = updateFavArticles(
      foundFav,
      newFavArticles,
      scannedArticle.id,
      scannedArticle.title,
      scannedArticle.description,
      scannedArticle.imgSrc,
      scannedArticle.score
    );

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

  const cancelScanHandler = () => {
    setIsOpen(false);
    navigation.popToTop();
    navigation.navigate("Tracker");
  };

  const continueScanHandler = () => {
    setIsOpen(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperWrapper}>
        <View style={styles.articleName}>
          <Text style={styles.articleNameTest}>{scannedArticle.title}</Text>
          <Icon name={icon} type="font-awesome" color="#f50" onPress={() => updateFavArticlesHandler()} />
        </View>
        <View style={styles.interactionRow}>
          <BgButton
            text="Cancel"
            onClick={() => {
              navigation.goBack();
              navigation.navigate("Tracker");
            }}
          />
          <BgButton
            text="Buy"
            onClick={() => {
              updateBoughtArticlesHandler();
            }}
          />
          <BgButton
            text="Rescan"
            onClick={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.quantitySelection}>
          <BgButton
            text="-"
            buttonStyle={{ width: 40, height: 40 }}
            buttonTextStyle={{ fontSize: 20 }}
            onClick={() => {
              if (quantity != 1) setQuantity(quantity - 1);
            }}
          />
          <Text>{quantity}</Text>
          <BgButton
            text="+"
            buttonStyle={{ width: 40, height: 40 }}
            buttonTextStyle={{ fontSize: 20 }}
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          />
        </View>
        <ArticleImage imgSrc={scannedArticle.imgSrc} width={200} height={200} />
        <ArticleDescription description={scannedArticle.description} />
      </View>
      <View style={styles.lowerWrapper}>
        <Speedometer style={styles.speedometer} value={scannedArticle.score} />
      </View>
      <AfterScan visible={modalIsOpen} onCancelScan={cancelScanHandler} onContinueScan={continueScanHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.info,
  },

  upperWrapper: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },

  interactionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    alignItems: "center",
  },

  quantitySelection: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
    alignItems: "center",
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
