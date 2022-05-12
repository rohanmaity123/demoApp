//import liraries
import { Card, Icon } from 'native-base';
import React, { Component } from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { COLORS } from '../../../Constants/Colors';
import { moderateScale, verticalModerateScale } from '../../PixelRatio/index';

// create a component
const { width, height } = Dimensions.get('window');

const Host = () => {
    return (
            <View style={{ 
                backgroundColor:COLORS.Background,
                flexDirection:'row',
                shadowRadius: moderateScale(9),
                padding: moderateScale(12),
                paddingHorizontal:moderateScale(20),
                borderRadius: 8,
                width: width-110,
                height: moderateScale(80),
                borderWidth:1,
                borderColor:COLORS.boxBorderColor,
                marginLeft: 10,
                // paddingLeft:moderateScale(11),
                }}>
                <ContentLoader 
                width="100%"
                height="100%" 
                backgroundColor={COLORS.shimmerbg}
                foregroundColor={COLORS.shimmerfg}>
                    <Rect x="0" y="0" rx={moderateScale(25)} ry={moderateScale(25)} height={moderateScale(50)} width={moderateScale(50)} />
                    <Rect x="70" y="10" rx="3" ry="3" height="10" width="120" />
                    <Rect x="70" y="30" rx="3" ry="3" height="10" width="90" />
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
export default Host;
