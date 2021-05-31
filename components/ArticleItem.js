import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
          score: props.score,
        });
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: props.imgSrc }} style={{ width: 40, height: 40 }} />
        <Text>{props.title}</Text>
        <Text>{props.quantity}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItemBox: {
    flex: 1,
    marginVertical: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
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
