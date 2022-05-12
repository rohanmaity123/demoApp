//import liraries
import { Icon, Row, } from 'native-base';
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    Pressable,
    TextInput
} from 'react-native'
import { moderateScale } from '../../Components/PixelRatio';
import { COLORS } from '../../Constants/Colors';
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const data = [
    {
        // image: '',
        title: 'James Dentley',
        name: 'search',
        type: 'EvilIcons',
        nametwo: 'cross',
        typetwo: 'Entypo'
    },
    {
        name: 'search',
        type: 'EvilIcons',
        title: 'Inspried 2 speak',
        nametwo: 'cross',
        typetwo: 'Entypo'

    },
    {
        name: 'search',
        type: 'EvilIcons',
        title: 'JD3 Fan Meet',
        nametwo: 'cross',
        typetwo: 'Entypo'

    },
    {
        name: 'search',
        type: 'EvilIcons',
        title: 'JD3 Fan Meet',
        nametwo: 'cross',
        typetwo: 'Entypo'

    }

]

const OttModal = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                {/* <View style={{height:80, backgroundColor:'white',flexDirection:'row',padding:5,alignItems:'center'}}> */}
                <Pressable style={styles.iconview}>
                    <Icon name="left"
                        type="AntDesign"
                        style={{
                            color: COLORS.white,
                         
                        }} />
                </Pressable>

                <Pressable style={styles.label}>
                    <TextInput
                        style={{
                            color:COLORS.white,
                            // borderWidth:0.2,
                            fontFamily: 'Lato-Light',
                            fontSize: moderateScale(12),
                            
                            marginHorizontal: moderateScale(20),
                            width: '30%',
                        }}
                        placeholder="search"
                        placeholderTextColor='white'
                    />
                </Pressable>
                {/* </View> */}
            </View>

            <View style={{
                borderBottomWidth: 2,
                borderBottomColor: '#313141',
                marginHorizontal: moderateScale(19)
            }}>

            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: moderateScale(20),
                paddingVertical: moderateScale(10)
            }}>
                <Text style={styles.text}>Recent</Text>
                <Text style={styles.text}>Clear All</Text>

            </View>

            <View style={{
                flex: 1,
                backgroundColor: '#191926'
            }}>

                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index}
                    contentContainerStyle={{
                        marginHorizontal: moderateScale(12),
                    }}

                    renderItem={(item, index) => {
                        return (
                            <View key={index}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    padding: moderateScale(8),
                                    marginBottom: moderateScale(10),
                                    backgroundColor: COLORS.list_background,
                                    borderRadius:15
                                }}>
                                <View style={{
                                    flexDirection: 'row', flex: 1,
                                }}>
                                    <View style={{
                                        backgroundColor: COLORS.list_background,
                                        borderWidth: 0.5,
                                        borderColor: COLORS.icon_border_color,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        height: moderateScale(34),
                                        width: moderateScale(34),
                                        borderRadius: 17,
                                        alignSelf: 'center'
                                    }}>
                                        <Icon name={item.item.name} type={item.item.type}
                                            style={{
                                                alignSelf: 'center',
                                                fontSize: moderateScale(25),
                                                color: COLORS.white
                                            }}
                                        />
                                    </View>

                                    <View>
                                        <Text style={{

                                            fontSize: moderateScale(12),
                                            textAlign: 'center',
                                            color: COLORS.AddTextColor,
                                            marginTop: moderateScale(10),
                                            marginLeft: moderateScale(14),
                                            fontFamily: 'Lato-Light',
                                            // maxWidth: 122
                                        }}>
                                            {item.item.title}</Text>
                                    </View>
                                </View>

                                <View style={{
                                    backgroundColor: COLORS.icon_background3,
                                    borderWidth: 0.5,
                                    borderColor: COLORS.icon_border_color,
                                    height: moderateScale(34),
                                    width: moderateScale(34),
                                    borderRadius: 17,
                                    justifyContent:'center',
                                    alignItems:'center'
                                    

                                }}>
                                    <Icon name={item.item.nametwo}
                                        type={item.item.typetwo}
                                        style={{
                                           
                                            fontSize: moderateScale(20),
                                            color: COLORS.white

                                        }}
                                    />
                                </View>
                                
                            </View>
                        )
                    }}
                />

            </View>
        </View>)

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: COLORS.themecolor,
    },
    text:
    {
        color: COLORS.AddTextColor,
        fontFamily: 'Lato-Light',
        fontSize: moderateScale(12)

    },
    label: {
        fontSize: moderateScale(20),
        // marginVertical: moderateScale(8),
        borderWidth: 0.1,
        width: '79%',
        height: '80%',
        borderRadius: 30,
        backgroundColor: COLORS.ottfilterHeader,
        alignSelf:'center'
        // marginRight: moderateScale(20)

    },
    iconview:{
        alignSelf:'center',
        marginRight:moderateScale(8)
    }
,
    header: {

        flexDirection: 'row',
        justifyContent: 'center',
        // paddingHorizontal:2,
        width: width,
        height: moderateScale(60),
        marginBottom: moderateScale(6),
        backgroundColor: COLORS.themecolor
    },
});

//make this component available to the app
export default OttModal;
