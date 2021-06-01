import React from 'react';
import { render } from 'react-dom';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native'


export default ArticleImage = (props) => {
    return (
        <View>
            <Image
            style={{width: 40, height:40}}
            source={{uri: props.imgSrc}} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
 

});

