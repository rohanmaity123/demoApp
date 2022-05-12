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
        <View style={{marginVertical:6}}>
            <View style={{ paddingVertical: 10, height: 350, width: '100%', backgroundColor: '#222232' }}>
                <ContentLoader width="100%" height="100%" 
                backgroundColor={COLORS.shimmerbg}
                foregroundColor={COLORS.shimmerfg}>
                    <Circle cx="35" cy="35" r="25" />
                    <Rect x="75" y="20" rx="4" ry="4" width="150" height="20" />
                    <Rect x="75" y="50" rx="3" ry="3" width="100" height="10" />

                    <Rect x="30" y="80" rx="4" ry="4" width="300" height="20" />
                    <Rect x="0" y="110" width="100%" height="240" />


                </ContentLoader>


            </View>
            <View style={styles.PartView}>
                <Pressable
                >
                    <Text style={styles.TextStyle}>
                        <Icon name="like1" type="AntDesign"
                            style={{ ...styles.IconStyle, color: '#fff' }}
                        />
                    </Text>
                </Pressable>

                <Pressable style={{ justifyContent: 'center', alignSelf: 'center' }}
                >

                    <Text style={styles.TextStyle}>
                        <Icon name="message-text-outline" type="MaterialCommunityIcons"
                            style={styles.IconStyle}
                        />
                    </Text>
                </Pressable>

                <Pressable
                >
                    <Text style={styles.TextStyle}>
                        <Icon name="share" type="Entypo"
                            style={styles.IconStyle}
                        />
                    </Text>
                </Pressable>
            </View>
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
    IconStyle: {
        fontSize: moderateScale(17),
        color: '#f4f4f4',

    },
    TextStyle: {
        fontSize: moderateScale(15),
        fontFamily: 'Lato-Bold',
        color: '#fff'
    },
    PartView: {
        height: verticalModerateScale(40),
        width: width,
        // borderWidth:4,
        // marginTop:moderateScale(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#222232'
    },
});

//make this component available to the app
export default MyLoader;
