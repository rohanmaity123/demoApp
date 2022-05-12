//import liraries
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, Pressable,TextInput, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../Constants/Colors';
import Navigation from '../../Service/Navigation';
const {width,height} = Dimensions.get('window');
// create a component
const SearchHeader = (props) => {
    return (
        <View style={styles.HeaderStyle}>
            <StatusBar backgroundColor={COLORS.themecolor} barStyle="light-content"/>
            <View style={{width:'10%'}}>
                <Pressable onPress={()=>{Navigation.back()}}>
            <Icon name="ios-chevron-back-sharp" type="Ionicons" 
            style={styles.IconStyle}
            />
            </Pressable>
            </View>
            <View style={{width:'75%',justifyContent:'center',alignSelf:'center'}}>
                <LinearGradient colors={['#404056', '#222232']} 
                    style={styles.searchBar}>
                    <View style={{width:'80%'}}>
                    <TextInput 
                        placeholder="Nike Air Maxl"
                        style={{ marginLeft: 10}}
                        placeholderTextColor={COLORS.normal_text_color}
                    />
                    </View>
                    <Icon name="cross" type="Entypo" 
                    style={{
                        color:COLORS.product_name_text,alignSelf:'center',fontSize:22}}/>
                </LinearGradient>
            {/* <Text style={styles.TextStyle}>{props.name}</Text> */}
            </View>
            <View style={{width:'15%'}}>
                <Pressable onPress={()=>{Navigation.back()}}>
                <Icon name="microphone" type="SimpleLineIcons" 
                style={styles.IconMicrophone}
                />
            </Pressable>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    HeaderStyle: {
        height:70,
        width:width,
        backgroundColor:COLORS.themecolor,
        elevation:3,
        alignItems:'center',
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:COLORS.boxBorderColor
    },
    IconStyle: {
        fontSize:25,
        color:'#fff',
        marginLeft:15
        
    },
    IconMicrophone: {
        fontSize:20,
        color:COLORS.product_name_text,
        // marginLeft:15,
        alignSelf:'center'
        
    },
    TextStyle : {
        fontSize:16,
        fontFamily:'Lato-Bold',
        alignSelf:'center',
        color:'#fff',
        marginRight:20
    },
    searchBar: {
        backgroundColor: COLORS.themecolor,
        width: '100%',
        // borderRadius: 20,
        height: 40,
        justifyContent: 'center',
        marginLeft: 5,
        borderWidth:1,
       borderRadius:30,
        borderColor:COLORS.boxBorderColor,
        flexDirection:'row'
    },
});

//make this component available to the app
export default SearchHeader;
