import {Card, Icon} from 'native-base';
import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {COLORS} from '../../Constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Navigation from '../../Service/Navigation';
import { moderateScale } from '../PixelRatio';
const {width} = Dimensions.get('window');

const GenreRow = (props) => {
  // const [isHungry, setIsHungry] = useState(true);

  return (
    <Pressable style={styles.CardView}
    onPress={()=>Navigation.navigate("OttSingleScreen")}
    >
       <Image
        source={{
          uri:
            props.image,
        }}
        style={styles.ImageStyle}
        />
        <View style={{width:'100%',height:'25%',justifyContent:'flex-start',padding: 10,alignItems:'center'}}>
           <Text style={[styles.TextStyle]}>{props.name}</Text>
        </View>
    </Pressable>
  );
}
export default GenreRow;
const styles = StyleSheet.create({
  CardView: {
    height: moderateScale(120),
    width: moderateScale(width/5),
    // marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#191925',
    marginHorizontal:moderateScale(5)
    // backgroundColor:'red',
    // marginTop: 10,
    // borderWidth:3,
    // justifyContent:'space-between'
  },
  ImageStyle: {
    height: '75%',
    width: '100%',
    // alignSelf: 'center',
    borderRadius: 10,
    resizeMode:"cover"
  },
  TextStyle: {
    fontSize: moderateScale(8),
    // marginLeft:5,
    color: '#fff',
    // height:'20%',
    fontFamily:'Lato-Light',
    // marginTop:10
  },
});

