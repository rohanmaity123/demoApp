//import liraries
import { Card, Icon } from 'native-base';
import React, { Component } from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { COLORS } from '../../../Constants/Colors';
import { moderateScale, verticalModerateScale } from '../../PixelRatio/index';

// create a component
const { width, height } = Dimensions.get('window');

const MoviesLoader = () => {
    return (
        <View style={styles.container}>
            <ContentLoader
                width={width / 2.5}
                height={230}
                backgroundColor={COLORS.shimmerbg}
                foregroundColor={COLORS.shimmerfg}>
                <Rect x="0" y="0" rx="8" ry="8" height="85%" width="100%" />
                <Rect x="0" y="90%" rx="4" ry="4" height="8%" width="100" />
            </ContentLoader>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 230,
        width: width / 2.5,
        borderRadius: 8,
        marginHorizontal: moderateScale(5),
        justifyContent: 'space-between',
        marginBottom: 5
    }
});

//make this component available to the app
export default MoviesLoader;
