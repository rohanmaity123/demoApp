import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Navigation from '../../Service/Navigation';
import { moderateScale } from '../PixelRatio';
const {width} = Dimensions.get('window');

const SquareCard = props => {
  // const [isHungry, setIsHungry] = useState(true);
  const { item } = props ;

  // console.log("item", item)

  return (
    <TouchableWithoutFeedback onPress={()=>Navigation.navigate("OttSingleScreen",{item:item,id:item.id})}>
     <View style={styles.CardView}>
     {item.img && item.img.length > 0 ?
       <FastImage
       source={{
        uri: item.img[0].preview
       }}
       style={styles.ImageStyle}
       resizeMode={FastImage.resizeMode.cover}
      /> : <View style={styles.ImageStyle}/> }
      <View style={{padding: moderateScale(10)}}>
        <Text 
        numberOfLines={2}
        style={styles.TextStyle}>{item.name}</Text>
      </View>
    </View>
   </TouchableWithoutFeedback> 
  );
};
export default SquareCard;
const styles = StyleSheet.create({
  CardView: {
    height: moderateScale(180),
    width: width/3.3,
    marginHorizontal: moderateScale(4),
    borderRadius: 7,
    backgroundColor: '#191925',
  },
  ImageStyle: {
    height: '80%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 7,
    resizeMode: 'cover',
    backgroundColor:'#222232'
  },
  TextStyle: {
    fontSize: moderateScale(8),
    // marginLeft: 5,
    color: '#fff',
    fontFamily: 'Lato-Light',
    // marginTop: 10,
    // alignSelf: 'center',
  },
});
