//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  Dimensions,
  Pressable,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import {moderateScale, verticalScale} from '../../Components/PixelRatio';
import {Icon, Card} from 'native-base';
import {COLORS} from '../../Constants/Colors';

import {Global_Style} from '../../Constants/GlobalStyle';
import Navigation from '../../Service/Navigation';
import {Font} from '../../Constants/FontFamily';
import {useDispatch} from 'react-redux';
import {saveUserData} from '../../Store/action';
import Auth from '../../Service/Auth';
import Toast from 'react-native-simple-toast';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {height, width} = Dimensions.get('window');

// create a component
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [loader, setLoader] = React.useState(false);
  const [token, setToken] = React.useState('');
  const [hidePass, sethidePass] = useState(true);

  const Fldvalid = txt => txt && txt.replace(/\s/g, '').length;

  const userLogin = async () => {

    setLoader(true);
    let pattern =
    /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,20}[\.][a-z]{2,5}/g;
  let emailresult = pattern.test(email);
  if (
    Fldvalid(pass) === 0 ||
    pass == '' ||
    Fldvalid(email) === 0 ||
    email == '' 
  ) {
    Toast.show('Please Fill Out All Field', Toast.SHORT);
    return;
  } else if (emailresult !== true) {
    Toast.show('Invalid Email Id', Toast.SHORT);
    return;
  } else if (pass.length < 8) {
    Toast.show('Password should be Min. 8 Character', Toast.SHORT);
    return;
  }
    let data = {
      email: email,
      password: pass,
    };
      await Auth.setAccount(data);
      Toast.showWithGravity('Login Successfully!', Toast.SHORT, Toast.BOTTOM);
      dispatch(saveUserData(data));
      setLoader(false)
  };
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
        translucent={false}
      />
      {/* <BackHeader commonBack={true}/> */}
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoImgView}>
          <Image
            source={{uri:'https://www.bigcommerce.com/blog/wp-content/uploads/2018/06/inspirational-business-quotes-believe-to-see-750x750.jpg'}}
            style={styles.logoImg}
          />
        </View>
        <Text
          style={{
            ...styles.boldtext,
            marginTop: moderateScale(10),
            color: COLORS.deepDark,
          }}>
          Welcome, {'\n'}
          Please Sign in.
        </Text>

        {/* <Text
          style={{
            ...styles.text,
            marginTop: moderateScale(20),
            marginHorizontal: moderateScale(15),
          }}>
          Sign in to your account
        </Text> */}

        <Card style={styles.cardview}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            placeholderTextColor={COLORS.gray33}
            onChangeText={value => setEmail(value)}
            value={email}
          />
          <View style={styles.border} />
          <View
            style={{
              ...styles.input,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
            style={{color:COLORS.black}}
              placeholderTextColor={COLORS.gray33}
              onChangeText={value => setPass(value)}
              value={pass}
              secureTextEntry={hidePass}
              placeholder="Enter Your Password"
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Pressable onPress={() => sethidePass(!hidePass)}>
                <Icon
                  name={hidePass ? 'eye-with-line' : 'eye'}
                  type="Entypo"
                  style={styles.iconStyle}
                />
              </Pressable>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: COLORS.PrimaryOrange,
                  fontFamily: Font.Bold,
                }}>
                {/* Forgot? */}
              </Text>
            </View>
          </View>
        </Card>
        <Pressable
          onPress={userLogin}
          style={{
            ...Global_Style.button,
            backgroundColor: COLORS.primaryYellow,
            height: verticalScale(42),
            width: '90%',
            marginTop: moderateScale(20),
            borderRadius: 30,
          }}>
          {loader ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.signText}>SIGN IN</Text>
          )}
        </Pressable>
        {/* <View style={styles.twobtn}>
          <View style={styles.socialView}>
            <Image
              source={require('../../Assets/NewAuth/gmail.png')}
              style={{...styles.img,height:verticalScale(23),width:moderateScale(27),
                resizeMode:'contain'}}
            />
            <Text style={{color: COLORS.deepDark}}>Google</Text>
          </View>
          <View style={styles.socialView}>
            <Image
              source={require('../../Assets/NewAuth/fb.png')}
              style={{...styles.img,height:verticalScale(27),width:moderateScale(29),
              resizeMode:'contain'}}
            />
           
          </View>
          <View style={styles.socialView}>
            <Image
              source={require('../../Assets/NewAuth/apple.png')}
              style={{...styles.img,height:verticalScale(25),width:moderateScale(27),
                resizeMode:'contain'}}
            />
           
          </View>
        </View> */}

        {/* <View style={styles.policyView}>
            <Text style={styles.lightText}>Privacy Policy</Text>
            <Text style={styles.lightText}>Terms & Condition</Text>
        </View> */}
      </KeyboardAwareScrollView>
      <View style={styles.bottom}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>Don’t have an account?</Text>
          <Pressable >
            <Text
              style={{
                ...styles.text,
                color: COLORS.primaryYellow,
                fontFamily: Font.Bold,
              }}>
              Sign Up
            </Text>
          </Pressable>
        </View>
        <View style={styles.smallline} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  boldtext: {
    fontSize: moderateScale(18),
    color: COLORS.dark11,
    fontFamily: Font.Bold,
    marginHorizontal: moderateScale(15),
  },
  iconStyle:{
    fontSize:moderateScale(18),
    alignSelf:'center',
    color:COLORS.primaryYellow,
    paddingRight:moderateScale(10)
  },
  text: {
    color: COLORS.gray2,
    fontFamily: Font.Regular,
    fontSize: moderateScale(12),
  },
  input: {
    height: 60,
    marginHorizontal: moderateScale(10),
    color:COLORS.black
  },
  cardview: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(25),
    borderRadius: moderateScale(8),
  },
  border: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.gray33,
    opacity: 0.6,
  },
  bottom: {
    width: '100%',
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(15),
    borderTopWidth: 0.6,
    borderTopColor: COLORS.border,
  },
  smallline: {
    borderWidth: 2,
    borderRadius: moderateScale(10),
    width: '30%',
    alignSelf: 'center',
    marginTop: moderateScale(25),
    borderColor: COLORS.gray1,
    opacity: 0.6,
  },
  twobtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '78%',
    alignSelf: 'center',
    marginTop: moderateScale(25),
    marginBottom: moderateScale(40),
  },
  img: {
    resizeMode: 'center',
  },

  signText: {
    fontSize: moderateScale(12),
    fontFamily: Font.Bold,
    color: COLORS.white,
  },

  logoImgView: {
    paddingHorizontal: moderateScale(16),
    alignSelf: 'center',
   resizeMode:'contain'

  },

  logoImg: {
    height: verticalScale(200),
    width: width,
    resizeMode:'cover',
    marginBottom: moderateScale(20),
  },

  socialView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: moderateScale(66),
    justifyContent: 'center',
    paddingVertical: moderateScale(8),
    borderRadius: 30,
    backgroundColor: '#F8F8F8',
  },

  policyView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(20),
  },

  lightText: {
    fontSize: moderateScale(12),
    fontFamily: Font.Medium,
    color: COLORS.dark11,
  },
});

//make this component available to the app
export default Login;
