import React from "react";
import { StyleSheet, FlatList } from "react-native";

// Dummy data import
import ArticleItem from "./ArticleItem";
import { ARTICLEITEMS } from "../data/dummy-data";

export default ArticleList = (props) => {
  const displayedArticle = ARTICLEITEMS;

  const renderItemHandler = (itemData) => {
    return <ArticleItem title={itemData.item.title} />;
  };

  return (
    <FlatList
      data={displayedArticle}
      style={{ width: "100%" }}
      renderItem={renderItemHandler}
      contentContainerStyle={{ alignItems: "stretch", padding: 20 }}
      keyExtractor={(item, index) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    width: "100%",
    alignItems: "center",
  },
});
