import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import ArticleList from "../components/ArticleList";
import Chart from "../components/Chart";
import { ArticleContext } from "../data/ArticleContext";

export default Tracker = (props) => {
  const [articleData] = useContext(ArticleContext);
  const [period, setPeriod] = useState("total");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
        <Button title="day" onPress={() => setPeriod("day")} />
        <Button title="month" onPress={() => setPeriod("month")} />
        <Button title="year" onPress={() => setPeriod("year")} />
        <Button title="total" onPress={() => setPeriod("total")} />
      </View>
      <Chart boughtArticles={articleData.boughtArticles} period={period} />
      <Text>Your average CO2 Score: {articleData.average}</Text>
      <ArticleList target={"Article Info"} articles={articleData.boughtArticles} />
    </View>
  );
};

const styles = StyleSheet.create({});
