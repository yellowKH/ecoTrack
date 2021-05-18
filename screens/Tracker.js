import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ArticleList from "../components/ArticleList";
import Chart from "../components/Chart";

export default Tracker = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Chart />
      <ArticleList />
    </View>
  );
};

const styles = StyleSheet.create({});
