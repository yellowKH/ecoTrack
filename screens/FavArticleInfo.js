import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default FavArticleInfo = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Close fav article" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({});
