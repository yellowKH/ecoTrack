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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#aaf0d1"}}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
        <BgButton text="day" onClick={() => setPeriod("day")} />
        <View style={styles.space} />
        <BgButton text="month" onClick={() => setPeriod("month")} />
        <View style={styles.space} />
        <BgButton text="year" onClick={() => setPeriod("year")} />
        <View style={styles.space} />
        <BgButton text="total" onClick={() => setPeriod("total")} />
      </View>
      <Chart boughtArticles={articleData.boughtArticles} period={period} />
      <Text style={styles.text1}>Your average CO2 Score: {articleData.average}</Text>
      <ArticleList target={"Article Info"} articles={articleData.boughtArticles} />
    </View>
  );
};


const styles = StyleSheet.create({

  space: {
    width:18,
    height:18
  },

  boxes: {
     flex: 1, 
     alignItems: "center", 
     justifyContent: "center" ,
     backgroundColor: "#A7E9AF"
  },


  text: {
    fontSize: 22,
    fontStyle: 'normal',
    
  },

  text1: {
    color: "#214540",
  }







});

