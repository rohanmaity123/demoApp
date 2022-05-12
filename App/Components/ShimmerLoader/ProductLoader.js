//import liraries
import { Card, Icon } from 'native-base';
import React, { Component } from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { COLORS } from '../../Constants/Colors';
import { moderateScale, verticalModerateScale } from '../PixelRatio';

// create a component
const { width, height } = Dimensions.get('window');
const MyLoader = () => {
    return (
            <View style={{ 
                paddingVertical: moderateScale(10),
                height: verticalModerateScale(175), 
                width: (width/2)-25, 
                alignItems:'center', 
                borderWidth:.5,
                borderRadius:4, 
                padding: 8,
                borderColor:COLORS.boxBorderColor,

                marginHorizontal:moderateScale(2),
                marginLeft:moderateScale(10),
                marginBottom:moderateScale(5)

                
                // borderColor:COLORS.boxBorderColor
                }}>
                <ContentLoader width="100%" height="100%" 
               backgroundColor={COLORS.shimmerbg}
               foregroundColor={COLORS.shimmerfg}>
                    <Rect x="0" y="0" rx="6" ry="6" width="100%" height="120" />
                    <Rect x="0" y="130" rx="4" ry="4" height="30" width="100%" />
                    <Rect x="0" y="170" rx="4" ry="4" height="20" width="60" />
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
export default MyLoader;
