//import lirariimport { Icon } from 'native-base';
import {Icon} from 'native-base';
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../Constants/Colors';
import Navigation from '../../Service/Navigation';
const {width, height} = Dimensions.get('window');
// import {Picker} from '@react-native-picker/picker';
// create a component
const NotificationHeader = props => {
  const [show, setshow] = useState(false);
  const [Playlist] = useState(false);
  const [DownloadList] = useState(false);
  const [History] = useState(false);
  const [buyPremium] = useState(false);
  return (
    <View style={styles.HeaderView}>
      <View style={{
        height:'100%',
        width:'60%',
        // borderWidth:4,
        alignItems:'center',
        flexDirection:'row'
        }}>
      <Image
        source={require('../../Assets/appname.png')}
        style={styles.ImgStyle}
      />
      <Text style={[styles.TextStyle2]}>{props.name}</Text>
      </View>
      <View
        style={[
          styles.HeaderTwo,
          {
            width: '40%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            // borderWidth:4
          },
        ]}>
        <Pressable
          style={styles.IconView}
          onPress={() => Navigation.navigate('OttSearch')}>
          <Icon name="search" type="Ionicons" style={styles.IconStyle} />
        </Pressable>

        <Pressable style={styles.IconNotificationView}>
          <Icon name="notifications" type="Ionicons" style={styles.IconStyleNotification} />
        </Pressable>

        <View style={styles.IconView}>
          <Pressable onPress={() => setshow(true)}>
            <Icon
              name="message1"
              type="AntDesign"
              style={styles.IconStyle}
            />
          </Pressable>
         
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  HeaderView: {
    // height: hp('10%'),
    width: width,
    height: 70,
    elevation: 3,
    // borderWidth:5,
    // alignSelf:'center',
    // borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.HeaderColor,
    borderBottomWidth: 2,
    borderColor: '#202020',
  },
  HeaderTwo: {
    // height:'100%',
    // width:'60%',
    // borderWidth:1,
    alignItems: 'flex-start',
    // paddingLeft:20,
    justifyContent: 'center',
  },
  IconView: {
    height: 45,
    width: 45,
    // borderWidth:1,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d2c3d',
  },
  IconNotificationView: {
    height: 45,
    width: 45,
    // borderWidth:1,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  IconStyle: {
    fontSize: 20,
    color: COLORS.product_name_text,
    // marginLeft:10
  },
  IconStyleNotification: {
    fontSize: 20,
    color: '#000000',
    // marginLeft:10
  },
  TextStyle: {
    fontSize: 14,
    marginLeft: 20,
    fontFamily: 'Lato-Light',
    color: '#fff',
  },
  TextStyle2: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: 'Lato-Light',
    color: '#fff',
  },
  ImgStyle: {
    height: 40,
    width: width / 5,
    resizeMode: 'contain',
    marginLeft: 20,
  },
  ModalView: {
    height: height / 4.5,
    width: width / 2.5,
    backgroundColor: '#404056',
    // alignSelf:'flex-end',
    // marginRight:10,
    // marginTop:5,
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  PartView: {
    height: '25%',
    width: '100%',
    // borderWidth:3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },
});

//make this component available to the app
export default NotificationHeader;
