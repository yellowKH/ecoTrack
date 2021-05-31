import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Speedometer from "../components/Speedometer";

export default ArticleInfo = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
      <Text>{JSON.stringify(props.title)}</Text>
      <Speedometer value={70} />
    </View>
  );
};

const styles = StyleSheet.create({});
