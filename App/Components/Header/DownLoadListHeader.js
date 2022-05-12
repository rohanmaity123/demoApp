//import liraries
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, Pressable } from 'react-native';
import { COLORS } from '../../Constants/Colors';
import Navigation from '../../Service/Navigation';
import { verticalModerateScale } from '../PixelRatio';
const {width,height} = Dimensions.get('window');
// create a component
const HeaderTwo = (props) => {
    return (
        <View style={styles.HeaderStyle}>
            <View style={{width:'10%'}}>
                <Pressable onPress={()=>{Navigation.back()}}>
            <Icon name="ios-chevron-back-sharp" type="Ionicons" 
            style={styles.IconStyle}
            />
            </Pressable>
            </View>
            
            <View style={{width:'70%',}}>
            <Text style={styles.TextStyle}>{props.name}</Text>
            </View>
            <View style={{width:'20%'}}>
            <Text style={[styles.TextStyle,{}]}>Edit</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    HeaderStyle: {
        height:verticalModerateScale(50),
        width:width,
        backgroundColor:COLORS.HeaderColor,
        elevation:3,
        alignItems:'center',
        flexDirection:'row',
      
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
export default HeaderTwo;
