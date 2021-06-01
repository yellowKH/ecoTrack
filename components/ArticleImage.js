import React from 'react';
import { render } from 'react-dom';
import {StyleSheet, Text, Image, View} from 'react-native'

export default ArticleImage = (props) => {
    return (
        <View>
            <Image
            style={{width: props.width, height: props.height}}
            source={{uri: props.imgSrc}} 
            
            />
        </View>
    );
};

const styles = StyleSheet.create({
 

});

