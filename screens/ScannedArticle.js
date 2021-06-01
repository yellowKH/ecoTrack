import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Speedometer from "../components/Speedometer";
import ArticleDescription from "../components/ArticleDescription";
import { ArticleContext } from "../data/ArticleContext";
import BoughtItem from "../models/boughtItem";

export default ScannedArticle = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { scannedArticle } = route.params;
  const [articleData, setArticleData] = useContext(ArticleContext);
  const [quantity, setQuantity] = useState(1);

  const addArticle = () => {
    boughtArcticleGenerator();
    navigation.popToTop();
    navigation.navigate("Tracker");
  };

  boughtArcticleGenerator = () => {
    let newBoughtArticles = articleData.boughtArticles;
    newBoughtArticles.push(
      new BoughtItem(
        scannedArticle.id,
        scannedArticle.title,
        scannedArticle.description,
        scannedArticle.imgSrc,
        scannedArticle.score,
        quantity,
        new Date().toDateString()
      )
    );
    setArticleData((articleData) => ({
      articles: articleData.articles,
      boughtArticles: newBoughtArticles,
    }));
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
      <Text>{scannedArticle.title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Cancel"
          onPress={() => {
            navigation.goBack();
            navigation.navigate("Tracker");
          }}
        />
        <Button
          title="Buy"
          onPress={() => {
            addArticle();
          }}
        />
        <Button
          title="Rescan"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", width: "30%", alignItems: "center" }}>
        <Button
          title="-"
          onPress={() => {
            if (quantity != 1) setQuantity(quantity - 1);
          }}
        />
        <Text>{quantity}</Text>
        <Button
          title="+"
          onPress={() => {
            setQuantity(quantity + 1);
          }}
        />
      </View>

      <ArticleImage imgSrc={scannedArticle.imgSrc} width={200} height={200} />
      <ArticleDescription description={scannedArticle.description} />
      <Speedometer value={scannedArticle.score} />
    </View>
  );
};

const styles = StyleSheet.create({});
