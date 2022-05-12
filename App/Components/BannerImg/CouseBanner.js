import { Card } from 'native-base';
import React, { Component } from 'react'
import { StyleSheet, Text, View,Dimensions,Image,FlatList,StatusBar,SafeAreaView,ScrollView, Pressable} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import { COLORS } from '../../Constants/Colors';
import { moderateScale, verticalScale } from '../PixelRatio';
  const {width,height} = Dimensions.get('window');

const images = [
    {
      dataimages: require('../../Assets/person.png'),
      name :"Be a Proffesional Speaker"
    },
    {
        dataimages: require('../../Assets/person.png'),
        name :"Be a Proffesional Speaker"
      },
    // {
    //   dataimages: 'https://static.politico.com/dims4/default/62c7262/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fs3-origin-images.politico.com%2F2012%2F11%2F29%2F111229_obama_romney_white_house_wh_6051.jpg',
    //   name : "Cooking With Shama"
    // },
  ];
const CourseBanner = (props) => {
//   const [isHungry, setIsHungry] = useState(true);

  return (
    // <View style={{flex:1}}>
        <View style={[styles.SliderView]}>
           <Swiper
            ref={ref => {
              swiperRef = ref;
            }}
            dotStyle={{
              backgroundColor: '#fff',
              
            }}
            paginationStyle={{
                //   bottom:800
                bottom:-20,
                // top:50

              }}
            // index = {images.length}
            loop={true}
            activeDotColor="#af4cdb"
            removeClippedSubviews={false}
            // borderRadius={20}
            autoplay={true}
            autoplayTimeout={5}>
        {
            images.map((item, index)  => {
              return (
                <>
                <Image
                  source={item.dataimages}
                  style={styles.ImageStyle}
                  resizeMode="cover"
                  key={index}
                />
                <Pressable style={{flexDirection:'row'}}>
                    <View style={{width:'62%',alignItems:'flex-start'}}>

                    <Text style={styles.textStyle}>{item.name}</Text>
                    </View>
                    <View style={{width:'38%',alignItems:'center',justifyContent:'center'}}>
                    <LinearGradient colors={['#7D43E0', '#EB47EB']} style={styles.ButtonStyleView}>
                        <Text
                            style={{
                            fontFamily: 'Lato-Bold',
                            fontSize: 14,
                            color: '#f4f4f4',
                            }}>
                            Enroll Now
                        </Text>
                {/* </Button> */}
                    </LinearGradient>
                    </View>
                </Pressable>
                
              </>
              );
            })}
          </Swiper>
          {/* <Text style={[styles.textStyle,{fontFamily:'Lato-Light',fontSize:10}]}>S02.Ep12</Text> */}
        </View>
    // </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#000'
  
    },
    SliderView: {
    marginVertical:moderateScale(15),
    height:verticalScale(height/4.5),
    width:width-20,
    padding:2,
    // paddingHorizontal:10,
    // borderWidth:4,
    alignSelf:'center',
    justifyContent:'space-around',
    backgroundColor: COLORS.themecolor,
    borderWidth:3,
    borderRadius:5,
    borderColor:COLORS.boxBorderColor
},
        ImageStyle : {
            height:'82%',
            width:width-25,
            alignSelf:'center',
            // marginTop:10,
            
        },
        textStyle:{
          fontSize:moderateScale(12),
          color:'#fff',
          padding:10,
          fontFamily:'Lato-Bold',
          // marginLeft:23,
          // marginTop:15,
        //   marginVertical:moderateScale(12),
          
      },
      ButtonStyleView: {
        width: '90%',
        height:verticalScale(25),
        backgroundColor: COLORS.button_fix1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
      },
  });

export default CourseBanner;