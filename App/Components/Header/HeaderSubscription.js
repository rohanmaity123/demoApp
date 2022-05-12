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
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import {COLORS} from '../../Constants/Colors';
import Auth from '../../Service/Auth';
import Navigation from '../../Service/Navigation';
import { clearLogData } from '../../Store/action';
import {moderateScale, verticalModerateScale} from '../PixelRatio';

// create a component
const HeaderSubscription = props => {

  const { exist } = props;

  const dispatch = useDispatch();

  const logOut = async () => {
      await Auth.logout();
      dispatch(clearLogData());
  }

  return (
    <View style={styles.HeaderStyle}>
      <StatusBar
        backgroundColor={COLORS.themecolor}
        barStyle="light-content"
        translucent={false}
        hidden={false}
      />
       <View style={{flexDirection:'row'}}> 
          {exist ? 
          <TouchableOpacity onPress={()=>Navigation.back()}>
              <Icon 
                name="keyboard-arrow-left"
                type="MaterialIcons"
                style={{color:COLORS.white,marginRight:10}}
              />
          </TouchableOpacity>
          :null} 
          <Text style={styles.TextStyle}>{props.name}</Text>
       </View>
       {exist ? null :
        <TouchableOpacity
          onPress={logOut}>
          <Icon
            name="md-power"
            type="Ionicons"
            style={styles.IconStyle}
          />
        </TouchableOpacity> }
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  HeaderStyle: {
    height: verticalModerateScale(55),
    width: '100%',
    backgroundColor: COLORS.HeaderColor,
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: 15,
  },
  IconStyle: {
    fontSize: 25,
    color: '#fff',
    // marginLeft: 15,
  },
  TextStyle: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
    alignSelf: 'center',
    color: '#fff',
    // marginRight: 20,
  },
});

//make this component available to the app
export default HeaderSubscription;
