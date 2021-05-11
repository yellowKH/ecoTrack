import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default Scan = (props) => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>THIS WILL BE THE SCANNER UTIL</Text>
            <Text>BUTTON TO SHOWCASE BEHAVIOUR AFTER SCAN</Text>
            <Button title="Scan Article" onPress={() => navigation.navigate("Scanned Article")} />
        </View>
    );
};

const styles = StyleSheet.create({});
