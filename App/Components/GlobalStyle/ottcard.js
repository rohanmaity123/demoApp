import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale } from '../PixelRatio';

const { width, height } = Dimensions.get('window');

const OttCard = StyleSheet.create({
    CardView: {
      height: moderateScale((width/1.9)*9/16+30),
      width: width/1.9,
      borderRadius: 8,
      marginHorizontal: moderateScale(5),
      justifyContent: 'space-between',
    },
    VCardView: {
        height: moderateScale((width/2.2)*9/16+30),
        width: width/2.2,
        borderRadius: 8,
        marginHorizontal: moderateScale(5),
        justifyContent: 'space-between',
        marginBottom: 5,
      },
    ImageStyle: {
      height: moderateScale((width/1.9)*9/16),
      width: width/1.9,
      alignSelf: 'center',
      borderRadius: 8,
      resizeMode: 'cover',
      backgroundColor:'#222232'
    },
    VImageStyle: {
        height: moderateScale((width/2.2)*9/16),
        width: width/2.2,
        alignSelf: 'center',
        borderRadius: 8,
        resizeMode: 'cover',
        backgroundColor:'#222232'
      },

    TextStyle: {
      fontSize: moderateScale(8),
      color: '#fff',
      fontFamily: 'Montserrat-SemiBold',
    },
});

export default OttCard;