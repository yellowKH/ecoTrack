import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default ArticleList = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button title="Back Home" onPress={() => navigation.navigate("Home")} />
            <Button title="Article" onPress={() => navigation.navigate("Article")} />
        </View>
    );
};

const styles = StyleSheet.create({});
