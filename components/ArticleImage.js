import React from "react";
import { StyleSheet, Image, View } from "react-native";

export default ArticleImage = (props) => {
  return (
    <View>
      <Image style={{ width: props.width, height: props.height, resizeMode: "contain" }} source={{ uri: props.imgSrc }} />
    </View>
  );
};

const styles = StyleSheet.create({});
