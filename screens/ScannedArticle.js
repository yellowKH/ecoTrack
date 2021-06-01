import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Speedometer from "../components/Speedometer";
import { BOUGHTITEMS } from "../data/dummy-data";

export default ScannedArticle = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { scannedArticle } = route.params;

  const addArticle = () => {
    BOUGHTITEMS.push(scannedArticle);
    navigation.popToTop();
    navigation.navigate("Tracker");
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

      <ArticleImage imgSrc={scannedArticle.imgSrc} width={200} height={200} />
      <Text>{scannedArticle.description}</Text>
      <Speedometer value={scannedArticle.score} />
    </View>
  );
};

const styles = StyleSheet.create({});
