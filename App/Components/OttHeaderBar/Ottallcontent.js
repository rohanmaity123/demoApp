//import liraries
import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
} from 'react-native';
import { COLORS } from '../../Constants/Colors'
import { moderateScale } from '../../Components/PixelRatio';
import TvShowsRow from '../Ott/RectengularCard';
import FirstRowCard from '../Ott/SquareCard';
import { Content } from 'native-base';
// const data = [
//     {
//         image: require('../../Assets/tv.png'),
//         name: 'Cooking Shows',
//         smalltext: 'S04.505'
//     },
//     {
//         image: require('../../Assets/ottallcontent.png'),
//         name: 'Race Shows',
//         smalltext: 'S04.505'
//     },
// ]
const data = [
    {
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQMQI1BUNXk2BEATUSUPGK4R4kBf8LoizMNbx83zmw6owR1P0xMw_QKKRQdM2TORZ8Z0&usqp=CAU',
    },
    {
        image:
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87610d76-a040-4deb-9a76-b9590ac73fb9/dc5uxbr-5983756a-2bb1-4062-9554-32b51a2e69b5.jpg/v1/fill/w_1600,h_2372,q_75,strp/captain_marvel_movie_poster_by_marcellsalek_26_dc5uxbr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yMzcyIiwicGF0aCI6IlwvZlwvODc2MTBkNzYtYTA0MC00ZGViLTlhNzYtYjk1OTBhYzczZmI5XC9kYzV1eGJyLTU5ODM3NTZhLTJiYjEtNDA2Mi05NTU0LTMyYjUxYTJlNjliNS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DIzRKP47iBPKrOV3JZ3nIBG26iiJOUQX5qOU6P2qTKk',
    },
    {
        image:
            'https://qqcdnpictest.mxplay.com/pic/66304626cb450bdec0d067da280e62e0/en/2x3/320x480/6acea7b16288e679ec4b4e166de46e42_1280x1920.webp',
    },
    {
        image:
            'https://m.media-amazon.com/images/M/MV5BMjA2MzUxMTM3M15BMl5BanBnXkFtZTgwMzA2NzkxMDE@._V1_UY1200_CR89,0,630,1200_AL_.jpg',
    },
];
const dataone = [
    {
        image: require('../../Assets/movie_img1.png'),
        name: 'Peaky binders'
    },
    {
        image: require('../../Assets/movie_img2.png'),
        name: 'Behind Her Eyes'
    },
    {
        image: require('../../Assets/movie_img3.png'),
        name: 'The Crown'
    },
    {
        image: require('../../Assets/movie_img2.png'),
        name: 'Behind Her Eyes'
    },
]


const OttAllContent = () => {

    return (
        <Content style={styles.container}>
            <Text style={{
                color: COLORS.white,
                marginHorizontal: moderateScale(10),
                marginVertical: moderateScale(10),
                fontFamily: 'Lato-Light'
            }}>Tv Shows</Text>
            <FlatList
                data={data}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                    console.log('>>>>>', item)
                    return (
                        <TvShowsRow image={item.image}/>
                    )
                }} />


            <Text style={styles.text}>Videos</Text>
            <FlatList
                data={data}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                    // console.log('>>>>>', item)
                    return (
                        <TvShowsRow image={item.image} />
                    )
                }} />

            <Text style={styles.text}>Movies</Text>
            <FlatList
                data={data}
                horizontal={true}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                    // console.log('>>>>>', item)
                    return (
                        <FirstRowCard image={item.image} />
                    )
                }} />

            <Text style={styles.text}>Documentaries</Text>
            <FlatList
                data={data}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                // showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                    return (
                        <TvShowsRow image={item.image} />
                    )
                }} />
        </Content>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: COLORS.themecolor,
        padding: moderateScale(5)
    },
    imagepartone: {
        // height: moderateScale(129),
        // width: moderateScale(190),
        // marginHorizontal: moderateScale(10),
        // borderRadius: 4
    },
    text: {
        color: COLORS.white,
        marginVertical: moderateScale(10),
        marginHorizontal: moderateScale(10),
        // marginLeft: moderateScale(16),
        // marginTop: moderateScale(30),
        // marginBottom: moderateScale(10),
        fontFamily: 'Lato-Light'
    },
    imageparttwo: {
        // height: moderateScale(129),
        // width: moderateScale(106),
        // marginLeft: moderateScale(16),
        // borderRadius: 4

    }

});


export default OttAllContent;
