import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArticleImage from "./ArticleImage";

export default ArticleItem = (props) => {
  // const pressItemHandler = () => {
  //     props.onDelete(props.id);
  // };
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      // onPress={pressItemHandler}
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
      <Text style={{ width: 150 }}>{props.title}</Text>
      <Text>{props.quantity}x</Text>
      
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
