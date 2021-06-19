import React, { useContext } from "react";
import { StyleSheet, View, Button } from "react-native";
import { ArticleContext } from "../data/ArticleContext";
import ArticleList from "../components/ArticleList";

export default FavArticleList = (props) => {
  const [articleData] = useContext(ArticleContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",  backgroundColor: "#A7E9AF" }}>
      <ArticleList target={"Fav Article Info"} articles={articleData.favArticles} />
    </View>
  );
};

const styles = StyleSheet.create({



});
