
import React from 'react';
import { Dimensions, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { PushNotificationScheduledLocalObject } from 'react-native-push-notification';
// import FastImage from 'react-native-fast-image';
import { COLORS } from '../../Constants/Colors';
import { Font } from '../../Constants/FontFamily';
import { moderateScale } from '../../PixelRatio';
import Navigation from '../../Service/Navigation';
import { verticalScale } from '../PixelRatio';

const { width, height } = Dimensions.get('window');

function ProductCard(props) {

  const { data } = props;

  return (
    <Pressable
      style={{
        ...styles.card,
        backgroundColor: COLORS.white,
        marginRight: props.Horizontal ? moderateScale(20) : null
      }}
      >
      <FastImage
        source={{
          uri:
            data.image
              ? data.image
              : 'http://anokha.world/images/not-found.png',
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.img}
      />
      <View style={{ height: moderateScale(60) }}>

        <Text
          style={[styles.productName, { color: COLORS.black}]}
          numberOfLines={2}>
          {data.title}
        </Text>
        <Text
          style={[styles.productName, { color: COLORS.gray,fontSize:10}]}
          numberOfLines={3}>
          {data.description}
        </Text>
        <Text
          style={[styles.price, { color: COLORS.primaryYellow }]}>
          $ {data.price}
        </Text>

      </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  card: {
    padding: moderateScale(8),
    borderRadius: moderateScale(6),
    width: (width / 2) - 15,
    height: verticalScale(280),
    marginVertical: moderateScale(5),
    borderWidth: 1,
    borderColor: COLORS.bordercolor,
    elevation:5
  },
  productName: {
    fontSize: moderateScale(12),
    color: COLORS.dark11,
    marginTop: moderateScale(3),
    fontFamily: Font.Medium,
  },
  price: {
    fontFamily: Font.Medium,
    fontSize: moderateScale(13),
    marginTop: moderateScale(6),
    color: COLORS.dark11,
  },
  img: {
    height: '70%',
    width: (width / 2) - 32,
    backgroundColor: 'lightgrey',
    // resizeMode: 'cover',
    borderRadius: moderateScale(6),
  }
});

export default ProductCard