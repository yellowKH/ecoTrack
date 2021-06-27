import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../constants/color.js";
import { ArticleContext } from "../data/ArticleContext";
import ArticleList from "../components/ArticleList";

export default FavArticleList = (props) => {
  const [articleData] = useContext(ArticleContext);
  return (
    <View style={styles.container}>
      <View style={styles.listWrapper}>
        <ArticleList target={"Fav Article Info"} articles={articleData.favArticles} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.main,
  },

  listWrapper: {
    marginVertical: 50,
  },
});
