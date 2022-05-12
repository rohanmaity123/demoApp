import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { COLORS } from '../../Constants/Colors';
import Navigation from '../../Service/Navigation';
import OttCard from '../GlobalStyle/ottcard';
import { moderateScale } from '../PixelRatio';
const {width} = Dimensions.get('window');

const SimilarList = props => {
  // const [isHungry, setIsHungry] = useState(true);
  const { item, navigation, faith } = props ;

  // console.log("item", item)

  return (
    <TouchableWithoutFeedback onPress={()=>navigation.replace("OttSingleScreen",{item:item,id:item.id})}>
     <View style={OttCard.CardView}>
      <FastImage
       source={{
        uri: item.img[0].preview
       }}
       style={OttCard.ImageStyle}
       resizeMode={FastImage.resizeMode.cover}
      />
      <View style={{padding: moderateScale(10)}}>
        <Text style={[OttCard.TextStyle,{color : faith ? COLORS.themecolor : COLORS.white}]}>{item.name}</Text>
      </View>
    </View>
   </TouchableWithoutFeedback> 
  );
};
export default SimilarList;
// const styles = StyleSheet.create({
//   CardView: {
//     height: moderateScale(180),
//     width: width/3.3,
//     marginHorizontal: moderateScale(4),
//     borderRadius: 7,
//     backgroundColor: '#191925',
//   },
//   ImageStyle: {
//     height: '80%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 7,
//     resizeMode: 'cover',
//     backgroundColor:'#222232'
//   },
//   TextStyle: {
//     fontSize: moderateScale(8),
//     // marginLeft: 5,
//     color: '#fff',
//     fontFamily: 'Lato-Light',
//     // marginTop: 10,
//     // alignSelf: 'center',
//   },
// });
