import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default ArticleItem = props => {

    // const pressItemHandler = () => {
    //     props.onDelete(props.id);
    // };

    return (
        <TouchableOpacity
            // onPress={pressItemHandler}
            style={styles.listItemBox}
        >
            <Text>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItemBox: {
        flex: 1,
        marginVertical: 15,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        elevation: 8
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 10
    },
});