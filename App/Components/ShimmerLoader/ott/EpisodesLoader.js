//import liraries
import { Card, Icon } from 'native-base';
import React, { Component } from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { COLORS } from '../../../Constants/Colors';
import { moderateScale, verticalModerateScale } from '../../PixelRatio/index';

// create a component
const { width, height } = Dimensions.get('window');

const EpisodesLoader = () => {
    return (
            <View style={styles.container}>
                <ContentLoader 
                width={width/2} 
                height={width/2*9/16+30} 
                backgroundColor={COLORS.shimmerbg}
                foregroundColor={COLORS.shimmerfg}>
                    <Rect x="0" y="0" rx="8" ry="8" height="85%" width="100%" />
                    <Rect x="0" y="88%" rx="4" ry="4" height="8%" width="60" />
                </ContentLoader>
            </View>
            
    );
};

// define your styles
const styles = StyleSheet.create({
    container: { 
        height: width/2*9/16+30,
        width: width/2,
        marginHorizontal: moderateScale(4),
        borderRadius: 7,
        // backgroundColor: '#191925',
    }
});

//make this component available to the app
export default EpisodesLoader;
