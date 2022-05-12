//import liraries
import { Card, Icon } from 'native-base';
import React, { Component } from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { COLORS } from '../../../Constants/Colors';
import { moderateScale, verticalModerateScale } from '../../PixelRatio/index';

// create a component
const { width, height } = Dimensions.get('window');

const HeadingLoader = () => {
    return (
            <View style={{ 
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: moderateScale(10),
                paddingHorizontal: moderateScale(10),
                width:width,
                height:35
                }}>
                <ContentLoader 
                width={100} 
                height="100%" 
                backgroundColor={COLORS.shimmerbg}
                foregroundColor={COLORS.shimmerfg}>
                    <Rect x="0" y="0" rx="5" ry="5" height="15" width="100" />
                </ContentLoader>
                <ContentLoader 
                width={50} 
                height="100%" 
                backgroundColor={COLORS.shimmerbg}
                foregroundColor={COLORS.shimmerfg}>
                    <Rect x="0" y="0" rx="5" ry="5" height="15" width="50" />
                </ContentLoader>
            </View>
            
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    
});

//make this component available to the app
export default HeadingLoader;
