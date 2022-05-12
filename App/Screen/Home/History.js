//import liraries
import { Icon, Row } from 'native-base';
import React, { Component } from 'react';
import { moderateScale } from '../../Components/PixelRatio';

import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    Pressable,
    Dimensions,
    SectionList,
    StatusBar,

} from 'react-native';
import { COLORS } from '../../Constants/Colors'

const { width } = Dimensions.get('window');
const DATA = [
    {
        title: 'Recent',
        data: [
            {
                // image: require('../../Assets/history_img1.png'),
                name: 'The Mauritanian',
                subtitle: 'movies'
            },
            {
                // image: require('../../Assets/history_img2.png'),
                name: 'Peaky Blienders',
                subtitle: 'movies'
            },
            {
                // image: require('../../Assets/history_img3.png'),
                name: 'James with cooking show in canada which went very well',
                subtitle: 'movies'
            },
            {
                // image: require('../../Assets/history_img4.png'),
                name: 'The Mauritanian',
                subtitle: 'movies'
            },
            {
                // image: require('../../Assets/history_img5.png'),
                name: 'The Mauritanian',
                subtitle: 'movies'
            },


        ],
    },

    {
        title: 'Yesturday',
        data: [
            {
                // image: require('../../Assets/history_img6.png'),
                name: 'The Mauritanian',
                subtitle: 'movies'
            },
            {
                // image: require('../../Assets/history_img7.png'),
                name: 'Peaky Blienders',
                subtitle: 'movies'
            },
            {
                // image: require('../../Assets/history_img8.png'),
                name: 'James with cooking show in canada which went very well',
                subtitle: 'movies'
            },
            {
                // image: require('../../Assets/history_img9.png'),
                name: 'The Mauritanian',
                subtitle: 'movies'
            },
            {
                // image: require('../../Assets/history_img10.png'),
                name: 'The Mauritanian',
                subtitle: 'movies'
            },


        ],
    }
]


// create a component
const History = () => {
    return (

        <View style={styles.container}>
            <StatusBar hidden={false}
                translucent={true}
                backgroundColor='transparent' />
            <View style={styles.header}>
                <Pressable style={styles.iconview}>
                    <Icon name="left" type="AntDesign" style={{
                        color: COLORS.white,
                        marginTop: moderateScale(40),
                        marginBottom: moderateScale(12),

                    }} />
                </Pressable>
                <View style={{
                    justifyContent: 'center',
                    flex: 1,
                    alignItems: 'center',
                }}>
                    <Text style={styles.texthead}>History</Text>
                </View>

                <Text style={styles.text}>Clear all</Text>
            </View>

            <View style={styles.container}>
                <SectionList
                    sections={DATA}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index }) => {
                        // console.log('data-->', item)
                        return (
                            <View style={{
                                flexDirection: 'row',
                                width: '37%',
                            }}>
                                <Image
                                    source={item.image}
                                    style={{
                                        borderRadius: moderateScale(8),
                                        marginBottom: moderateScale(10),
                                        width: '110%',
                                        height: moderateScale(88),
                                        marginLeft: moderateScale(12)
                                    }}
                                />
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: moderateScale(190)
                                }}>
                                    <View style={{ width: '75%' }}>
                                        <Text style={{
                                            marginLeft: moderateScale(16),
                                            fontSize: moderateScale(10),
                                            color: COLORS.white,
                                            // marginTop: 1,
                                            fontFamily: 'Lato-Light',
                                        }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{
                                            marginLeft: moderateScale(18),
                                            fontSize: moderateScale(8),
                                            color: COLORS.white,
                                            fontFamily: 'Lato-Light',
                                        }}>
                                            {item.subtitle}
                                        </Text>
                                    </View>
                                    <Pressable style={{flexDirection:'row-reverse'}}>
                                        <Icon name="dots-three-vertical" type='Entypo'
                                            style={{
                                                color: COLORS.white,
                                                fontSize: moderateScale(18),
                                                // marginLeft: moderateScale(50),
                                                marginTop: moderateScale(10)
                                            }} />
                                    </Pressable>
                                </View>
                            </View>)
                    }}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.toptext}>{title}</Text>
                    )}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.themecolor,
    },
   HeaderStyle: {
        height:70,
        width:width,
        backgroundColor:COLORS.HeaderColor,
        elevation:3,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'red'
    },
    text:
    {
        color: COLORS.white,
        marginTop: moderateScale(45),
        marginBottom: moderateScale(12),
        marginRight: moderateScale(15),
        fontSize: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Lato-Light'
    }
    ,
    toptext: {
        color: COLORS.white,
        marginTop: moderateScale(10),
        marginBottom: moderateScale(12),
        fontWeight: 'bold',
        fontSize: moderateScale(18),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(10),
        marginLeft: moderateScale(14),
        fontFamily: 'Lato-Light'
    },
    texthead:
    {
        color: COLORS.white,
        marginBottom: moderateScale(12),
        fontSize: moderateScale(15),
        fontFamily: 'Lato-Light',
        marginTop: moderateScale(39),
        marginLeft: moderateScale(16),
        alignSelf: 'center',
        fontFamily: 'Lato-Light'
    },
    header:
    {
        backgroundColor: COLORS.themecolor,
        flexDirection: 'row',
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScale(15),
        borderBottomWidth: 0.2,
        borderColor: 'white'
    }
});

export default History;
