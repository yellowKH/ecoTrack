import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default ArticleInfo = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button title="Back to List" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({});
