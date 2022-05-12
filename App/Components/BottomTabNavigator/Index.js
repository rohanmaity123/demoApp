import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import Navigation from '../../Service/Navigation';


export default class BottomNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Home: true,
      TakeOver: false,
      Chat: false,
      MyProfile: false,
      toggle: true,
      shop: [],
      baseUrl: '',
    };
  }
  toggleOpen = () => {};

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          // backgroundColor: '#2BAE66FF'
        }}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#191926',
            elevation: 15,
            border: 2,
            radius: 3,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            x: 0,
            y: 0,
            style: {marginVertical: 5},
            bottom: 0,
            width: '100%',
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            // paddingHorizontal: 25
          }}>
          <View
            style={{
              width: width / 5,
              alignItems: 'center',
              justifyContent: 'center',
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
          </View>

          <View
            style={{
              width: width / 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
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
          </View>

          <View
            style={{
              width: width / 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => Navigation.navigate('Chatting')}>
              <Image
                source={require('../../Assets/BottomTab/Events.png')}
                // style={{backgroundColor: '#7D43E0'}}
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
          </View>

          <View
            style={{
              width: width / 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => Navigation.navigate('HomeQuize')}>
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
          </View>

          <View
            style={{
              width: width / 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => Navigation.navigate('HomeQuize')}>
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
          </View>
        </View>
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
  },
  
});