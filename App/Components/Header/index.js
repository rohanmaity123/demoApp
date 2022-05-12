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
  StatusBar,
  Platform,
} from 'react-native';
import {COLORS} from '../../Constants/Colors';
import Navigation from '../../Service/Navigation';
import CartCount from '../Cart/CartCount';
import {moderateScale} from '../PixelRatio';
const {width, height} = Dimensions.get('window');
// import {Picker} from '@react-native-picker/picker';
// create a component
const Header = props => {
  const [show, setshow] = useState(false);
  const [Playlist] = useState(false);
  const [DownloadList] = useState(false);
  const [History] = useState(false);
  const [buyPremium] = useState(false);

  const goTo = value => {
    setshow(false);
    Navigation.navigate(value);
  };

  return (
    <View style={styles.HeaderView}>
      <StatusBar
        backgroundColor={COLORS.statusbar}
        translucent={false}
        hidden={false}
        barStyle="light-content"
      />
      <View
        style={{
          height: '100%',
          width: '45%',
          // borderWidth:4,
          paddingLeft: props.back ? 0 :15,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {props.back && Platform.OS == "ios"?
        <Icon 
         name="keyboard-arrow-left"
         type="MaterialIcons"
         onPress={()=>Navigation.back()}
         style={{color:COLORS.white,fontSize:moderateScale(35),marginRight:5}}
         />
        : null }
        <Image
          source={require('../../Assets/logo.png')}
          style={styles.ImgStyle}
        />
        <Text style={[styles.TextStyle2]}>{props.name}</Text>
      </View>
      {props.name != 'more' ? (
        <View
          style={[
            styles.HeaderTwo,
            {
              width: '55%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              paddingHorizontal:7,
              // backgroundColor:'red'
            },
          ]}>

          <Pressable
            style={styles.IconView}
            onPress={() => Navigation.navigate('OttSearch')}
            >
            <Icon name="search" type="Ionicons" style={styles.IconStyle} />
          </Pressable>

          <Pressable
            style={styles.IconView}
            onPress={() => Navigation.navigate('Cart')}
            >
            <Icon name="cart" type="Ionicons" style={styles.IconStyle} />
            <CartCount />
          </Pressable>

          <Pressable
            style={styles.IconView}
            onPress={() => Navigation.navigate('Wishlist')}
            >
            <Icon name="heart" type="Ionicons" style={styles.IconStyle} />
          </Pressable>

          <Pressable
            style={styles.IconView}
            onPress={() => Navigation.navigate('Notification')}>
            <Icon
              name="notifications"
              type="Ionicons"
              style={styles.IconStyle}
            />
          </Pressable>

          {/* <View style={styles.IconView}> */}
          {/* <Pressable style={[styles.IconView]} 
          onPress={() => setshow(true)}>
            <Icon
              name="dots-three-horizontal"
              type="Entypo"
              style={styles.IconStyle}
            />
          </Pressable> */}

          {/* </View> */}
        </View>
      ) : (
        <View
          style={[
            styles.HeaderTwo,
            {
              width: '55%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              paddingHorizontal:7
            },
          ]}>
          <Pressable
            style={[styles.IconView, {marginHorizontal: moderateScale(15)}]}
            onPress={() => Navigation.navigate('OttSearch')}
          >
            <Icon name="search" type="Ionicons" style={styles.IconStyle} />
          </Pressable>


          <Pressable
            style={styles.IconView}
            onPress={() => Navigation.navigate('Cart')}
            >
            <Icon name="cart" type="Ionicons" style={styles.IconStyle} />
            <CartCount />
          </Pressable>

          <Pressable
            style={styles.IconView}
            onPress={() => Navigation.navigate('Wishlist')}
            >
            <Icon name="heart" type="Ionicons" style={styles.IconStyle} />
          </Pressable>

          <Pressable
            style={[styles.IconView, {marginHorizontal: moderateScale(10)}]}
            onPress={() => Navigation.navigate('Notification')}>
            <Icon
              name="notifications"
              type="Ionicons"
              style={styles.IconStyle}
            />
          </Pressable>

          {/* <View style={styles.IconView}> */}
          {/* <Pressable  style={[styles.IconView]} onPress={() => setshow(true)}>
              <Icon
                name="dots-three-horizontal"
                type="Entypo"
                style={styles.IconStyle}
              />
            </Pressable> */}

          {/* </View> */}
        </View>
      )}

      <Modal transparent={true} visible={show}>
        <Pressable
          style={{flex: 1}}
          onPress={() => {
            // Navigation.navigate('LeaderBoard');
            setshow(false);
          }}>
          <View style={styles.ModalView}>
            {/* <View style={styles.PartView}>
              <Icon
                name="hearto"
                type="AntDesign"
                style={[
                  styles.IconStyle,
                  {
                    fontSize: moderateScale(18),
                  },
                ]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                Playlist
              </Text>
            </View> */}
            {/* 
            <Pressable
              style={styles.PartView}
              onPress={() => goTo('DownloadList')}>
              <Icon
                name="download"
                type="Feather"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                Download List
              </Text>
            </Pressable> */}

            {/* <Pressable style={styles.PartView} onPress={() => goTo('History')}>
              <Icon
                name="history"
                type="FontAwesome5"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                History
              </Text>
            </Pressable> */}

            <Pressable
              style={styles.PartView}
              onPress={() => {
                goTo('OrderHistory');
              }}>
              <Icon
                name="history"
                type="FontAwesome5"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                Order History
              </Text>
            </Pressable>

            {/* <Pressable
              style={styles.PartView}
              onPress={() => Navigation.navigate('AllPage')}>
              <Icon
                name="crown"
                type="MaterialCommunityIcons"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                Buy Premium
              </Text>
            </Pressable> */}

            {/* <Pressable
              style={styles.PartView}
              onPress={() => goTo('MeetingHome')}>
              <Icon
                name="crown"
                type="MaterialCommunityIcons"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                Meeting
              </Text>
            </Pressable> */}
            {/* <Pressable
              style={styles.PartView}
              onPress={() => {
                goTo('EventHome');
                // setshow(false);
              }}>
              <Icon
                name="crown"
                type="MaterialCommunityIcons"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                Virtual Event
              </Text>
            </Pressable> */}

            {/* <Pressable
              style={styles.PartView}
              onPress={() => {
                goTo('MeetingDetails');
                // setshow(false);
              }}>
              <Icon
                name="crown"
                type="MaterialCommunityIcons"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                MeetingDetails
              </Text>
            </Pressable> */}

            {/* <Pressable
              style={styles.PartView}
              onPress={() => {
                goTo('EventPayment');
                // setshow(false);
              }}>
              <Icon
                name="crown"
                type="MaterialCommunityIcons"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                EventPayment
              </Text>
            </Pressable> */}

            {/* <Pressable
              style={styles.PartView}
              onPress={() => {
                goTo('Eventinfo');
                // setshow(false);
              }}>
              <Icon
                name="crown"
                type="MaterialCommunityIcons"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                Info
              </Text>
            </Pressable> */}

            {/* <Pressable
              style={styles.PartView}
              onPress={() => {
                // setshow(false);
                goTo('CourseHome');
                // setshow(false);
              }}>
              <Icon
                name="crown"
                type="MaterialCommunityIcons"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                Course
              </Text>
            </Pressable> */}

            <Pressable
              style={styles.PartView}
              onPress={() => {
                goTo('MyProfile');
                // setshow(false);
              }}>
              <Icon
                name="crown"
                type="MaterialCommunityIcons"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
              Profile
              </Text>
            </Pressable>

            {/* <Pressable
              style={styles.PartView}
              onPress={() => {
                goTo('ScrathCard');
                // setshow(false);
              }}>
              <Icon
                name="crown"
                type="MaterialCommunityIcons"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
                Scrath Card
              </Text>
            </Pressable> */}
            {/* <Pressable
              style={styles.PartView}
              onPress={() => {
                goTo('Winnings');
                // setshow(false);
              }}>
              <Icon
                name="crown"
                type="MaterialCommunityIcons"
                style={[styles.IconStyle, {fontSize: moderateScale(18)}]}
              />
              <Text style={[styles.TextStyle, {fontSize: moderateScale(11)}]}>
               Winnings
              </Text>
            </Pressable> */}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  HeaderView: {
    // height: hp('10%'),
    width: width,
    height: moderateScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.HeaderColor,
    opacity: 10,
    // borderBottomWidth: 1,,
    elevation: 0,
    // borderBottomColor: '#3B3B4D',
    marginBottom: moderateScale(5),
  },
  HeaderTwo: {
    alignItems: 'flex-start',
    // paddingLeft:20,
    justifyContent: 'center',
  },
  IconView: {
    height: moderateScale(30),
    width: moderateScale(30),
    // borderWidth:1,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d2c3d',
  },
  IconStyle: {
    fontSize: 16,
    color: '#fff',
    // marginLeft:10
  },
  TextStyle: {
    fontSize: moderateScale(14),
    marginLeft: 15,
    fontFamily: 'Lato-Light',
    color: '#fff',
  },
  TextStyle2: {
    fontSize: moderateScale(15),
    marginLeft: 10,
    fontFamily: 'Lato-Bold',
    color: '#fff',
  },
  ImgStyle: {
    // height: 21,
    // width: 91,
    resizeMode: 'contain',
    // marginLeft: 20,
  },
  ModalView: {
    // width: width,
    backgroundColor: '#404056',
    borderRadius: 5,
    position: 'absolute',
    top: Platform.OS == "ios"? moderateScale(75) :  moderateScale(10),
    right: moderateScale(10),
    padding: 8,
  },
  PartView: {
    // height: '9%',
    width: '100%',
    // borderWidth:3,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    paddingHorizontal: 7,
    // paddingLeft: 15,
    marginVertical: moderateScale(5),
  },
});

//make this component available to the app
export default Header;
