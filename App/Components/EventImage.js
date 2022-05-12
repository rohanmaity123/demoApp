//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native';
import { Button, Card, Icon } from 'native-base';
import { COLORS } from '../Constants/Colors';
const { width, height } = Dimensions.get('window');
import { moderateScale, verticalModerateScale } from './PixelRatio';
import moment from 'moment';

// create a component
const EventImage = (props) => {
    // {
    //     console.log("ob", props.item)
    // }
    const { data, userData } = props ;
    // console.log("data",data)

    // const startSession = () => {
    //     // console.log("callllllll>>>>>>>>>")
    //     // // let dd ={}
    //     // socket.emit('session_start', { userId: userData.id, status: "!audio" });
    //     // socket.on("session_start_status", (data) => {
    //     //     console.log("component session_start_status", data);
    //     // });
    // }



    return (
 
        <View style={styles.container}>
            <View style={styles.listview}>

                <ImageBackground 
                style={styles.img}
                source={{uri:data.images && data.images.length > 0 ? data.images[0].preview : null}} >
                 <View style={{padding: 10,}}>
                     
                   <Text style={styles.text}>{data.name}</Text>

                    <Text
                        numberOfLines={4}
                        style={{
                            color: COLORS.EventHomeText,
                            fontSize: moderateScale(10),
                            opacity:.7
                        }}>
                        {data.details}
                    </Text>
                    <Text
                    style={[
                        styles.TextStyle,
                        {fontSize: moderateScale(12), fontFamily: 'Lato-Bold'},
                    ]}>
                    {moment(data.start_date).format('MMMM Do YYYY, h:mm:ss a')}
                    </Text>
                 </View>
             </ImageBackground>
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
        // backgroundColor: '#2c3e50',
    },
    text: {
        color: COLORS.white,
        fontSize: moderateScale(12),
        fontFamily: 'Lato-Bold',
        // marginLeft: moderateScale(10),
        // marginTop: moderateScale(10)

    },
    listview: {
        height: height / 4.5,
        width: width / 1.8,
        // marginHorizontal: moderateScale(15),
        borderRadius: 10,
        backgroundColor: COLORS.list_background,
        marginLeft: moderateScale(15),
        marginVertical: moderateScale(10),
        borderRadius:10,
        overflow:'hidden'
    },
    img: {
        width: '100%',
        height:'100%',
        resizeMode: 'cover',
        borderRadius:10,
        // padding: 10,
    },
    TextStyle: {
        fontSize: moderateScale(12),
        fontFamily: 'Lato-Bold',
        color: '#fff',
        // marginHorizontal: moderateScale(10),
        marginVertical: moderateScale(3),
    },
});

//make this component available to the app
export default EventImage;
