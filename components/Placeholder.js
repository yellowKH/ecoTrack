import React from "react";
import { StyleSheet, Text } from "react-native";

export default Placeholder = (props) => {

    return (
        <Text style={styles.message}>no items bought yet</Text>
    );
};

const styles = StyleSheet.create({

    message: {
        fontSize: 20,
        marginTop: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        textTransform: "capitalize",
        textDecorationLine: "underline"
    }

});
