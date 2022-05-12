import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Pressable,
  Text,
  FlatList,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {COLORS} from '../../Constants/Colors';
import {moderateScale, verticalModerateScale} from '../PixelRatio';
import {connect, useSelector} from 'react-redux';
import BannerLoader from '../ShimmerLoader/Banner';
import Navigation from '../../Service/Navigation';
import Carousel from 'react-native-snap-carousel';
import ShadowView from '../ShadowView';
import { useTheme } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const Banner = props => {
  const allBanner = useSelector(state => state.Banner.allBanner);
  const [activeBanner, setactiveItem] = useState(1)
  const { colors, dark } = useTheme();
  const shimmerData = [
    {
      data: [1, 2, 3],
    },
    {
      data: [1, 2, 3],
    },
    {
      data: [1, 2, 3],
    },
  ];
  return (
    <>
    {allBanner && allBanner.length>0?
    <Carousel
    data={allBanner}
    renderItem={({ item, index }) => {
        return (
            <View
                key={index}
                style={{
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        width: (width-60) - 20,
                        height: 180,
                        alignItems: 'center',
                        justifyContent: 'center',
                        // borderWidth: 1
                    }}
                >
                    {
                        activeBanner == index ?
                            <ShadowView
                                shadowHeight={180}
                                shadowWidth={(width-60) - 50}
                                // shadowColor={dark ? '#8AABFF' : '#000'}
                                shadowOffset={{
                                    width: 0,
                                    height: dark ? 10 : 15
                                }}
                                shadowOpacity={dark ? 0.2 : 0.3}
                                shadowRadius={dark ? 20 : 10}
                                borderRadius={10}
                                elevation={20}
                            />
                            :
                            null
                    }

                    <View style={{elevation: 21}}>
                    <Image
                        source={{uri: item.image}}
                        style={{
                            height: activeBanner == index ? 180 : 150,
                            marginVertical: activeBanner == index ? 0 : 15,
                            width: (width-60) - 20,
                            borderRadius: 10
                        }}
                        resizeMode='cover'
                    />
                    </View>
                    

                    <View
                        style={{
                            position:'absolute',
                            bottom: 10,
                            left: 10,
                            width: '60%'
                        }}
                    >
                        <Text
                            style={{
                              textTransform: 'uppercase',
                              color: '#fff' ,
                              fontSize: 16,
                              fontWeight: 'bold'
                            }}
                        >{item.title}</Text>
                    </View>
                </View>

            </View>
        )
    }}
    sliderWidth={width}
    // sliderHeight={180}
    inactiveSlideScale={1}
    itemWidth={width-60}
    firstItem={activeBanner}
    onSnapToItem={(ind) => setactiveItem(ind)}
/>
:<BannerLoader />
}
</>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SliderView: {
    height: verticalModerateScale(200),
    width: width,
  },
  ImageStyle: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
    // marginTop:10,
    borderRadius:8
  },
  textStyle: {
    fontSize: moderateScale(12),
    color: '#fff',
    fontFamily: 'Lato-Bold',
    margin: moderateScale(10),
  },
});
