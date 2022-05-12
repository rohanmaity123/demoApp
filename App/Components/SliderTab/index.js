//import liraries
import { Icon } from 'native-base';
import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet,Dimensions, Image, ScrollView } from 'react-native';
import { moderateScale } from '../PixelRatio';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    withSpring
  } from 'react-native-reanimated';
  import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window');
const data = [
    {
        image: require('../../Assets/crown.png'),
        title: 'Vip'
    },

    {
        image: require('../../Assets/vector5.png'),
        title: 'Quiz',
    },
    {
        image: require('../../Assets/Cart.png'),
        title: 'Cart'
    },
    {
        image: require('../../Assets/watchlist.png'),
        title: 'Watchlist'
    },
    {
        image: require('../../Assets/tc.png'),
        title: 'T&C',
    },
]
// create a component
const SliderTab = () => {
    const [status,setStatus] = useState(false)
    // const lengthval = useRef(new Animated.Value(30)).current;
    const Firstwidth = useSharedValue(40);
    const view = useRef();
    
    const style = useAnimatedStyle(() => {
        return {
          width: withTiming(Firstwidth.value, {
            duration: 1000,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          }),
        };
      });

      const bounce = () => {
        view.current.bounceInRight(3000);
    }
    const widthincrese = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        // Animated.timing(lengthval, {
        //   toValue: width,
        //   duration: 3000,
        //   useNativeDriver:false
        // }).start();
        // Firstwidth.value = withSing(width);
        Firstwidth.value = width;
        setStatus(true)
      };
      const widthdecrese = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        // Animated.timing(lengthval, {
        //   toValue: width,
        //   duration: 3000,
        //   useNativeDriver:false
        // }).start();
        // Firstwidth.value = withSpring(width);
        Firstwidth.value = 40;
        setStatus(false)
      };
    return (
        <Animated.View 
            style={[
                styles.container,
                style
            ]}
        >
            { status?
                data.map((item,index)=>{
                    return(
                            <Animatable.View style={{
                            height:undefined,width:40,
                            // backgroundColor:'red',
                            paddingLeft:5
                            }}
                            ref={view}
                            >
                            <Image 
                                source={item.image}
                                style={{height:20,width:20,resizeMode:'contain'}}
                            />
                            <Text style={{
                                color:'#fff',
                                fontSize:12,
                                paddingTop:5
                            }}
                                numberOfLines={1}
                            >
                                {item.title}
                            </Text>
                        </Animatable.View>
                    )
                })
                :
                null
            }
            {
                status?
                <Icon 
                    name="chevron-left"
                    type="Entypo"
                    style={{color:'#fff'}}
                    onPress={()=>{
                        widthdecrese();
                        // bounce()
                    }}
                />
                :
                <Icon 
                    name="chevron-right"
                    type="Entypo"
                    style={{color:'#fff'}}
                    onPress={()=>widthincrese()}
                />
            }
        </Animated.View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height:moderateScale(50),
        // width:moderateScale(30),
        backgroundColor:'#3D3D4B',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
    },
});

//make this component available to the app
export default SliderTab;
