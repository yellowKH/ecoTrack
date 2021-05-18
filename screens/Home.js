import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ArticleList from '../components/ArticleList';

export default Home = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ArticleList></ArticleList>
        </View>
    );
};

const styles = StyleSheet.create({});
