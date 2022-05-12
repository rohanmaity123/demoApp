//import liraries
import Slider from '@react-native-community/slider';
import {Icon, Left, ListItem, Radio, Right} from 'native-base';
import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Orientation from 'react-native-orientation';
import Video from 'react-native-video';
import Navigation from '../../Service/Navigation';

const {height, width} = Dimensions.get('window');
// create a component
const VideoRohan = props => {
const videoPlayer = React.useRef(null);
  const [paused, setPaused] = useState(false);
  const [resizemode, setResizeMode] = useState('cover');
  const [overlay, setOverlay] = useState(false);
  const [currenttime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0.1);
  const [sliderValue, setSliderVal] = useState(0);
  const [videoTracks, setVideoTrack] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTracks, setSelectedTrack] = useState({type: 'auto'});
  const [showresizemode, setShow] = useState(false)
  const [loader, setLoader] = useState(false)
  const [videoData, setVideoData] = useState(props.route.params.videoData)
  useEffect(() => {
    handleFullScreenToLandscape()
  }, []);

  const HandleDoubleTap = (doubleTapCallback,singleTapCallback) =>{
    const lastTap = null;
    const now = Date.now()
    const DOUBLE_PRESS_DELAY = 300
    if (lastTap && (now - lastTap ) < DOUBLE_PRESS_DELAY) {
      doubleTapCallback()
      alert('bal')
    } else {
      lastTap = now ;
      setTimeout(() => {
        singleTapCallback()
      }, DOUBLE_PRESS_DELAY);
    }
  }
  const gettime = t => {
    let digit = n => (n < 10 ? `0${n}` : `${n}`);
    let sec = digit(Math.floor(t % 60));
    let min = digit(Math.floor((t / 60) % 60));
    let hr = digit(Math.floor((t / 3600) % 60));
    return hr + ':' + min + ':' + sec;
  };
  const handleLoad = meta => {
    if (typeof meta != 'undefined') {
      setDuration(meta?.duration);
    }
  };
  const handleProgress = progress => {
    if (progress.currentTime > 0) {
      let sliderval = (100 / duration) * progress.currentTime;
    //   console.log('sliderval', sliderval);
      setSliderVal(sliderval);
      // setDuration(progress.currentTime / duration)
      setCurrentTime(progress.currentTime);
    }
  };
  const backAction = () => {
    Orientation.lockToPortrait();
    Navigation.back();
    return true;
  };
  const handleSettings = () => {
      setModalVisible(true)
      setPaused(true)
  }
  const handleResize = () => {
    if (resizemode == 'cover') {
        setResizeMode('contain')
    }
    if (resizemode == 'contain') {
        setResizeMode('stretch')
    }
    if (resizemode == 'stretch') {
        setResizeMode('none')
    }
    if (resizemode == 'none') {
        setResizeMode('cover')
    }
    setShow(true)
     setTimeout(() => {
        setShow(false)
    }, 2000);
  };
  const handlebackward = () =>{
    setLoader(true)
    setPaused(true)
    setCurrentTime(Number(currenttime - 15))
      setTimeout(() => {
        setLoader(false)
        setPaused(false)
        videoPlayer.current.seek(currenttime);
      }, 500);
  }
  const handleforward = () =>{
    setLoader(true)
    setPaused(true)
    // console.log('balloaderfirst',loader,paused)
    setCurrentTime(Number(currenttime + 15))
      setTimeout(() => {
        setLoader(false)
        setPaused(false)
        videoPlayer.current.seek(currenttime);
      }, 500);
    //   console.log('balloader',loader)
  }
  const onslide = (slide)=>{
    // console.log('slidedata', slide)
    setLoader(true)
    setPaused(true)
    setCurrentTime(slide)
    let sliderval = (100 / duration) * slide;
    setSliderVal(sliderval);
    videoPlayer.current.seek(slide);
    setTimeout(() => {
        setLoader(false)
        setPaused(false)
    }, 600);
  }
  const handleSliderComplete = (data) => {
    let slide = data / (100 / duration );
    videoPlayer.current.seek(slide);
}
  const handleFullScreenToLandscape = () =>{
    // setLoader(true)
    Orientation.lockToLandscape();
    if (videoPlayer.current) {  
        videoPlayer.current.presentFullscreenPlayer();  
    } 
  }
  const handleBuffer = (meta) => {
    if(meta.isBuffering){
      setLoader(true)
    }else{
        setLoader(false)

    }
  }
  const handleEnd = () => {
    setPaused(true)
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{height: '100%', width: '100%', backgroundColor: '#000'}}>
        <Video
          paused={paused}
          source={{uri: videoData.videoUrl}}
        //   source={{
        //     uri: 'https://jd3tvoutput.s3.us-east-1.amazonaws.com/Extraction-_-Official-Trailer-_-Screenplay-by-JOE-RUSSO-Directed-by-SAM-HARGRAVE-_-Netflix-9bd3e170-a826-11eb-982c-a5f7c3a64380/playlist.m3u8',
        //   }}
          resizeMode={resizemode}
          style={{...StyleSheet.absoluteFill}}
          onLoad={handleLoad}
          onProgress={handleProgress}
          onEnd={handleEnd}
          ref={ref => (videoPlayer.current = ref)}
          onLoadStart={handleFullScreenToLandscape}
          onBuffer={handleBuffer}
          progressUpdateInterval={500}
          // onError={this.handleError}
          poster={videoData.img.length > 0 ? videoData.img[0].preview : ""}
          posterResizeMode="cover"
          // selectedVideoTrack={selectedTracks}
          bufferConfig={{
            minBufferMs: 15000,
            maxBufferMs: 50000,
            bufferForPlaybackMs: 2500,
            bufferForPlaybackAfterRebufferMs: 5000,
          }}
          error={error => console.log('error', error)}
        />
        <View style={styles.overlay}>
          {!overlay ? (
            <Pressable
              style={{...styles.overlayset, backgroundColor: '#0006'}}
              onPress={() => setOverlay(!overlay)}
              >
              <TouchableOpacity onPress={handlebackward}>
                <Icon
                  name={!paused ? 'play-back-circle' : 'play-back-circle'}
                  size={50}
                  color="#FFF"
                  style={styles.icon}
                />
              </TouchableOpacity >
              <TouchableOpacity onPress={() => setPaused(!paused)}>
                <Icon
                  name={!paused ? 'md-pause-circle' : 'md-play-circle'}
                  size={85}
                  color="#FFF"
                  style={styles.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={handleforward}>
                <Icon
                  name={!paused ? 'play-forward-circle' : 'play-forward-circle'}
                  size={50}
                  color="#FFF"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <View style={styles.header}>
                  <Pressable
                    // style={{width:40,height:50}}
                    onPress={backAction}>
                    <Icon
                      name="arrow-back"
                      type="Ionicons"
                      style={{
                        color: '#fff',
                        fontSize: 25,
                      }}
                    />
                  </Pressable>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Lato-Bold',
                      fontSize: 17,
                      marginLeft: 15,
                    }}>
                    {videoData.name}
                  </Text>
                </View>
              <View style={styles.slidercount}>
                <View style={styles.timer}>
                  <Text style={{color: '#fff'}}>{gettime(currenttime)}</Text>
                  <View style={{width: '85%'}}>
                    <Slider
                      style={{width: '100%', height: 30}}
                      minimumValue={0}
                      maximumValue={100}
                      minimumTrackTintColor={'#DE1029aa'}
                      thumbTintColor={'#DE1029aa'}
                      maximumTrackTintColor="#FFF"
                      value={sliderValue}
                     onValueChange={onslide}
                    onSlidingComplete={handleSliderComplete}
                    />
                  </View>
                  <Text style={{color: '#fff'}}>{gettime(duration)}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 5,
                  }}>
                  <TouchableWithoutFeedback
                  onPress={handleSettings}
                  >
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                      }}>
                      <Icon name="settings" style={{color: '#FFF', fontSize: 25, marginLeft: 10}} />
                      <Text style={{color: '#FFF', marginHorizontal: 5}}>
                        VIDEO SETTING
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <Pressable
                   onPress={handleResize}
                  >
                    <Icon
                      name="stretch-to-page"
                      type="MaterialCommunityIcons"
                      style={{color: '#FFF', fontSize: 25, marginLeft: 10}}
                    />
                  </Pressable>
                </View>
              </View>
              {showresizemode ?
          <Text style={styles.resize}>
              {resizemode}
          </Text> : null }
            </Pressable>
          ) : (
            <Pressable
              style={styles.overlayset}
              // onPress={() => setOverlay(!overlay)}
              onPress={HandleDoubleTap}
              >
              <Pressable style={{flex: 1}} onPress={HandleDoubleTap}></Pressable>
              <Pressable style={{flex: 1}} onPress={HandleDoubleTap}></Pressable>
            </Pressable>
          )}
        </View>
        {loader? (
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
             color={"#DE1029aa"}
             />
          </View>
        ) : null}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.centeredView}>
              <View
                style={{
                  height: '65%',
                  width: '55%',
                  backgroundColor: '#000',
                  borderRadius: 10,
                  alignSelf: 'center',
                  zIndex: 99,
                }}>
                <Text style={styles.tracksTitle}>Quality</Text>
                <ScrollView>
                  <ListItem
                    selected={true}
                    // onPress={()=>this.qualitychange("auto")}
                    style={{borderBottomWidth: 0}}>
                    <Left style={{borderBottomWidth: 0}}>
                      <Text style={styles.trackList}>Auto</Text>
                    </Left>
                    <Right style={{borderBottomWidth: 0}}>
                      <Radio
                        color={'#fff'}
                        // onPress={()=>this.qualitychange("auto")}
                        selectedColor={'#DE1029aa'}
                        selected={selectedTracks.type == 'auto' ? true : false}
                      />
                    </Right>
                  </ListItem>
                  {videoTracks.map((item, index) => {
                    return (
                      <ListItem
                        selected={true}
                        onPress={() => this.qualitychange(item.height)}
                        key={index}
                        style={{borderBottomWidth: 0}}>
                        <Left>
                          <Text style={styles.trackList}>
                            {item.width} * {item.height}
                          </Text>
                        </Left>
                        <Right>
                          <Radio
                            color={'#fff'}
                            onPress={() => this.qualitychange(item.height)}
                            selectedColor={'#DE1029aa'}
                            selected={
                              selectedTracks.value == item.height ? true : false
                            }
                          />
                        </Right>
                      </ListItem>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  overlayset: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 80,
  },
  slidercount: {
    position: 'absolute',
    left: 0,
    right: 0,
    //   top:0,
    bottom: 0,
    backgroundColor: '#00000077',
    // height: 50,
  },
  timer: {
    // width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  trackList: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
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
  tracksTitle: {
    fontFamily: 'Changa-Bold',
    textTransform: 'capitalize',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  header:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    flexDirection: 'row', 
    // height: 50, 
    backgroundColor:'#00000077',
    // alignSelf: 'center', 
    alignItems: "center",
    padding:15,
  },
  centeredView:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center'
  },
});

//make this component available to the app
export default VideoRohan;
