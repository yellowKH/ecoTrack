import React from "react";
import { StyleSheet, FlatList } from "react-native";

// Dummy data import
import ArticleItem from "./ArticleItem";
import Placeholder from "./Placeholder";

export default ArticleList = (props) => {
  const renderItemHandler = (itemData) => {
    return (
      <ArticleItem
        id={itemData.item.id}
        title={itemData.item.title}
        description={itemData.item.description}
        imgSrc={itemData.item.imgSrc}
        score={itemData.item.score}
        quantity={itemData.item.quantity}
        target={props.target}
        articles={props.articles}
      />
    );
  };

  return (
    <FlatList
      data={props.articles}
      style={{ flex: 1, width: "100%"}}
      renderItem={renderItemHandler}
      contentContainerStyle={{ alignItems: "stretch", padding: 8 }}
      keyExtractor={(item, index) => item.id}
      ListEmptyComponent={<Placeholder />}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    width: "100%",
    alignItems: "center",
  },
});
