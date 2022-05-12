import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  PanResponder,
  BackHandler,
  ActivityIndicator,
  Pressable,
  StatusBar,
  Modal,
  ScrollView,
  AppState
} from 'react-native';
import {ListItem, Radio, Right, Left } from 'native-base';
import Video from 'react-native-video';
import {Icon as Icon2 } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation';
import Navigation from '@Service/Navigation';
// import Auth from '@Service/Auth';
import { COLORS } from '../../Constants/Colors';
// import MyFunction from '@Service/MyFunction';

function secondsToTime(time) {
  return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + (time % 60);
}

var Tolob = null;

const {width, height} = Dimensions.get('window');

export default class Videoplayer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      medium:false,
      time:0,
      modalVisible:false,
      buffering: true,
      progress: 0,
      duration: 0,
    //   videourl: this.props.navigation.getParam('videourl', ''),
    //   videostatus: this.props.navigation.getParam('videostatus', false),
    //   v_duration: this.props.navigation.getParam('v_duration', '00.00'),
    //   v_id: this.props.navigation.getParam('v_id', ''),
      // type_id: this.props.navigation.getParam('type_id', ''),
    //   v_name: this.props.navigation.getParam('v_name', ''),
    //   poster: this.props.navigation.getParam('poster', ''),
      videoData: this.props.route.params.videoData,
      u_id: '',
      loader: false,
      resizemode: 'cover',
      showresizemode: false,
      videoTracks : [],
      selectedTracks : {type:'auto'},
      sliderValue : 0
    };
  }
  animated = new Animated.Value(0);
  opacity = new Animated.Value(0);

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => {
        this.trigerShowHide();
         return false;
    },
  });

  componentDidMount() {
    // console.log("videourl", this.state.videourl)
    AppState.addEventListener("change", this._handleAppStateChange);
    if (this.state.videostatus) {
      Tolob = setTimeout(() => {
        this.userview();
      }, 6000);
    }
    Orientation.addOrientationListener(this._orientationDidChange);
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
    this.handleFullScreenToLandscape();
  }

  backAction = () => {
    Orientation.lockToPortrait();
    this.player.dismissFullscreenPlayer();
    // Orientation.lockToPortrait();
    Navigation.back();
    return true;
  };

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
    this.backHandler.remove();
    clearTimeout(Tolob);
  }

  _handleAppStateChange = nextAppState => {
    if (nextAppState == "background") {
      this.setState({paused : true})
    }
    if ( this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      this.setState({paused : true})
    }
    this.setState({ appState: nextAppState });
   };


  userview = async () => {
    // let result4 = await Auth.getAccount();
    // let d ={
    //   v_id : this.state.v_id,
    //   u_id : result4.id
    // }
    // let result2 = await MyFunction.senduserview(d);
    // console.log("result2", result2);
  };

  handleFullScreenToLandscape = () => {
    this.setState({
      loader: true,
    });
    this.player.presentFullscreenPlayer();
    Orientation.lockToLandscape();
  };

  _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      console.log('Landscape Mode On');
    } else {
    }
  };

  handleLoad = (meta) => {
    // this.handleFullScreenToLandscape();
    if (meta && typeof(meta.videoTracks) != "undefined") {
      this.setState({
        videoTracks : meta.videoTracks,
      })
    } else {
      this.setState({
        videoTracks : [],
      })
    }
    this.setState({
      duration: meta?.duration,
      loader: false,
    });
    // console.log("handleLoad", meta)
    this.player.seek(Number(this.state.time));
    if(this.state.time == 0){
      this.trigerShowHide()
    }
  };

  handleProgress = (progress) => {
      // console.log("progress", progress)
    if(progress.currentTime > 0){
      this.setState({
        progress: progress.currentTime / this.state.duration,
        sliderValue : (100 / this.state.duration)*progress.currentTime,
        time:progress.currentTime
      });
    }
  };

  handleEnd = () => {
    this.setState({
      paused: true,
    });
  };

  handleMainButtonTouch = () => {
    // alert()
    if (this.state.progress >= 1) {
      // alert();
      this.player.seek(0);
    }
    this.setState((state) => {
      return {
        paused: !state.paused,
      };
    });
  };


  handleSliderComplete = (data) => {
      let slide = data / (100 / this.state.duration );
      this.player.seek(slide);
  }


  handleForward = () => {
    this.setState((state) => {
      return {
        loader : !state.loader,
        paused: !state.paused,
        time : Number(state.time + 15)
      };
    });
    setTimeout(() => {
      this.player.seek(this.state.time);
      this.setState((state) => {
        return {
          paused: !state.paused,
          loader : !state.loader,
        };
      });
    }, 500);
  }

  handleBackward = () => {
    this.setState((state) => {
      return {
        loader : !state.loader,
        paused: !state.paused,
        time : Number(state.time - 15)
      };
    });
    setTimeout(() => {
      this.player.seek(this.state.time);
      this.setState((state) => {
        return {
          paused: !state.paused,
          loader : !state.loader,
        };
      });
    }, 500);
  }

  //   handleVideoPress = () =>{
  //     this.trigerShowHide();
  //     // alert()
  //   }
  qualitychange = (data) => {
  
    if(data == "auto"){
      this.setState({
        selectedTracks : {type:'auto'},
        modalVisible: false,
        paused : false
      })
    }else{
      this.setState({
        selectedTracks : {type:'resolution',value:data},
        modalVisible: false,
        paused : false
      })
    }
    

  }
  trigerShowHide = () => {
    clearTimeout(this.hideTimeut);
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();

    Animated.timing(this.opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    this.hideTimeut = setTimeout(() => {
      Animated.timing(this.animated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(this.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }, 3000);
  };

  handleResize = () => {
    const {resizemode} = this.state;
    clearTimeout(this.hideTimeut2);
    if (resizemode == 'cover') {
      this.setState({resizemode: 'contain'});
    }
    if (resizemode == 'contain') {
      this.setState({resizemode: 'stretch'});
    }
    if (resizemode == 'stretch') {
      this.setState({resizemode: 'none'});
    }
    if (resizemode == 'none') {
      this.setState({resizemode: 'cover'});
    }
    this.setState({showresizemode : true})
    this.hideTimeut2 = setTimeout(() => {
      this.setState({showresizemode : false})
    }, 2000);
  };

  handleSettings = () => {
    this.setState({
      modalVisible:true,
      paused:true
    })
  }

  handleBuffer = (meta) => {
    if(meta.isBuffering){
      this.setState({loader:true})
    }else{
      this.setState({loader:false})
    }
  }

  handleError = (error) => {
    console.log("error", error)
  }


  render() {
    const {
      paused,
      progress,
      duration,
      resizemode,
      videourl,
      v_duration,
      v_name,
      quality,
      showresizemode,
      poster,
      videoTracks,
      selectedTracks,
      sliderValue,
      videoData
    } = this.state;

    const interpolatedControls = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 0],
    });
    const interpolatedHeader = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, 0],
    });
    const opacity1 = this.opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
    const controlHideStyle = {
      transform: [
        {
          translateY: interpolatedControls,
        },
      ],
    };
    const HeaderHideStyle = {
      transform: [
        {
          translateY: interpolatedHeader,
        },
      ],
    };
    const controlOpacity = {
      opacity : opacity1
    };
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View
          {...this.panResponder.panHandlers}
          style={{overflow: 'hidden', backgroundColor: '#000'}}>
          <Video
            paused={paused}
            source={{uri: videoData.videoUrl}}
            // source={{uri : 'https://jd3tvoutput.s3.us-east-1.amazonaws.com/Extraction-_-Official-Trailer-_-Screenplay-by-JOE-RUSSO-Directed-by-SAM-HARGRAVE-_-Netflix-9bd3e170-a826-11eb-982c-a5f7c3a64380/playlist.m3u8'}}
            resizeMode={resizemode}
            style={{width: '100%', height:'100%',backgroundColor:COLORS.button}}
            onLoad={this.handleLoad}
            onProgress={this.handleProgress}
            onEnd={this.handleEnd}
            ref={(ref) => (this.player = ref)}
            // onLoadStart={this.handleFullScreenToLandscape}
            onBuffer={this.handleBuffer}
            progressUpdateInterval={500}
            onError={this.handleError}
            poster={videoData.img.length > 0 ? videoData.img[0].preview : ""}
            posterResizeMode="cover"
            selectedVideoTrack={selectedTracks}
            bufferConfig={{
              minBufferMs: 15000,
              maxBufferMs: 50000,
              bufferForPlaybackMs: 2500,
              bufferForPlaybackAfterRebufferMs: 5000
            }}
            error={(error) => console.log("error", error)}
          />


          <Animated.View style={[styles.mainButtonView,controlOpacity]}>
            <TouchableWithoutFeedback onPress={this.handleBackward}>
              <Icon
                name={!paused ? 'play-back-circle' : 'play-back-circle'}
                size={50}
                color="#FFF"
                style={styles.mainButton}
              />
            </TouchableWithoutFeedback>
            <Pressable onPress={this.handleMainButtonTouch}>
              <Icon
                name={!paused ? 'md-pause-circle' : 'md-play-circle'}
                size={85}
                color="#FFF"
                style={styles.mainButton}
              />
            </Pressable>

            <TouchableWithoutFeedback onPress={this.handleForward}>
              <Icon
                name={!paused ? 'play-forward-circle' : 'play-forward-circle'}
                size={50}
                color="#FFF"
                style={styles.mainButton}
              />
            </TouchableWithoutFeedback>
          </Animated.View>



          <Animated.View style={[styles.headerAnimation, HeaderHideStyle]}>
              <View style={styles.header}>
              <Pressable
                // style={{width:40,height:50}}
                onPress={this.backAction}>
                <Icon name='arrow-back' type='Ionicons' style={{
                  color: '#fff', fontSize: 25,
                }} />
              </Pressable>
              <Text style={{
                color: 'white', 
                fontFamily: "Lato-Bold",
                fontSize: 17,
                marginLeft:15
              }}>
                {videoData.name}
              </Text>
            </View>            
          </Animated.View>



          <Animated.View style={[styles.controls, controlHideStyle]}>
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Text style={styles.duration}>
                  {secondsToTime(Math.floor(progress * duration))}
                </Text>
                  <View style={{width:'85%'}}>
                    <Slider
                      style={{width: '100%', height: 30}}
                      minimumValue={0}
                      maximumValue={100}
                      minimumTrackTintColor={COLORS.button}
                      thumbTintColor={COLORS.button}
                      maximumTrackTintColor="#FFF"
                      value={sliderValue}
                      onSlidingComplete={this.handleSliderComplete}
                    />
                  </View>
                <Text style={styles.duration}>
                  {secondsToTime(Math.floor(duration))}
                </Text>
            </View>
            <View style={{flexDirection: 'row',alignItems:'center',justifyContent:'center',marginBottom:5}}>

            <TouchableWithoutFeedback  
            onPress={this.handleSettings}>
              <View style={{justifyContent:'center',alignItems:'center',flexDirection: 'row',}}>
                <Icon 
                name="settings" 
                size={25} 
                color="#FFF"
                />
                <Text style={{color:'#FFF',marginHorizontal:5}}>
                  VIDEO SETTING
                </Text>
              </View>
            </TouchableWithoutFeedback> 
             <Pressable onPress={this.handleResize}>
                <Icon2
                  name="stretch-to-page"
                  type="MaterialCommunityIcons"
                  style={{color: '#FFF', fontSize: 25,marginLeft: 10}}
                />
            </Pressable>
                          
            </View>
          </Animated.View>
          {showresizemode ?
          <Text style={styles.resize}>
              {resizemode}
          </Text> : null }
        </View>
        {this.state.loader == true ? (
          <View  style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}>
             <ActivityIndicator
             size={65}
             color={COLORS.button}
             />
          </View>
        ) : null}

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible:false})
          }}
        >
        <TouchableWithoutFeedback onPress={()=>this.setState({modalVisible:false})}>
          <View style={styles.centeredView}>
            <View style={{
              height:'65%',
              width:'55%',
              backgroundColor:'#000',
              borderRadius:10,
              alignSelf:'center',
              zIndex:99,
            }}>
              <Text style={styles.tracksTitle}>Quality</Text>
              <ScrollView>
              <ListItem selected={true} 
                    onPress={()=>this.qualitychange("auto")}
                    style={{borderBottomWidth:0}}
                  >
                    <Left style={{borderBottomWidth:0}}>
                      <Text style={styles.trackList} >
                        Auto
                      </Text>
                    </Left>
                    <Right style={{borderBottomWidth:0}}>
                      <Radio
                        color={"#fff"}
                        onPress={()=>this.qualitychange("auto")}
                        selectedColor={COLORS.button}
                        selected={selectedTracks.type == "auto" ? true : false}
                      />
                    </Right>
                  </ListItem>
              {
                videoTracks.map((item,index)=>{
                  return(
                    <ListItem selected={true} 
                    onPress={()=>this.qualitychange(item.height)}
                    key={index}
                    style={{borderBottomWidth:0}}
                  >
                    <Left>
                      <Text style={styles.trackList} >
                        {item.width} * {item.height}
                      </Text>
                    </Left>
                    <Right>
                      <Radio
                        color={"#fff"}
                        onPress={()=>this.qualitychange(item.height)}
                        selectedColor={COLORS.button}
                        selected={selectedTracks.value == item.height ? true : false}
                      />
                    </Right>
                  </ListItem>
                  )
                })
              }
            </ScrollView>
            </View>
          </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.button,
  },
  header:{
    flexDirection: 'row', 
    height: 50, 
    width: '100%', 
    justifyContent: "flex-start", 
    // alignSelf: 'center', 
    alignItems: "center",
    marginLeft:15
  },
  headerAnimation: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    // backgroundColor:'red',
    height: 50,
    left: 0,
    top: 0,
    right: 0,
    position: 'absolute',
    // flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    zIndex:99999999
  },
  controls: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 60,
    width:'100%',
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    zIndex:99999999
  },
  mainButton: {
    marginRight: 10,
  },
  duration: {
    color: '#FFF',
    marginHorizontal: 10,
    // marginLeft: 10,
  },
  centeredView:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center'
  },
  resize : {
    color:'#FFF',
    position: 'absolute',
    top:15,
    right:15,
    fontFamily:'Montserrat-SemiBold',
    textTransform:'capitalize',
    fontSize:20
  },
  mainButtonView : {
    // backgroundColor:'red',
    position:'absolute',
    zIndex:99999999,
    top:0,
    bottom:0,
    left:15,
    right:0,
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row'
  },
  trackList : {
    color:'#fff',
    fontFamily:'Montserrat-SemiBold',
    fontSize:15
  },
  tracksTitle : {
    fontFamily:'Changa-Bold',
    textTransform:'capitalize',
    color:'#fff',
    textAlign:'center',
    fontSize:20,
    marginTop:10
  },
  tracksView : {
    height:height/2 + 50,
    width:width/2+50,
    backgroundColor:'#000',
    borderRadius:10,
    alignSelf:'center',
    zIndex:99,
    paddingBottom:10
  }
});