//import liraries
import { Icon, Row } from 'native-base';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, 
    Pressable, StatusBar, Modal,TouchableOpacity } from 'react-native';
// import Modal from 'react-native-modal';
import Navigation from '../../Service/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OttModal from '../OttHeaderBar/OttModal';
import { moderateScale, verticalScale } from '../PixelRatio';
import OttService from '../../Service/OttService';
const { width } = Dimensions.get('window');

const TvShoesHeader = (props) => {

    const [search, setsearch] = useState('');
    const [searchData, setsearchData] = useState([]);

    const searchNow = async () => {
            props.apisearchData(search);
    }

    return (
        <View style={styles.HeaderView}>
            <StatusBar backgroundColor='#191926' />
                <Pressable 
                onPress={()=>Navigation.back()}
                style={styles.iconview}>
                    <Icon name="left"
                        type="AntDesign"
                        style={{
                            color: 'white'
                        }} />
                </Pressable>

                    <TextInput
                        style={{
                            color: 'white',
                        }}
                        placeholder="Search..."
                        placeholderTextColor='#696969'
                        style={styles.input}
                        onChangeText={(val)=>setsearch(val)}
                        returnKeyType="search"
                        // multiline={true}
                        onSubmitEditing={searchNow}
                    />


                <TouchableOpacity
                    onPress={searchNow}
                    style={{justifyContent:'center',alignItems:'center',width:40}}
                >
                    <Icon 
                        name="search"
                        type="Ionicons"
                        style={{
                            color: 'white',
                        //    / marginTop: 25,
                            fontSize: 20
                        }} />
                </TouchableOpacity>

        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    // icon:{
    // color:'white',
    // marginLeft:10,
    // marginTop:20
    // },
    HeaderView: {
        // height: hp('10%'),

        height: 70,
        // marginRight:10,
        // borderWidth:5,
        // alignSelf:'center',
        // borderWidth:1,
        paddingHorizontal:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#191926'
    },
    input: {
        alignItems: 'center',
        // width: 50,
        flexDirection: 'row',
        // height: '63%',
        width: '75%',
        // margin: 12,
        borderWidth: 0.5,
        borderRadius: 8,
        justifyContent: 'space-around',
        backgroundColor: '#222232',
        paddingLeft: 15,
        borderRadius: 35,
        color : '#fff',
        height:verticalScale(50)

    },
    IconStyle:{
        fontSize:moderateScale(10)
    }
})


//make this component available to the app
export default TvShoesHeader;
