import {Row} from 'native-base';
import React, {Component} from 'react';
import {Text, View, Image, Dimensions, StyleSheet} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../Constants/Colors';

import {moderateScale, verticalModerateScale} from '../PixelRatio';
const {width} = Dimensions.get('window');
const data = [
  {
    img: require('../../Assets/tv.png'),
    title: 'Cooking Show with Helen',
    subtitle: '12 sessions',
    subtitletwo: '48 Total Episodes',
  },
  {
    img: require('../../Assets/tv.png'),
    title: 'Cooking Show with Helen',
    subtitle: '12 sessions',
    subtitletwo: '48 Total Episodes',
  },
  {
    img: require('../../Assets/tv.png'),
    title: 'Cooking Show with Helen',
    subtitle: '12 sessions',
    subtitletwo: '48 Total Episodes',
  },
];
const OttTvshows = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={index => index}
        renderItem={({item, index}) => {
          return (
            <>
              <Image source={item.img} style={styles.ImageStyle} />

              <Text style={styles.textDesign}>{item.title}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    marginHorizontal: moderateScale(8),
                    fontSize: moderateScale(12),
                    fontFamily: 'Lato-Light',
                  }}>
                  {item.subtitle}
                </Text>

                <View
                  style={{
                    height: verticalModerateScale(5),
                    width: moderateScale(5),
                    borderRadius: moderateScale(5),
                    backgroundColor: COLORS.white,
                  }}
                />
                <Text style={styles.lowertext}> 48 Total Episodes</Text>
              </View>
            </>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.themecolor,
  },
  ImageStyle: {
    height: verticalModerateScale(192),
    width: width - 20,
    marginLeft: moderateScale(10),
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(8),
  },
  lowertext: {
    color: COLORS.white,
    fontSize: moderateScale(10),
    fontFamily: 'Lato-Light',
  },
  textDesign: {
    color: COLORS.white,
    marginHorizontal: moderateScale(8),
    fontSize: moderateScale(14),
    fontFamily: 'Lato-Light',
  },
});
export default OttTvshows;
