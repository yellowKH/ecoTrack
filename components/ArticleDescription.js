import React from "react";
import { StyleSheet, Text } from "react-native";

export default ArticleDescription = (props) => {
  
  return (
    <Text>{JSON.stringify(props.description)}</Text>
  );
};

const styles = StyleSheet.create({


});
