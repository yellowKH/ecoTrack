import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default FavArticleList = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Favorite Article" onPress={() => navigation.navigate("Fav Article Info")} />
    </View>
  );
};

const styles = StyleSheet.create({});
