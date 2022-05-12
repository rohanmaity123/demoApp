//import liraries
import React, { Component } from 'react';
import { Icon } from 'native-base';
import { View, Text, StyleSheet, StatusBar, Dimensions, Pressable, TextInput } from 'react-native';
import { COLORS } from '../../Constants/Colors';
import { moderateScale } from '../../Components/PixelRatio';
import Navigation from '../../Service/Navigation';
const { width, height } = Dimensions.get('window');

const HeaderFeed = () => {
    return (
        <View style={styles.headerStyle}>
            <StatusBar backgroundColor={COLORS.themecolor} barStyle="light-content" />

            <View style={{ width: '10%',justifyContent:'center',alignItems:'center' }}>
                <Pressable onPress={() => { Navigation.back() }}>
                    <Icon name="ios-chevron-back-sharp" type="Ionicons"
                        style={styles.IconStyle}
                    />
                </Pressable>
            </View>

            
            <Pressable style={styles.input} >
                <TextInput
                    style={{
                        color: 'white',

                    }}
                    placeholder="James Dentley"
                    placeholderTextColor='#696969'

                />

                <Pressable style={styles.iconview}>
                    <Icon name="cross"
                        type="Entypo"
                        style={{
                    
                            color: 'white', 
                            fontSize: 15

                        }}

                    // onPress={()=>setModal(!show)}
                    />
                </Pressable>
            </Pressable >
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({

    headerStyle:
    {   
        width: width,
        height: 70,
        backgroundColor: COLORS.themecolor,
        flexDirection: 'row',
        alignItems:'center'
        // paddingTop:StatusBar.currentHeight,
        
    },
    IconStyle: {
        fontSize: 25,
        color: 'white',
    },
    iconview: {
        backgroundColor: COLORS.icon_background3,
        borderWidth: 0.5,
       
        borderColor: COLORS.icon_border_color,
        height: moderateScale(26),
        width: moderateScale(26),
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'

    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        height: '65%',
        width: '82%',
        borderWidth: 0.5,
        borderColor:'#565665',
        backgroundColor: '#222232',
        borderRadius: 20,
        paddingHorizontal:10
        // marginHorizontal:15,
        // marginVertical:20
    },
   
});

//make this component available to the app
export default HeaderFeed;
