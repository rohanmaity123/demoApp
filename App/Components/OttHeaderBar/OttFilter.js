import { Button, Icon } from 'native-base'
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Pressable,
    Dimensions,
    StatusBar,
    ScrollView
} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');
import { COLORS } from '../../Constants/Colors';
import { moderateScale } from '../../Components/PixelRatio';
const data = [
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
    { name: "F" },
    { name: "G" },
    { name: "H" },
    { name: "I" },
    { name: "J" },
    { name: "K" },
    { name: "L" },
    { name: "M" },
    { name: "N" },
    { name: "O" },
    { name: "P" },
    { name: "Q" },
    { name: "R" },
    { name: "S" },
    { name: "T" },
    { name: "U" },
    { name: "V" },
    { name: "W" },
    { name: "X" },
    { name: "Y" },
    { name: "Z" },
]
const button = [
    { name: "Movies" },
    { name: "Tv Series" },
    { name: "Tv Shows" },
    { name: "Videos" },

]
const OttFilter = () => {
    return (

        <View style={styles.container}>
            <StatusBar hidden={false} translucent={true} backgroundColor='transparent' />
            
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: COLORS.ottfilterHeader,
                    width: width,
                    height: 65+StatusBar.currentHeight,

                }}>
                    <View style={{ width: '8%' }}>
                        <Pressable>
                            <Icon name='left'
                                type='AntDesign'
                                style={{
                                    color: COLORS.ottfiltericon,
                                    marginTop: moderateScale(24),
                                    marginLeft: moderateScale(10)
                                }}
                            ></Icon>
                        </Pressable>
                    </View>


                    <View style={{

                        // alignItems: 'center',
                        // flexDirection: 'row',
                        justifyContent: 'center',
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: moderateScale(22),



                    }} >
                        <Pressable>
                            <Icon name='sound-mix'
                                type='Entypo' style={{ color: COLORS.ottfiltericon, }}
                            ></Icon>
                        </Pressable>

                        <Text style={{
                            color: COLORS.ottfiltericon,
                            marginLeft: moderateScale(7),
                            fontSize: moderateScale(18),
                            fontFamily: 'Lato-Light',

                        }}>Filter</Text>
                    </View>
                </View>
                

                <View style={{ flex:1 }}>
                <ScrollView style={{flex:1}}>
  
                    <Text style={styles.text}>Search By Letter</Text>

                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginTop: moderateScale(10),

                    }}>
                        {
                            data.map((item, index) => {
                                return (
                                    <View style={styles.circleView} key={index}>
                                        <Text style={{
                                            fontSize: moderateScale(12),
                                            color: COLORS.ottfiltericon
                                        }}>{item.name}</Text>
                                    </View>
                                )
                            })
                        }

                    </View>
                    <Text style={{
                        marginTop: moderateScale(36),
                        marginLeft: moderateScale(16),
                        color: COLORS.white,
                        fontSize: moderateScale(16),
                        fontFamily: 'Lato-Light'
                    }}>Content Categories</Text>

                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginTop: moderateScale(16),
                    }}>
                        {
                            button.map((item, index) => {
                                return (
                                    <View style={styles.buttonView} key={index}>
                                        <Text style={{ fontSize: moderateScale(12), 
                                            color: COLORS.subtitle }}>{item.name}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>


                    
                    </ScrollView>
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        height:moderateScale(85),
                        position: 'absolute',
                        bottom: 0,
                        backgroundColor: COLORS.ottfilterbottom,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius:10,
                        justifyContent: "space-evenly",

                    }}>
                        <Pressable style={styles.button} >
                            <Text style={{ color: 'white' }}>Cancle</Text>
                        </Pressable>
                        <Pressable style={styles.button} >
                            <Text style={{ color: 'white' }}>Apply Filter</Text>
                        </Pressable>
                    </View>
                </View>
            
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.Background,

    },
    text: {
        color: COLORS.white,
        marginTop: moderateScale(16),
        marginLeft: moderateScale(16),
        fontSize: moderateScale(16),
        fontFamily: 'Lato-Light'
    },
    circleView: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: 20,
        backgroundColor: COLORS.ottfilterHeader,
        marginHorizontal: moderateScale(5),
        marginVertical: moderateScale(5),
        borderColor: COLORS.bordercolor,
        borderWidth: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonView: {
        marginLeft: moderateScale(10),
        width: '25%',
        // height: '22%',
        paddingVertical:moderateScale(10),
        borderRadius: 30,
        backgroundColor: COLORS.ottfilterHeader,
        marginHorizontal: moderateScale(5),
        marginVertical: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.bordercolor,
        borderWidth: 0.2,
    },
    button: {
        borderWidth: 1,
        width: '45%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.deeppink,
        alignSelf: 'center',
        borderRadius: 13,
    }
})
export default OttFilter;
