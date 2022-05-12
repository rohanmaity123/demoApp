import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Alert,
  Dimensions,
} from 'react-native';
import {Icon, Card} from 'native-base';

import Navigation from '../../Service/Navigation';
import {COLORS} from '../../Constants/Colors';
const {height, width} = Dimensions.get('window');
const halfWidth = (width - 104) / 2;

export default class BottomNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Home: true,
      Feed:false,
      Events:false,
      Shop:false,
      More:false,
      toggle: true,
    };
  }
  toggleOpen = () => {};

  render() {
    return (
        <View
          style={{
            backgroundColor: '#191926',
            elevation: 50,
            width: '100%',
            height: 55,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems:'center',
            padding: 5,
          }}
        >

            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => Navigation.navigate('Home')}>
              <Image
                source={require('../../Assets/BottomTab/Tv.png')}
                //   style={{backgroundColor: '#7D43E0'}}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Lato-Bold',
                  marginTop: 3,
                  color: '#7D43E0',
                }}>
                Tv
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => Navigation.navigate('Feed')}>
              <Image
                source={require('../../Assets/BottomTab/Feed.png')}
                // style={{backgroundColor: '#7D43E0'}}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Lato-Bold',
                  marginTop: 3,
                  color: '#7D43E0',
                }}>
                Feed
              </Text>
            </TouchableOpacity>

 
          

            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => Navigation.navigate('VirtualMeeting')}>
              <Icon name="videocamera" type="AntDesign" 
              style={{fontSize:18,color:'#7D43E0'}}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Lato-Bold',
                  marginTop: 3,
                  color: '#7D43E0',
                }}>
                Events
              </Text>
            </TouchableOpacity>
   
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => Navigation.navigate('EcommerceHome')}>
              <Image
                source={require('../../Assets/BottomTab/Shop.png')}
                // style={{backgroundColor: '#7D43E0'}}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Lato-Bold',
                  marginTop: 3,
                  color: '#7D43E0',
                }}>
                Shop
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => Navigation.navigate('More')}>
              <Image
                source={require('../../Assets/BottomTab/More.png')}
                // style={{backgroundColor: '#7D43E0'}}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Lato-Bold',
                  marginTop: 3,
                  color: '#7D43E0',
                }}>
                More
              </Text>
            </TouchableOpacity>
    
          {/* <View style={{
                            width:halfWidth, alignItems: 'center',justifyContent:'flex-end',

                        }}>
                            <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}
             onPress={() => Navigation.navigate('Messege')}> 
            <Icon name='message' type='Entypo' style={{fontSize:25,marginTop:7 ,color:'#225272',marginLeft:20}}/>
            <Text style={{fontSize:10,fontFamily:'Lato-Bold',marginTop:3,marginLeft:20}}>Messege</Text>
            </TouchableOpacity>
                           

                        </View> */}

          {/* </View> */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2BAE66FF',
    shadowOpacity: 0.1,
    shadowOffset: {x: 2, y: 0},
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
    // elevation:8
  },
  // actionBtn: {

  //     backgroundColor: 'black',
  //     textShadowOffset: { width: 5, height: 5 },
  //     textShadowRadius: 10,

  // }
});
