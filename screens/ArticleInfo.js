import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default ArticleInfo = (props) => {
  const navigation = useNavigation();
 
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{JSON.stringify(props.title)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
