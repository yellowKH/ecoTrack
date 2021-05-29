import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default ScannedArticle = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>data: {data} </Text>
      <Button title="Scan Again" onPress={() => navigation.goBack()} />
      <Button title="Commit Article" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({});
