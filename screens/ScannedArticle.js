import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AfterScan from "../components/modals/AfterScan";
import Speedometer from "../components/Speedometer";
import BgButton from "../components/interaction/BgButton";
import ArticleDescription from "../components/ArticleDescription";
import { ArticleContext } from "../data/ArticleContext";
import { storeData } from "../data/AppStorage";
import { updateBoughtArticles } from "../controller/ArticleController";

export default ScannedArticle = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { scannedArticle } = route.params;
  const [articleData, setArticleData] = useContext(ArticleContext);
  const [quantity, setQuantity] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);

  const updateBoughtArticlesHandler = () => {
    const foundArticle = articleData.boughtArticles.find((item) => item.id === scannedArticle.id);
    const newBoughtArticles = articleData.boughtArticles;
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

    storeData(articleData);

    setIsOpen(true);
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
      <Text>{scannedArticle.title}</Text>
      <View style={{ flexDirection: "row" }}>
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
      <View style={{ flexDirection: "row", justifyContent: "space-around", width: "50%", alignItems: "center" }}>
        <BgButton
          text="-"
          onClick={() => {
            if (quantity != 1) setQuantity(quantity - 1);
          }}
        />
        <Text>{quantity}</Text>
        <BgButton
          text="+"
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        />
      </View>

      <ArticleImage imgSrc={scannedArticle.imgSrc} width={200} height={200} />
      <ArticleDescription description={scannedArticle.description} />
      <Speedometer value={scannedArticle.score} />
      <AfterScan visible={modalIsOpen} onCancelScan={cancelScanHandler} onContinueScan={continueScanHandler} />
    </View>
  );
};

const styles = StyleSheet.create({});
