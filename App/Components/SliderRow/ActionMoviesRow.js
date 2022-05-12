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
const {width} = Dimensions.get('window');

const ActionScreen = (props) => {
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
        <Text style={[styles.TextStyle]}>Action Movies</Text>
    </Pressable>
  );
}
export default ActionScreen;
const styles = StyleSheet.create({
  CardView: {
    height: 180,
    width: width/3.5,
    backgroundColor: '#fff',
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#191925',
    marginTop: 10,
    // borderWidth:3,
    justifyContent:'space-between'
  },
  ImageStyle: {
    height: '88%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    resizeMode:"cover"
  },
  IconStyle: {
    fontSize: 20,
    color: '#fff',
  },
  TextStyle: {
    fontSize: 10,
    marginLeft:5,
    color: '#fff',
    fontFamily:'Lato-Light',
    marginTop:10
  },
});

