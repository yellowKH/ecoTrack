import React from "react";
import { StyleSheet, FlatList } from "react-native";

// Dummy data import
import ArticleItem from "./ArticleItem";
import { ARTICLEITEMS } from "../data/dummy-data";

export default ArticleList = (props) => {
  const displayedArticle = ARTICLEITEMS;

  const renderItemHandler = (itemData) => {
    return <ArticleItem
      id={itemData.item.id}
      title={itemData.item.title}
      description={itemData.item.description}
      isFav={itemData.item.isFav} />;
  };

  return (
    <FlatList
      data={displayedArticle}
      style={{ flex: 1, width: "100%" }}
      renderItem={renderItemHandler}
      contentContainerStyle={{ alignItems: "stretch", padding: 40 }}
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
