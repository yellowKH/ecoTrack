import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default ScannedArticle = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Scan Again" onPress={() => navigation.goBack()} />
      <Button title="Commit Article" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({});
