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

export default class BottomFeed extends Component {
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
            // position: 'absolute',
            // zIndex:99,
            backgroundColor: '#191926',
            elevation: 50,
            // bottom: 0,
            width: '100%',
            height: 55,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems:'center',
            padding: 5,
        
          }}>

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
             >
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
              >
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
              >
              <Image
                source={require('../../Assets/bottomfeed_one.png')}
                 style={{color:'#7D43E0',}}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Lato-Bold',
                //   marginTop:2,
                  color: '#7D43E0',
                }}>
               V.NET
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              >
              <Image
                source={require('../../Assets/bottomfeed_one.png')}
                // style={{backgroundColor: '#7D43E0'}}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Lato-Bold',
                  marginTop: 3,
                  color: '#7D43E0',
                }}>
               TRAINING
              </Text>
            </TouchableOpacity>
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
