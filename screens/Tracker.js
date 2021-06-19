import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import ArticleList from "../components/ArticleList";
import Chart from "../components/Chart";
import { ArticleContext } from "../data/ArticleContext";

export default Tracker = (props) => {
  const [articleData] = useContext(ArticleContext);
  const [period, setPeriod] = useState("total");

  return (
    <View style={[styles.boxes]}>
      <View style={{flexDirection: "row", justifyContent: "center", marginTop: 30, marginBottom: 30 }}>
        <Button 
        title="day" 
        color="#6A8CAF"
        
        onPress={() => setPeriod("day")} />
        <View style={styles.space} />
        <Button
        title="month"
        color="#6A8CAF"
        onPress={() => setPeriod("month")} />
        <View style={styles.space} />

        <Button 
        title="year" 
        color="#6A8CAF"
        onPress={() => setPeriod("year")} />
        <View style={styles.space} />
        <Button 
        title="total"
        color="#6A8CAF"
        onPress={() => setPeriod("total")} />
      </View>
      <Text style = {styles.text}>Personal Consumption Chart</Text>
      <Chart boughtArticles={articleData.boughtArticles} period={period} />
      <Text>Your average CO2 Score: {articleData.average}</Text>
      <ArticleList target={"Article Info"} articles={articleData.boughtArticles} />
    </View>
  );
};

const styles = StyleSheet.create({

  space: {
    width:35,
    height:35
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
    
  }







});

