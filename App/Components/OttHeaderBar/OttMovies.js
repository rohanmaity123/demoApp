// import React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   FlatList,
//   Dimensions
// } from 'react-native'
// import { moderateScale } from '../../Components/PixelRatio';
// import FirstRowCard from '../FirstRowCard'
// const { width } = Dimensions.get('window')
// import { COLORS } from '../../Constants/Colors'
// const data = [
//   {
//     image: require('../../Assets/movie_img1.png'),
//     subtitle: 'Peakey Blinders'
//   },
//   {
//     image: require('../../Assets/movie_img2.png'),
//     subtitle: 'Behind her eyes'
//   },
//   {
//     image: require('../../Assets/movie_img3.png'),
//     subtitle: 'The Crown'
//   },
//   {
//     image: require('../../Assets/movie_img1.png'),
//     subtitle: 'Peakey Blinders'
//   },
//   {
//     image: require('../../Assets/movie_img2.png'),
//     subtitle: 'Behind her eyes'
//   },
//   {
//     image: require('../../Assets/movie_img3.png'),
//     subtitle: 'The Crown'
//   },
//   {
//     image: require('../../Assets/movie_img1.png'),
//     subtitle: 'Peakey Blinders'
//   },
//   {
//     image: require('../../Assets/movie_img2.png'),
//     subtitle: 'Behind her eyes'
//   },
//   {
//     image: require('../../Assets/movie_img3.png'),
//     subtitle: 'The Crown'
//   },
//   {
//     image: require('../../Assets/movie_img2.png'),
//     subtitle: 'Behind her eyes'
//   },
//   {
//     image: require('../../Assets/movie_img3.png'),
//     subtitle: 'The Crown'
//   },

// ]

// const Data = [
//   {
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQMQI1BUNXk2BEATUSUPGK4R4kBf8LoizMNbx83zmw6owR1P0xMw_QKKRQdM2TORZ8Z0&usqp=CAU',
//   },
//   {
//     image:
//       'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87610d76-a040-4deb-9a76-b9590ac73fb9/dc5uxbr-5983756a-2bb1-4062-9554-32b51a2e69b5.jpg/v1/fill/w_1600,h_2372,q_75,strp/captain_marvel_movie_poster_by_marcellsalek_26_dc5uxbr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yMzcyIiwicGF0aCI6IlwvZlwvODc2MTBkNzYtYTA0MC00ZGViLTlhNzYtYjk1OTBhYzczZmI5XC9kYzV1eGJyLTU5ODM3NTZhLTJiYjEtNDA2Mi05NTU0LTMyYjUxYTJlNjliNS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DIzRKP47iBPKrOV3JZ3nIBG26iiJOUQX5qOU6P2qTKk',
//   },
//   {
//     image:
//       'https://qqcdnpictest.mxplay.com/pic/66304626cb450bdec0d067da280e62e0/en/2x3/320x480/6acea7b16288e679ec4b4e166de46e42_1280x1920.webp',
//   },
//   {
//     image:
//       'https://m.media-amazon.com/images/M/MV5BMjA2MzUxMTM3M15BMl5BanBnXkFtZTgwMzA2NzkxMDE@._V1_UY1200_CR89,0,630,1200_AL_.jpg',
//   },
// ];
// const OttMovies = () => {
//   return (
//     <View style={StyleSheet.container}>
//       <FlatList
//         data={data}
//         showsVerticalScrollIndicator={false}
//         numColumns={3}
//         keyExtractor={(item, index) => index}
//         renderItem={({ item, index }) => {
//           return (
//             <View style={{
//               flex: 1,
//               marginTop: moderateScale(18),
//               marginHorizontal:moderateScale(5)

//             }}>
//               <Image
//                 source={item.image}
//                 style={styles.ImageStyle}
//               />
//               <Text style={{
//                 fontSize: moderateScale(9),
//                 fontFamily: 'Lato-Light',
//                 color: COLORS.white,
//                 marginTop: moderateScale(8),
//                 marginBottom: moderateScale(12)
//               }}>
//                 {item.subtitle}
//               </Text>
//             </View>
//             // <FirstRowCard image={item.image}/>
//           )
//         }} />
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container:
//   {
//     flex: 1,
//     width: width,
//     backgroundColor:COLORS.themecolor

//   },

//   ImageStyle:
//   {
//     width: moderateScale(106),
//     height: moderateScale(129)
//   },
//   textDesign:
//   {
//     color: 'white',
//     fontSize: moderateScale(12),
//     marginTop: moderateScale(8),
//     fontFamily: 'Lato-Light'
//   }
// })
// export default OttMovies;

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {moderateScale} from '../../Components/PixelRatio';
import FirstRowCard from '../Ott/SquareCard';
const {width} = Dimensions.get('window');
import {COLORS} from '../../Constants/Colors';
const data = [
  {
    image: require('../../Assets/movie_img1.png'),
    subtitle: 'Peakey Blinders',
  },
  {
    image: require('../../Assets/movie_img2.png'),
    subtitle: 'Behind her eyes',
  },
  {
    image: require('../../Assets/movie_img3.png'),
    subtitle: 'The Crown',
  },
  {
    image: require('../../Assets/movie_img1.png'),
    subtitle: 'Peakey Blinders',
  },
  {
    image: require('../../Assets/movie_img2.png'),
    subtitle: 'Behind her eyes',
  },
  {
    image: require('../../Assets/movie_img3.png'),
    subtitle: 'The Crown',
  },
  {
    image: require('../../Assets/movie_img1.png'),
    subtitle: 'Peakey Blinders',
  },
  {
    image: require('../../Assets/movie_img2.png'),
    subtitle: 'Behind her eyes',
  },
  {
    image: require('../../Assets/movie_img3.png'),
    subtitle: 'The Crown',
  },
  {
    image: require('../../Assets/movie_img2.png'),
    subtitle: 'Behind her eyes',
  },
  {
    image: require('../../Assets/movie_img3.png'),
    subtitle: 'The Crown',
  },
];

const Data = [
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
const OttMovies = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.themecolor}}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flex: 1,
                marginTop: moderateScale(18),
                marginHorizontal: moderateScale(5),
              }}>
              <Image source={item.image} style={styles.ImageStyle} />
              <Text
                style={{
                  fontSize: moderateScale(9),
                  fontFamily: 'Lato-Light',
                  color: COLORS.white,
                  marginTop: moderateScale(8),
                  marginBottom: moderateScale(12),
                }}>
                {item.subtitle}
              </Text>
            </View>
            // <FirstRowCard image={item.image}/>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: width,
    backgroundColor: COLORS.themecolor,
  },

  ImageStyle: {
    width: moderateScale(106),
    height: moderateScale(129),
  },
  textDesign: {
    color: 'white',
    fontSize: moderateScale(12),
    marginTop: moderateScale(8),
    fontFamily: 'Lato-Light',
  },
});
export default OttMovies;
