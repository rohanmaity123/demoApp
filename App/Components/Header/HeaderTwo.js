//import liraries
import { useTheme } from '@react-navigation/native';
import {Icon} from 'native-base';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  StatusBar,
} from 'react-native';
import {COLORS} from '../../Constants/Colors';
import Navigation from '../../Service/Navigation';
import {
  moderateScale,
  verticalModerateScale,
  verticalScale,
} from '../PixelRatio';
const {width, height} = Dimensions.get('window');
// create a component
const HeaderTwo = props => {
  const {colors, dark} = useTheme();

  return (
    <View
      style={
        props.type != 'onlyName' ? styles.HeaderStyle : styles.HeaderStyle1
      }>
      <StatusBar
        backgroundColor={"#fff"}
        barStyle="dark-content"
        translucent={false}
        hidden={false}
      />
      {props.type != 'onlyName' ? (
        <Pressable
          onPress={() => {
            Navigation.back();
          }}>
          <Icon
            name={
              props.name != 'Meeting Details' &&
              props.name != 'Resend Invitations'
                ? 'chevron-left'
                : 'cross'
            }
            type="Entypo"
            style={styles.IconStyle}
          />
        </Pressable>
      ) : null}

      <Text numberOfLines={2} style={{...styles.TextStyle,color:colors.text}}>
        {props.name}
      </Text>
      <View />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  HeaderStyle: {
    height: verticalScale(50),
    width: width,
    backgroundColor: '#fff',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
  },
  HeaderStyle1: {
    height: verticalScale(50),
    width: width,
    backgroundColor: '#fff',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
  },
  IconStyle: {
    fontSize: 25,
    color: '#000',
  },
  TextStyle: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    alignSelf: 'center',
    color: '#fff',
    // width: '70%',
    // borderWidth: 2,
    // marginRight: 20,
  },
});

//make this component available to the app
export default HeaderTwo;
