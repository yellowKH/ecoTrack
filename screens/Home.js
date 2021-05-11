import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default Home = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ padding: 20 }}>YOUR CURRENT ECO TRACK DATA</Text>
            <Button title="Bought Articles" onPress={() => navigation.navigate("Bought articles")} />
        </View>
    );
};

const styles = StyleSheet.create({});
