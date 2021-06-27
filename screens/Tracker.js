import React, { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ArticleList from "../components/ArticleList";
import Chart from "../components/Chart";
import BgButton from "../components/interaction/BgButton";
import { ArticleContext } from "../data/ArticleContext";

export default Tracker = (props) => {
  const [articleData] = useContext(ArticleContext);
  const [period, setPeriod] = useState("total");

  return (
    <View style={styles.container}>
      <View style={styles.periodSelection}>
        <BgButton text="day" onClick={() => setPeriod("day")} />
        <BgButton text="month" onClick={() => setPeriod("month")} />
        <BgButton text="year" onClick={() => setPeriod("year")} />
        <BgButton text="total" onClick={() => setPeriod("total")} />
      </View>
      <Chart boughtArticles={articleData.boughtArticles} period={period} />
      <Text style={styles.scoreText}>Your average CO2 Score: {articleData.average}</Text>
      <ArticleList target={"Article Info"} articles={articleData.boughtArticles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#aaf0d1",
  },

  periodSelection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 50,
  },

  scoreText: {
    marginTop: 10,
  },
});
