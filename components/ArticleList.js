import React, { useContext } from "react";
import { StyleSheet, FlatList } from "react-native";

// Dummy data import
import ArticleItem from "./ArticleItem";
import { ArticleContext } from "../data/ArticleContext";

export default ArticleList = (props) => {
  const [articleData] = useContext(ArticleContext);

  const renderItemHandler = (itemData) => {
    return (
      <ArticleItem
        id={itemData.item.id}
        title={itemData.item.title}
        description={itemData.item.description}
        imgSrc={itemData.item.imgSrc}
        score={itemData.item.score}
        quantity={itemData.item.quantity}
      />
    );
  };

  return (
    <FlatList
      data={articleData.boughtArticles}
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
