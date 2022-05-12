import React from 'react';
import { View, Text, ActivityIndicator, Dimensions } from 'react-native';
import { COLORS } from '../../Constants/Colors';

const { width, height} = Dimensions.get('screen');

export default function FullLoader() {
  return (
    <View style={{position:'absolute',width:width, height:height,
    backgroundColor:'#45455c36',zIndex: 9999999,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator 
      // color={COLORS.themecolor}
      color="#7D43E0"
      size="large"
      />
     </View>
  );
}
