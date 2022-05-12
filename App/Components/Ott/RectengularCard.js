// import React from 'react';
// import {Text, View, Image, StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native';
// import { moderateScale } from '../PixelRatio';
// import Navigation from '@Service/Navigation';
// import FastImage from 'react-native-fast-image';
// import OttCard from '../GlobalStyle/ottcard';
// import { useTheme } from '@react-navigation/native';

// const RectengularCard = props => {

//   const { item, vertical, faith } = props;
//   const { colors, dark } = useTheme()


//   return (
//    <TouchableWithoutFeedback 
//    onPress={()=>Navigation.navigate("OttSingleScreen",{item:item,id:item.id,faith:faith})}>
//     <View style={vertical ? OttCard.VCardView : OttCard.CardView}>
//      {item.img && item.img.length > 0 ?
//        <FastImage
//        source={{
//         uri: item.img[0].preview
//        }}
//        style={vertical ? OttCard.VImageStyle : OttCard.ImageStyle}
//        resizeMode={FastImage.resizeMode.cover}
//       /> : <View style={vertical ? OttCard.VImageStyle : OttCard.ImageStyle}/> }
//       <View style={{padding: moderateScale(10)}}>
//         <Text 
//         numberOfLines={2}
//         style={{...OttCard.TextStyle,color: colors.text}}>{item.name}</Text>
//       </View>
//     </View>
//    </TouchableWithoutFeedback> 
//   );
// };

// export default RectengularCard;


import { useTheme } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageSourcePropType, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Navigation from '../../Service/Navigation';
import ShadowView from '../ShadowView';

// create a component
const RectengularCard = (props) => {
    const { listTitle, listCardHeight, listCardWidth, item,faith } = props;
    const { colors, dark } = useTheme()
    return (
        <View style={styles.container}>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingLeft: 10,
                    height: listCardHeight + 30
                }}
            >
                            <View
                                style={{
                                    height: listCardHeight,
                                    width: listCardWidth,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    marginHorizontal: 8
                                }}
                            >
                                <ShadowView
                                    shadowHeight={listCardHeight}
                                    shadowWidth={listCardWidth - 20}
                                    borderRadius={10}
                                    shadowRadius={10}
                                    shadowColor={dark ? '#8AABFF' : '#000'}
                                    shadowOffset={{
                                        width: 0,
                                        height: dark ? 10 : 15
                                    }}
                                    shadowOpacity={dark ? 0.2 : 0.3}
                                    elevation={10}
                                />
                                <View style={{elevation: 11}}>
                                  <Pressable onPress={()=>Navigation.navigate("OttSingleScreen",{item:item,id:item.id,faith:faith})}>
                                    <FastImage
                                        source={{uri:item.img[0].preview}}
                                        style={{
                                            height: listCardHeight,
                                            width: listCardWidth,
                                            resizeMode: 'cover',
                                            borderRadius: 10
                                        }}
                                    />
                                    </Pressable>
                                </View>

                            </View>
            </ScrollView>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // borderWidth:1
    },
});

//make this component available to the app
export default RectengularCard;