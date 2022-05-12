//import lirariimport { Icon } from 'native-base';
import { Icon } from 'native-base';
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Pressable, Modal } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../Constants/Colors';
import Navigation from '../../Service/Navigation';
const { width,height } = Dimensions.get('window');
// import {Picker} from '@react-native-picker/picker';
// create a component
const MensShirtHeader = (props) => {
  const [show, setshow] = useState(false);
  return (
    <View style={styles.HeaderView}>
        <View style={{width:'10%'}}>
                <Pressable onPress={()=>{Navigation.back()}}>
            <Icon name="ios-chevron-back-sharp" type="Ionicons" 
            style={styles.IconStyleBack}
            />
            </Pressable>
        </View>
        <Text style={styles.TextStyleHeader}>{props.name}</Text>
    <View style={[styles.HeaderTwo, {
      width: '60%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      // borderWidth:1
    }]}>
      <Pressable
        style={styles.IconView}
        onPress={ ()=>Navigation.navigate('OttSearch')}
      >

        <Icon name="search" type="Ionicons"
          style={styles.IconStyle}

        />

      </Pressable>
      <View style={styles.IconView}>
        <Pressable onPress={()=>setshow(true)}>
        <Icon name="dots-three-horizontal" type="Entypo"
          style={styles.IconStyle}
        />
        </Pressable>
        
      </View>
    </View>
    
  </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  HeaderView: {
    // height: hp('10%'),
    width: width,
    height: 70,
    // borderWidth:5,
    // alignSelf:'center',
    // borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.HeaderColor
  },
  HeaderTwo: {
    // height:'100%',
    // width:'60%',
    // borderWidth:1,
    alignItems: 'flex-start',
    // paddingLeft:20,
    justifyContent: 'center'
  },
  IconStyleBack: {
    fontSize:25,
    color:'#fff',
    marginLeft:15
    
},
  IconView: {
    height: 45,
    width: 45,
    // borderWidth:1,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d2c3d',
    marginHorizontal:10
  },
  IconStyle: {
    fontSize: 16,
    color: '#fff',
    // marginLeft:10

  },
  TextStyle: {
    fontSize: 14,
    marginLeft: 20,
    fontFamily: 'Montserrat-Light',
    color:'#fff'
  },
  TextStyleHeader: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    color:'#fff'
  },
  ImgStyle: {
    height: 40,
    width: width / 5,
    resizeMode: "contain",
    marginLeft: 20
  },
  ModalView:{
    height:height/4.5,
    width:width/2.5,
    backgroundColor:'#404056',
    // alignSelf:'flex-end',
    // marginRight:10,
    // marginTop:5,
    borderRadius:5,
    position:'absolute',
    top:10,
    right:10
  },
  PartView : {
    height:'25%',
    width:'100%',
    // borderWidth:3,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingLeft:15
    
  }
});

//make this component available to the app
export default MensShirtHeader;
