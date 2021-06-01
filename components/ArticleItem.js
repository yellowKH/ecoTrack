import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArticleImage from "./ArticleImage";
import { ArticleContext } from "../data/ArticleContext";

export default ArticleItem = (props) => {
  const [articleData, setArticleData] = useContext(ArticleContext);
  const navigation = useNavigation();

  const pressItemHandler = () => {
    let newBoughtArticles = articleData.boughtArticles;
    let toDeleteArticle = newBoughtArticles.indexOf(articleData.boughtArticles.find((item) => item.id === props.id));
    newBoughtArticles.splice(toDeleteArticle, 1);

    setArticleData((articleData) => ({
      articles: articleData.articles,
      boughtArticles: newBoughtArticles,
    }));
  };

  return (
    <TouchableOpacity
      style={styles.listItemBox}
      onPress={() => {
        navigation.navigate("Article Info", {
          title: props.title,
          description: props.description,
          score: props.score,
          quantity: props.quantity,
          imgSrc: props.imgSrc,
        });
      }}
    >
      <ArticleImage imgSrc={props.imgSrc} width={40} height={40} />
      <Text>{props.title}</Text>
      <Text>{props.quantity}x</Text>
      <Button
        title="X"
        onPress={() => {
          pressItemHandler();
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    elevation: 8,
    // shadowColor: 'black',
    // shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 10
  },
});
