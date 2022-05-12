//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { moderateScale, verticalModerateScale } from '../Components/PixelRatio';
import { COLORS } from '../Constants/Colors';
import { Icon } from 'native-base';
// create a component
const List = (props) => {
    console.log("object", props.data)
    return (
        <ScrollView>
            <View style={styles.listView}>
                <Image source={props.data.img} />

                {
                    (props.data.show) ?
                        <View style={styles.iftrue}>
                            <Icon name="check"
                                type="AntDesign"
                                style={{
                                    color: COLORS.white,
                                    fontSize: moderateScale(8)
                                }} />
                        </View>
                        :
                        <View style={styles.iffalse}></View>
                }


                <View style={{
                    //  height:'60%',
                    height: moderateScale(40),
                    alignSelf: 'center',
                    marginLeft: moderateScale(12)
                }}>
                    <Text style={styles.text}>{props.data.title}</Text>
                    <Text style={{
                        ...styles.text,
                        fontSize: moderateScale(8),
                        marginTop: moderateScale(5)
                    }}>{props.data.subtitle} </Text>

                </View>


            </View>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listView: {
        backgroundColor: COLORS.modal_background,
        //  opacity:0.5,
        marginVertical: moderateScale(10),
        flexDirection: 'row',
        height: moderateScale(65),
        marginHorizontal: moderateScale(10),
        alignItems: 'center',
        borderRadius: moderateScale(12),
        padding: moderateScale(10)

    },
    text: {
        color: COLORS.white,
        fontSize: moderateScale(14),
        fontFamily: 'Lato-Light',
    },
    iftrue:{
        height:moderateScale(14),
        width:moderateScale(14),
        borderRadius: 7,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        left:moderateScale(45),
        bottom:moderateScale(14)
    },
    iffalse:{
        height:moderateScale(14),
        width:moderateScale(14),
        borderRadius: 7,
        borderWidth:0.8,
        borderColor:COLORS.white,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        left:moderateScale(45),
        bottom:moderateScale(14)
    }
});

//make this component available to the app
export default List;
