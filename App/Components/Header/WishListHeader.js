//import liraries
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, Pressable } from 'react-native';
import { COLORS } from '../../Constants/Colors';
import Navigation from '../../Service/Navigation';
const {width,height} = Dimensions.get('window');
// create a component
const WishListHeader = (props) => {
    return (
        <View style={styles.HeaderStyle}>
            <View style={{width:'32%'}}>
                <Pressable onPress={()=>{Navigation.back()}}>
                <Icon name="ios-chevron-back-sharp" type="Ionicons" 
                style={styles.IconStyle}
                />
            </Pressable>
            </View>
            <View style={{width:'40%',justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.TextStyle}>{props.name}</Text>
            </View>
            <View style={{width:'28%',justifyContent:'center',alignSelf:'center'}}>
                <Text style={styles.TextStyle}>Select All</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    HeaderStyle: {
        height:70,
        width:width,
        backgroundColor:COLORS.themecolor,
        elevation:3,
        alignItems:'center',
        flexDirection:'row'
    },
    IconStyle: {
        fontSize:25,
        color:'#fff',
        marginLeft:15
        
    },
    TextStyle : {
        fontSize:14,
        alignSelf:'center',
        color:'#fff',
        // marginRight:20
    }
});

//make this component available to the app
export default WishListHeader;
