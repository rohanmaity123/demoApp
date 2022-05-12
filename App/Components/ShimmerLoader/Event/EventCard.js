//import liraries
import { Card, Icon } from 'native-base';
import React, { Component } from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { COLORS } from '../../../Constants/Colors';
import { moderateScale, verticalModerateScale } from '../../PixelRatio/index';

// create a component
const { width, height } = Dimensions.get('window');

const EventCard = () => {
    return (
            <View style={styles.container}>
                <ContentLoader 
                width={"100%"} 
                height={verticalModerateScale(300)} 
                backgroundColor={COLORS.shimmerbg}
                foregroundColor={COLORS.shimmerfg}>
                    <Rect x="7" y="0" rx="4" ry="4" height="12" width="95%" />
                    <Rect x="7" y="18" rx="4" ry="4" height="20" width="95%" />
                    <Rect x="7" y="45" rx="4" ry="4" height="10" width="30%" />
                    <Rect x="7" y="65" rx="0" ry="0" height={verticalModerateScale(213)} width={width - 20} />
                    {/* <Rect x="0" y="88%" rx="4" ry="4" height="8%" width="60" /> */}
                </ContentLoader>
            </View>
            
    );
};

// define your styles
const styles = StyleSheet.create({
    container: { 
        backgroundColor: COLORS.cardColor,
        // borderWidth: 2,
        marginVertical: moderateScale(5),
        paddingVertical: moderateScale(10),
        maxHeight : verticalModerateScale(360),
        // justifyContent:'center',
        // alignItems:'center'
    }
});

//make this component available to the app
export default EventCard;
