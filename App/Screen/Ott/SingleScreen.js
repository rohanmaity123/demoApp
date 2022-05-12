import {Card, Icon} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Share,
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Modal,
} from 'react-native';
import {COLORS} from '../../Constants/Colors';
import SimilarList from '../../Components/Ott/SimilarList';
import Navigation from '../../Service/Navigation';
import {moderateScale} from '../../Components/PixelRatio';
import OttService from '@Service/OttService';
import {useRoute, useTheme} from '@react-navigation/native';
import ReadMore from 'react-native-read-more-text';
import Episodes from './Episodes';
import EpisodesLoader from '../../Components/ShimmerLoader/ott/EpisodesLoader';
import Loader from '../../Components/Loader';
import {Base64Encode} from '../../Service/Base64';
import {useSelector} from 'react-redux';
import Svg, {Circle, ClipPath, Defs, Path, Image} from 'react-native-svg';
import Auth from '../../Service/Auth';
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
const similarShimmer = [1, 2, 3, 4, 5];

const SingleScreen = props => {
  const route = useRoute();
  const {colors, dark} = useTheme();

  // console.log("route",route.params.item);
  const [videoId, setVideoId] = useState(route.params.id, '');
  const [faith, setfaith] = useState(true);
  const [deepLink, setdeepLink] = useState(route.params.loading);
  const [videoData, setVideoData] = useState(route.params.item, {});
  const [similar, setSimilar] = useState([]);
  const [episodes, setepisodes] = useState([]);
  const [showSimilar, setshowSimilar] = useState(true);
  const [favorite, setFavorite] = useState([]);
  const [MovieVisible, setMovieVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const TxtColorChng = {
    color: faith ? COLORS.themecolor : COLORS.white,
  };

  const BackColorChng = {
    backgroundColor: faith ? COLORS.white : COLORS.themecolor,
  };

  const BorderColorChng = {
    borderColor: faith ? COLORS.themecolor : COLORS.box_theam,
  };

  const {subscription} = useSelector(state => state.Subscription);

  console.log('subscriptio.>>>n', subscription);

  // console.log("deepLink",deepLink,videoId)

  useEffect(() => {
    getSingleData();
    _getFavorite()
    // console.log("videoData.similar",typeof(videoData))
    // if (typeof(videoData) !== undefined && videoData.similar && videoData.similar.length > 0) {
    //   setSimilar(videoData.similar);
    // }
    return () => null;
  }, []);

  const getSingleData = async () => {
    let data = {
      id: videoId,
    };
    let result = await OttService.videoSingle(data);
    // console.log("getSingleData",JSON.stringify(result));
    if (result && result.status) {
      setVideoData(result.data);
      setMovieVisible(result.MovieVisible)
      setepisodes(result.data.episodes.reverse());
      setSimilar(result.similar);
      setdeepLink(false);
      if (result.similar.length == 0) {
        setshowSimilar(false);
      }
    }
  };
  const _setFavorite = async() => {
    let dd = [...favorite,videoData]
    setFavorite(dd);
    console.log("Favorite",JSON.stringify(dd))
    await Auth.setFavorite(dd)
    Toast.show('Favorite Added', Toast.LONG);

}
const _getFavorite = async() => {
  let result = await Auth.getFavorite();
  console.log("setwishlist",result)
  if (result != null) {
     setFavorite(result) 
  }
}
  const shareMovie = async () => {
    let dd = await Base64Encode('' + route.params.item.id + '');
    //  console.log("dd",dd)

    // return;

    try {
      const result = await Share.share({
        message:
          'To view this Tv show click in the link below :-' +
          'https://jd3tv.com/tv/' +
          dd,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      // alert(error.message);
    }
  };

  const _renderTruncatedFooter = handlePress => {
    return (
      <Text
        style={[
          styles.TextStyletwo,
          {marginTop: 2, color: faith ? '#DE1029aa' : '#DE1029aa'},
        ]}
        onPress={handlePress}>
        Read more
      </Text>
    );
  };

  const _renderRevealedFooter = handlePress => {
    return (
      <Text
        style={[
          styles.TextStyletwo,
          {marginTop: 2, color: faith ? '#DE1029aa' : '#DE1029aa'},
        ]}
        onPress={handlePress}>
        Show less
      </Text>
    );
  };

  const _handleTextReady = () => {
    // ...
  };

  const playVideo = () => {
    Navigation.navigate('VideoPlayer', {videoData});

    // if (subscription) {
    //   console.log('MovieVisible0',MovieVisible)
    //   if (MovieVisible) {
    //     Navigation.navigate('VideoPlayer', {videoData});
    //   } else {
    //     setModalVisible(true)
    //   }
    // } else {
    //   Navigation.navigate('GetSubscription');
    // }
  };
  const _watchtrailer =() =>{
    Navigation.navigate('Videotrailer', {videoData})
    

    // if (MovieVisible) {
    //   Navigation.navigate('Videotrailer', {videoData})
    // }else{
    //   setModalVisible(true)
    // }
  }
  // return null;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: faith ? COLORS.white : COLORS.themecolor,
      }}>
      <StatusBar
        hidden={false}
        translucent={true}
        backgroundColor="transparent"
      />
      {deepLink ? (
        <Loader />
      ) : (
        <ScrollView>
          <Svg
            height={350}
            width={width}
            viewBox={`0 0 ${width} 350`}
            // style={{borderWidth: 1}}
          >
            <Defs>
              <ClipPath id="curve">
                <Path
                  d={`M0,0 L${width},0 L${width}, 280 C${(width / 3) * 2},350 ${
                    width / 3
                  },350 0,280 L0,0 Z`}
                  stroke={'red'}
                  strokeWidth={2}
                />
              </ClipPath>
            </Defs>
            <Image
              x={0}
              y={0}
              height={'100%'}
              width={'100%'}
              
              href={{uri: videoData.img[0].preview}}
              clipPath="url(#curve)"
              preserveAspectRatio="xMidYMid slice"
            />
          </Svg>
          <Pressable
            style={styles.BackIcon}
            onPress={() => {
              Navigation.back();
            }}>
            <Icon
              name="ios-chevron-back-outline"
              type="Ionicons"
              style={[styles.IconStyle, {fontSize: 25}]}
            />
          </Pressable>
          <Pressable
            style={{...styles.BackIcon,right:15}}
            onPress={() => {
              _setFavorite()
            }}>
              {
                favorite.filter((it)=>it.id == videoData.id).length> 0 ? 
            <Icon
              name="heart"
              type="AntDesign"
              style={[styles.IconStyle, {fontSize: 25,color:COLORS.deep_red}]}
            />
            :
            <Icon
              name="hearto"
              type="AntDesign"
              style={[styles.IconStyle, {fontSize: 25}]}
            />
            }
          </Pressable>
          <View style={{padding: moderateScale(12.5)}}>
          {videoData.typeData && videoData.typeData.type ? (
              <TouchableOpacity style={styles.Playbut} onPress={playVideo}>
                <Icon
                  name="play"
                  type="FontAwesome"
                  style={{...styles.IconStyles,fontSize:moderateScale(18)}}
                />
              </TouchableOpacity>
            ) : null}
            <View
              style={[
                BorderColorChng,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 7,
                  // borderWidth: 2,
                  // borderColor: 'red',
                  position: 'absolute',
                  top: -30,
                  width: width,
                },
              ]}>
              {/* <View style={[styles.IconView,{marginRight:10}]}>
            <Icon name="download" type="AntDesign" style={styles.IconStyle} />
          </View> */}
              <View
                onPress={shareMovie}
                style={[
                  styles.IconView,
                  {
                    backgroundColor: faith ? colors.white : COLORS.themecolor,
                  },
                ]}>
                <Icon name="share" type="Entypo" style={styles.IconStyle} />
              </View>
              <View
                // onPress={shareMovie}
                style={[
                  styles.IconView,
                  {
                    backgroundColor: faith ? colors.white : COLORS.themecolor,
                  },
                ]}>
                <Icon name="plus" type="AntDesign" style={styles.IconStyle} />
              </View>
              {/* <View style={[styles.IconView,{marginRight:10}]}>
            <Icon name="hearto" type="AntDesign" style={styles.IconStyle} />
          </View> */}
            </View>

            <View
              style={[
                styles.ViewTwostyle,
                BorderColorChng,
                {
                  // height: moderateScale(60),
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  alignSelf: 'center',
                  // justifyContent: 'space-around',
                  // paddingHorizontal:moderateScale(10)
                },
              ]}>
              <Text
                style={[
                  styles.textStyle,
                  TxtColorChng,
                  {marginBottom: 3, fontSize: moderateScale(14)},
                ]}>
                {videoData.name} 
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 3,
                  alignSelf: 'center',
                }}>
                {videoData.genre &&
                  videoData.genre.length > 0 &&
                  videoData.genre.map((it, key) => (
                    <Text
                      style={[
                        styles.TextStyletwo,
                        {color: faith ? '#DE1029aa' : COLORS.button},
                      ]}
                      key={key}>
                      {it.label}
                      {Number(key + 1) == videoData.genre.length ? '' : ','}
                    </Text>
                  ))}
              </View>

              {/* <TouchableOpacity onPress={()=>Navigation.navigate('Videotrailer',{videoData})}>
            <Text style={[styles.TextStyletwo,{color:faith?'#DE1029aa' : COLORS.button}]}>
                 View Trailer
            </Text>
          </TouchableOpacity> */}

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 3,
                  marginTop: 3,
                  alignSelf: 'center',
                }}>
                <Text style={[styles.TextStyletwo, TxtColorChng]}>
                  {videoData.year}{' '}
                </Text>
                <Icon
                  name="controller-record"
                  type="Entypo"
                  style={[
                    styles.IconStyle,
                    TxtColorChng,
                    {fontSize: moderateScale(7)},
                  ]}
                />
                <Text style={[styles.TextStyletwo, TxtColorChng]}>
                  {' '}
                  {videoData.duration} min
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.trailer}
              onPress={() => _watchtrailer()}>
              <Icon
                name="play"
                type="FontAwesome"
                style={{fontSize: 15, color: '#fff'}}
              />

              <Text style={[styles.TextStyletwo, {color: COLORS.white}]}>
                Watch Trailer
              </Text>
            </TouchableOpacity>
            {/* <View
          style={[
            styles.ViewTwostyle,
            {
              height: moderateScale(90),
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingHorizontal:moderateScale(10)
            },
          ]}>
          <Text style={[styles.TextStyletwo, TxtColorChng]}>
           {videoData.desc}
          </Text>
        </View> */}
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 5,
                alignSelf: 'center',
              }}>
              <Text style={[styles.TextStyletwo, TxtColorChng]}>Cast :</Text>
              <Text
                style={[styles.TextStyletwo, TxtColorChng, {marginLeft: 10}]}>
                {videoData.cast}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 3,
                alignSelf: 'center',
              }}>
              <Text style={[styles.TextStyletwo, TxtColorChng]}>
                Director :
              </Text>
              <Text
                style={[styles.TextStyletwo, TxtColorChng, {marginLeft: 10}]}>
                {videoData.director}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                marginVertical: 5,
                flexDirection: 'column',
                marginHorizontal: 40,
              }}>
              <ReadMore
                numberOfLines={5}
                renderTruncatedFooter={_renderTruncatedFooter}
                renderRevealedFooter={_renderRevealedFooter}
                onReady={_handleTextReady}>
                <Text style={[styles.TextStyletwo, TxtColorChng]}>
                  {videoData.desc}
                </Text>
              </ReadMore>
            </View>
          </View>
          {videoData.typeData &&
          !videoData.typeData.type &&
          episodes.length > 0 ? (
            <View style={[styles.SliderView, BackColorChng]}>
              <View style={styles.TextView}>
                <Text style={[styles.textStyle, TxtColorChng]}>Episodes</Text>
                <Text style={[styles.textStyle, TxtColorChng, {fontSize: 12}]}>
                  See All
                </Text>
              </View>
              <FlatList
                data={episodes}
                horizontal={true}
                style={styles.FlatStyle}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => {
                  return <Episodes item={item} faith={true} MovieVisible={true} modal={()=>setModalVisible(true)} />;
                }}
              />
            </View>
          ) : null}

          <View style={[styles.SliderView, BackColorChng]}>
            {showSimilar ? (
              <View style={styles.TextView}>
                <Text style={[styles.textStyle, TxtColorChng]}>
                  Similar Movies
                </Text>
                <Text style={[styles.textStyle, TxtColorChng, {fontSize: 12}]}>
                  See All
                </Text>
              </View>
            ) : null}

            {similar.length == 0 && showSimilar ? (
              <FlatList
                data={similarShimmer}
                horizontal={true}
                style={styles.FlatStyle}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => {
                  return <EpisodesLoader item={item} />;
                }}
              />
            ) : (
              <FlatList
                data={similar}
                horizontal={true}
                style={styles.FlatStyle}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => {
                  return (
                    <SimilarList
                      faith={true}
                      navigation={props.navigation}
                      item={item}
                    />
                  );
                }}
              />
            )}
          </View>
        </ScrollView>
      )}
       <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000ab',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{...styles.newmorph, width: width - 40}}>
            <Text style={styles.alert}>
            To view this content please upgrade your subscription package !!
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: moderateScale(15),
              }}>
              <Pressable style={styles.buttonStyle} onPress={()=>{
                setModalVisible(false),
                Navigation.navigate('UserSubscription')}}>
                <LinearGradient
                  colors={[COLORS.green, COLORS.black]}
                  style={{...styles.linearGradient, width: '45%'}}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontFamily: 'Lato-Bold',
                      textTransform: 'uppercase',
                    }}>
                    Yes
                  </Text>
                </LinearGradient>
              </Pressable>
              <Pressable style={styles.buttonStyle} onPress={()=>setModalVisible(!modalVisible)}>
                <LinearGradient
                  colors={[COLORS.button_fix1, COLORS.black]}
                  style={{...styles.linearGradient, width: '45%'}}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontFamily: 'Lato-Bold',
                      textTransform: 'uppercase',
                    }}>
                    No
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SingleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
  linearGradient: {
    // flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    borderRadius: 40,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alert: {fontFamily: 'Lato-Bold', color: '#fff', fontSize: moderateScale(18)},

  buttonStyle: {
    // borderWidth: 1,
    // marginTop: moderateScale(21),
    width: '90%',
    height: moderateScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 40,
    marginBottom: 10,
    // marginVertical: 40,
  },
  trailer: {
    flexDirection: 'row',
    height: moderateScale(30),
    width: moderateScale(90),
    backgroundColor: '#DE1029aa',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: COLORS.white,
    alignItems: 'center',
    borderRadius: moderateScale(5),
    alignSelf: 'center',
    marginVertical: moderateScale(10),
    opacity: 0.8,
  },
  newmorph: {
    shadowRadius: 9,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: COLORS.subscriptionBox,
    width: '98%',
    height: 180,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#7D43E0',
    alignSelf: 'center',
    elevation: 5,
  },
  imgContainer: {
    height: moderateScale(200),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222232',
  },
  SliderView: {
    backgroundColor: COLORS.themecolor,
    paddingBottom: 25,
  },
  ImageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  TextStyletwo: {
    fontSize: moderateScale(10),
    color: COLORS.white,
    fontFamily: 'Lato-Bold',
    maxWidth: '80%',
    // marginLeft: 15,
  },
  textStyle: {
    fontSize: moderateScale(13),
    color: '#fff',
    fontFamily: 'Lato-Bold',
    // marginLeft: 15,
  },
  ViewTwostyle: {
    // height: moderateScale(50),
    // width: width - 20,
    // alignSelf: 'center',
    // elevation:4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#262634',
    alignItems: 'center',
    // paddingHorizontal:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
    paddingBottom: 3,
  },
  IconView: {
    height: moderateScale(35),
    width: moderateScale(35),
    // borderWidth:1,
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#2d2c3d',
    // marginLeft: 15,
    // elevation: 2,
    // marginHorizontal:moderateScale(8),
  },
  IconStyle: {
    fontSize: moderateScale(18),
    color: '#000',
    alignSelf: 'center',
  },
  BackIcon: {
    // fontSize:25,
    position: 'absolute',
    // color:'#fff',
    marginLeft: 15,
    marginTop: 35,
  },
  Playbut: {
    height: moderateScale(45),
    width: moderateScale(45),
    borderRadius: moderateScale(25),
    position: 'absolute',
    // backgroundColor: '#00000088',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    alignSelf: 'center',
    borderWidth: 2,
    backgroundColor: '#DE1029aa',
    borderColor: '#fff',
    opacity: 0.8,
    
  },
  IconStyles: {
    fontSize: moderateScale(25),
    color: '#EAEBEB',
  },
  TextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
  },
  FlatStyle: {
    paddingLeft: 5,
  },
});
