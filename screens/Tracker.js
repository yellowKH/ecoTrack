import React, { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ArticleList from "../components/ArticleList";
import Chart from "../components/Chart";
import { ArticleContext } from "../data/ArticleContext";

export default Tracker = (props) => {
  const [articleData] = useContext(ArticleContext);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Chart />
      <Text>Your average CO2 Score: {articleData.average}</Text>
      <ArticleList />
    </View>
  );
};

const styles = StyleSheet.create({});
