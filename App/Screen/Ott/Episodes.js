import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import OttCard from '../../Components/GlobalStyle/ottcard';
import { moderateScale } from '../../Components/PixelRatio';
import { COLORS } from '../../Constants/Colors';
import Navigation from '../../Service/Navigation';
const {width} = Dimensions.get('window');

const Episodes = props => {
  // const [isHungry, setIsHungry] = useState(true);
  const { item,faith,MovieVisible } = props ;

  // console.log("item", item)
  const gotonext = () =>{
    if (MovieVisible) {
      Navigation.navigate('VideoPlayer',{videoData:item})
    } else {
      props.modal()
    }
  }
  return (
    <TouchableWithoutFeedback onPress={()=> gotonext()}>
     <View style={OttCard.CardView}>
      {item.img && item.img.length > 0 ?
       <FastImage
       source={{
        uri: item.img[0].preview
       }}
       style={OttCard.ImageStyle}
       resizeMode={FastImage.resizeMode.cover}
      /> : <View style={OttCard.ImageStyle}/> }
      <View style={{padding: moderateScale(10)}}>
        <Text style={[OttCard.TextStyle,{color : faith ? COLORS.themecolor : COLORS.white}]} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    </View>
   </TouchableWithoutFeedback> 
  );
};
export default Episodes;
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
