import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import Auth from '../../service/Auth';
import {Icon, Container, View, Button} from 'native-base';

import {COLORS} from '../../constants/color';
import NavigationService from '@Service/Navigation';
import {connect} from 'react-redux';
import {clearLogData} from '../../Redux/Action';
const screenHeight = Math.round(Dimensions.get('window').height);

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      userData: {},
      userType: '',
      Udetails: {},
    };
  }
  SSSSSS;
  componentDidMount = async () => {
    // this.FetchRegisterType();
    await this.UserId();
    // this.getUserType();
  };
  UserId = async () => {
    let result = await Auth.getAccount();
    console.log('object8709', result);
    this.setState({
      Udetails: result,
    });
    console.log('user type666666666666666666666666', this.state.Udetails);
  };
  // async FetchRegisterType() {
  //   let user_type = await Auth.getUserType();
  //   this.setState({
  //     userType: user_type,
  //   });
  //   // console.log('user type666666666666666666666666', user_type);
  // }

  async logout() {
    this.props.dispatch(clearLogData());
    await Auth.logout();
    ToastAndroid.show('Logout Successfully', ToastAndroid.SHORT);

    NavigationService.navigate('Login');
  }
  // Logout = async () => {
  //   await Auth.logout();
  //   Navigation.navigate('Signin')
  // }

  render() {
    return (
      <Container
        style={[styles.container, {backgroundColor: COLORS.themecolor}]}>
        <View style={styles.mainstyle}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                height: 150,
                backgroundColor: COLORS.themecolor,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 40,
                  width: '50%',
                  // borderWidth: 2,
                  marginLeft: 10,
                }}
                onTouchEnd={() => NavigationService.navigate('MyProfile')}>
                <Image
                  source={require('../../assets/Nirimart.png')}
                  resizeMode="contain"
                  style={{
                    width: '100%',
                    height: '100%',
                    // borderRadius: 30,
                    // marginLeft: 1,
                    // marginTop: 1,
                  }}
                />
              </View>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View
                  style={{
                    // marginVertical: 10,
                    marginLeft: 15,
                    width: '80%',
                    marginHorizontal: 2,
                    marginTop: 15,
                  }}>
                  {this.props.userDetails != null ? (
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 17,
                        fontFamily: 'Montserrat-Medium',
                      }}>
                      {this.props.userDetails.name}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 17,
                        fontFamily: 'Montserrat-Medium',
                      }}
                      onPress={() => NavigationService.navigate('Login')}>
                      {' '}
                      Clieck Here For Register
                    </Text>
                  )}
                </View>

              </View>
            </View>

            <View style={styles.menuitem}>
              <TouchableOpacity onPress={() => NavigationService.closeDrawer()}>
                <View
                  style={{
                    width: '70%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  {/* <Icon name="smiley" type="Fontisto" style={{fontSize:20,marginHorizontal:2,color:'#56636b'}}/> */}
                  <Text style={styles.sectionHeadingStyle}>Home</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.menuitem}>
              {/* <Icon style={{ fontSize: 20, color: '#fff' }} name="home" type="AntDesign" /> */}
              <TouchableOpacity
                onPress={() => {
                  NavigationService.navigate('ItemShop');
                }}>
                <View
                  style={{
                    width: '89%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  {/* <Icon name="package-variant" type="MaterialCommunityIcons" style={{fontSize:24,marginHorizontal:2,color:'#56636b'}}/> */}
                  <Text style={styles.sectionHeadingStyle}>
                    Shop by Category
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.menuitem}>
              {/* <Icon style={{ fontSize: 20, color: '#fff' }} name="home" type="AntDesign" /> */}
              {this.props.userDetails != null ? (
                <TouchableOpacity
                  onPress={() => {
                    NavigationService.navigate('OrderHistory');
                  }}>
                  <View
                    style={{
                      width: '82%',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    {/* <Icon name="package-variant" type="MaterialCommunityIcons" style={{fontSize:24,marginHorizontal:2,color:'#56636b'}}/> */}
                    <Text style={styles.sectionHeadingStyle}>Your Orders</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    NavigationService.navigate('Login');
                  }}>
                  <View
                    style={{
                      width: '82%',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    {/* <Icon name="package-variant" type="MaterialCommunityIcons" style={{fontSize:24,marginHorizontal:2,color:'#56636b'}}/> */}
                    <Text style={styles.sectionHeadingStyle}>Your Orders</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.menuitem}>
              {/* <Icon style={{ fontSize: 20, color: '#fff' }} name="home" type="AntDesign" /> */}
              {this.props.userDetails != null ? (
                <TouchableOpacity
                  onPress={() => {
                    NavigationService.navigate('MyAcc');
                  }}>
                  <View
                    style={{
                      width: '85%',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    {/* <Icon name="package-variant" type="MaterialCommunityIcons" style={{fontSize:24,marginHorizontal:2,color:'#56636b'}}/> */}
                    <Text style={styles.sectionHeadingStyle}>Your Account</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    NavigationService.navigate('Login');
                  }}>
                  <View
                    style={{
                      width: '85%',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    {/* <Icon name="package-variant" type="MaterialCommunityIcons" style={{fontSize:24,marginHorizontal:2,color:'#56636b'}}/> */}
                    <Text style={styles.sectionHeadingStyle}>Your Account</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>

            {this.props.userDetails != null ? (
              <View style={styles.menuitem}>
                <TouchableOpacity
                // onPress={() => {
                //   NavigationService.navigate('TermsCondition');
                // }}
                >
                  <View
                    style={{
                      width: '76%',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={styles.sectionHeadingStyle}
                      onPress={() => {
                        this.logout();
                      }}>
                      Sign Out
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : null}

            {/* <View style={styles.menuitem}>
                            <Icon style={{ fontSize: 20, color: '#fff' }} name="home" type="AntDesign" />
                            <TouchableOpacity 
                                // onPress={() => this.logout()}
                            >
                            <View style={{width:'76%',justifyContent:'center',flexDirection:'row'}}>
                            <Icon name="logout" type="SimpleLineIcons" style={{fontSize:20,color:'#56636b',marginHorizontal:5}}/>
                                <Text style={styles.sectionHeadingStyle}>
                                    Logout
                                </Text>
                            </View>
                            </TouchableOpacity>
                            
                            </View> */}
          </ScrollView>
          {/* <View style={{bottom:10,width:'100%'}}>
                        <Text style={{textAlign:'center',fontWeight:'700'}}>Copyright © 2020 Mandarin</Text>
                    </View> */}
        </View>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state.User.userDetails', state.User.userDetails);
  return {
    userDetails: state.User.userDetails,
    // Logindata: state.User.LogData,
  };
};
export default connect(mapStateToProps)(Drawer);
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  sectionHeadingStyle: {
    marginLeft: 5,
    fontSize: 16,
    color: '#505050',
    fontFamily: 'Lato-Bold',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // backgroundColor:'#00adb4',
    marginVertical: 1,
    marginLeft: 10,
    marginTop: 10,
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey',
  },
  navItemStyle: {},
  mainstyle: {
    // flex: 1,
    backgroundColor: COLORS.white,
    height: screenHeight,
  },
  menuitem: {
    height: 45,
    width: '95%',
    alignSelf: 'center',
    // marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  footerbutton: {
    backgroundColor: '#fff',
    height: 100,
    // flex:2,
    // marginTop:20,
    // marginHorizontal:20,
    alignItems: 'center',
    borderTopWidth: 0.25,
    borderTopColor: '#fff',
    // marginBottom:0
  },
  button: {
    marginLeft: 10,
    width: 210,
    backgroundColor: '#e91e63',
    alignSelf: 'center',
  },
});