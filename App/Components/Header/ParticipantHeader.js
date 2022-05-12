import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../../Constants/Colors';
import Navigation from '../../Service/Navigation';
import {moderateScale, verticalModerateScale} from '../PixelRatio';

// create a component
const ParticipantHeader = (props) => {
  return (
    <View style={styles.HeaderStyle}>
      <TouchableOpacity 
       onPress={()=> props.closeModal()}
      >
        <Image 
        style={{width:15,height:15,resizeMode:'contain'}}
        source={require('../../Assets/Icon/exit.png')} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
       {props.img ?
        <Image
          source={props.img}
          // source={require('../../Assets/event/union.png')}
          style={styles.imgStyle}
        /> : null }
        <Text style={styles.TextStyle}>{props.title}</Text>
      </View>
      <View />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  HeaderStyle: {
    height: verticalModerateScale(55),
    backgroundColor: COLORS.HeaderColor,
    // borderWidth: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: moderateScale(15),
  },
  IconStyle: {
    fontSize: moderateScale(17),
    color: '#fff',
  },
  imgStyle: {
    width:25,
    height:25,
    resizeMode:'contain'
  },
  TextStyle: {
    fontSize: moderateScale(15),
    fontFamily: 'Lato-Bold',
    marginHorizontal: moderateScale(5),
    color : COLORS.white,
    letterSpacing:.5
  },
});

//make this component available to the app
export default ParticipantHeader;
