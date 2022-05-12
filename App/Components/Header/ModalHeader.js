//import liraries
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
import {moderateScale, verticalModerateScale} from '../PixelRatio';
const {width, height} = Dimensions.get('window');
// create a component
const ModalHeader = props => {
  return (
    <View style={styles.HeaderStyle}>
      <StatusBar
        backgroundColor={COLORS.themecolor}
        barStyle="light-content"
        translucent={false}
        hidden={false}
      />
      <View style={{width: '10%'}}>
        <Pressable
          onPress={() => props.CloseModal()}>
          <Icon
            name={props.name != 'Meeting Details' ? 'chevron-left' : 'cross'}
            type="Entypo"
            style={styles.IconStyle}
          />
        </Pressable>
      </View>
      <View style={{width: '90%'}}>
        <Text style={styles.TextStyle}>{props.name}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  HeaderStyle: {
    height: verticalModerateScale(50),
    width: width,
    backgroundColor: COLORS.HeaderColor,
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  IconStyle: {
    fontSize: 25,
    color: '#fff',
    marginLeft: 15,
  },
  TextStyle: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    alignSelf: 'center',
    color: '#fff',
    marginRight: 20,
  },
});

//make this component available to the app
export default ModalHeader;
