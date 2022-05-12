//import liraries
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  FlatList,
  Modal,
  Alert
} from 'react-native';
import { COLORS } from '../../Constants/Colors';
import {
  moderateScale,
  verticalModerateScale,
  verticalScale,
} from '../PixelRatio';
import { Button, Icon } from 'native-base';
// import Navigation from '../../Service/Navigation';
import { socket } from '@Socket';
// import Chat from '../../Screen/Chat';
import EventChat from '../../Screen/Chat/EventChat';
import ModalHeader from '../Header/ModalHeader';
import { useDispatch } from 'react-redux';
import { updateSpeakerStat } from '../../Store/reducer/SessionMeeting';
import SessionChat from '../../Screen/Chat/SessionChat';

const { width, height } = Dimensions.get('window');

const datatwo = [
  {
    img: require('../../Assets/event/Chat.png'),
    name: 'CHAT',
  },
  {
    img: require('../../Assets/event/Settings.png'),
    name: 'SETTINGS',
  },
  {
    img: require('../../Assets/event/Report.png'),
    name: 'REPORT',
  },
  {
    img: require('../../Assets/event/Copy.png'),
    name: 'COPY LINK',
  },
];
// create a component
const NetworkTab = props => {

  const { userData, streams, moderator, speaker, session } = props;

  const dispatch = useDispatch();

  const [modalvisible, setmodalvisible] = useState(false);
  const [hand, sethand] = useState(props.raiHand);
  const [pModal, setpModal] = useState(false);
  const [chatModal, SetChatModal] = useState(false);

  const raiseHand = async () => {
    // let data = await Auth.getAccount();
    //   console.log("data");
    socket.emit('raiseHand', {
      userId: props.userId,
      data: userData.firstname,
      status: !hand,
      uId: userData.id,
    });
    sethand(!hand);
    setmodalvisible(false);
  };

  const makeSpeakerPopup = (data) => {
    // console.log("makeSpeakerPopup",data.stream)
    let d = data.speaker ? "Remove" : "Make";
    Alert.alert(
      d + " Speaker - " + data.userName.firstname + " " + data.userName.lastname,
      "Are you sure?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => makeSpeaker(data) }
      ]
    );
  }

  const makeSpeaker = (data) => {

    socket.emit('make_speaker', {
      userId: data.userName.id,
      status: !data.speaker,
      streamId: data.id
    });

    dispatch(updateSpeakerStat({
      userId: data.userName.id,
      status: !data.speaker,
      streamId: data.id
    }));

  }


  const headerComponent = () => {
    //  console.log("ownstreams",streams) 
    // return null;
    return (
      <View style={styles.listview}>
        <View
          style={{
            flexDirection: 'row',
            width: '70%',
            // justifyContent: 'space-around'
          }}>
          <Image
            style={{
              width: moderateScale(50),
              height: moderateScale(50),
              borderRadius: moderateScale(30),
              resizeMode: 'cover',
            }}
            source={{
              uri: streams.username.image ? streams.username.image : null,
            }}
          />

          <View
            style={{
              marginLeft: 15,
              justifyContent: 'space-around',
              width: '60%',
            }}>
            <Text style={styles.text} numberOfLines={1}>
              {streams.username.firstname
                ? streams.username.firstname + " " + streams.username.lastname
                : null}

            </Text>
            {speaker && session ? <Text
              numberOfLines={1}
              style={{
                ...styles.text,
                opacity: 0.5,
                color: 'green',
                fontSize: moderateScale(11),
              }}> (Speaker)</Text> : null}
          </View>
        </View>

        {/* <View style={styles.rightview}>
                                                    <View style={styles.iconview}>
                                                        <Icon style={styles.iconstyle}
                                                            name="star"
                                                            type="Feather" />
                                                    </View>

                                                    <View style={styles.iconview}>
                                                        <Icon style={styles.iconstyle}
                                                            name="message-text-outline"
                                                            type="MaterialCommunityIcons" />
                                                    </View>
                                                </View> */}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.content}
        onPress={props.switchAudio}
        disabled={!props.speaker}>
        {/* <Image 
                    source={require('../../Assets/event/Mute.png')}
                    style={styles.preview}
                /> */}
        <Icon
          style={{ color: props.audio ? 'red' : COLORS.white, fontSize: 23 }}
          name={props.audio ? 'mic-off' : 'mic'}
          type="Ionicons"
        />
        <Text
          style={{ ...styles.text, color: props.audio ? 'red' : COLORS.white }}>
          {props.audio ? 'UnMute' : 'Mute'}
        </Text>
      </Pressable>
      <Pressable
        style={styles.content}
        onPress={props.switchVideo}
        disabled={!props.speaker}>
        {/* <Image 
                    source={require('../../Assets/event/Video.png')}
                    style={styles.preview}
                /> */}
        <Icon
          style={{ color: props.videostat ? 'red' : COLORS.white, fontSize: 23 }}
          name={props.videostat ? 'videocam-off' : 'videocam'}
          type="MaterialIcons"
        />
        <Text
          style={{
            ...styles.text,
            color: props.videostat ? 'red' : COLORS.white,
          }}>
          {props.videostat ? 'Start Video' : 'Stop Video'}
        </Text>
      </Pressable>
      {/* <View style={styles.content}>
                <Image 
                    source={require('../../Assets/event/Sharescreen.png')}
                    style={styles.preview}
                />
                <Text
                    style={{
                        color:'#fff',
                        fontSize:moderateScale(10)
                    }}
                >Share</Text>
                <Text
                    style={{
                        color:'#fff',
                        fontSize:moderateScale(10)
                    }}
                >Screen</Text>
            </View> */}
      <Pressable onPress={() => setpModal(true)}>
        <View style={styles.content}>
          <Image
            source={require('../../Assets/event/Participants.png')}
            style={styles.preview}
          />
          <Text style={styles.text}>Participants</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => setmodalvisible(true)}>
        <View style={styles.content}>
          <Image
            source={require('../../Assets/event/More.png')}
            style={styles.preview}
          />
          <Text style={styles.text}>More</Text>
        </View>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalvisible}
        onRequestClose={() => setmodalvisible(!modalvisible)}>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Pressable
            style={{ flex: 1 }}
            onPress={() => setmodalvisible(!modalvisible)}
          />
          <View style={styles.modalStyle}>
            <Icon
              onPress={() => setmodalvisible(!modalvisible)}
              name="minus"
              type="Feather"
              style={{
                alignSelf: 'center',
                fontSize: 40,
                color: 'grey',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginVertical: 10,
              }}>
              {datatwo.map((item, index) => {
                return (
                  <Pressable
                    onPress={() => {
                      SetChatModal(true);
                      setmodalvisible(false);
                    }}
                    key={index}>
                    <View style={{ alignItems: 'center' }}>
                      <View style={styles.footer}>
                        <Image source={item.img} />
                      </View>
                      <Text
                        style={{
                          color: '#fff',
                          paddingTop: moderateScale(10),
                          fontSize: moderateScale(12),
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
            <Button style={styles.reiseBtn} onPress={() => raiseHand()}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                <Icon
                  name="hand-paper-o"
                  type="FontAwesome"
                  style={{ color: '#fff', fontSize: 20 }}
                />{' '}
                Raise Hand
              </Text>
            </Button>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={pModal}
        onRequestClose={() => setpModal(!pModal)}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.themecolor,
          }}>
          <ModalHeader
            name="Participants"
            CloseModal={() => setpModal(!pModal)}
          />
          <FlatList
            data={props.participant}
            ListHeaderComponent={headerComponent}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => {
              if (typeof (item.userName) == "undefined") {
                return null;
              }
              return (
                <Pressable
                  onPress={() => makeSpeakerPopup(item)}
                  disabled={!moderator}
                  style={styles.listview}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '70%',
                      // justifyContent: 'space-around'
                    }}>
                    <Image
                      style={{
                        width: moderateScale(50),
                        height: moderateScale(50),
                        borderRadius: moderateScale(30),
                        resizeMode: 'cover',
                      }}
                      source={{
                        uri: item.userName.image ? item.userName.image : null,
                      }}
                    />

                    <View
                      style={{
                        marginLeft: 15,
                        justifyContent: 'space-around',
                        width: '60%',
                      }}>
                      <Text style={styles.text} numberOfLines={1}>
                        {item.userName.firstname
                          ? item.userName.firstname + " " + item.userName.lastname
                          : null}
                      </Text>
                      {item.speaker && session == true ? <Text
                        numberOfLines={1}
                        style={{
                          ...styles.text,
                          opacity: 0.5,
                          color: 'green',
                          fontSize: moderateScale(11),
                        }}> (Speaker)</Text> : null}
                    </View>
                  </View>

                  {/* <View style={styles.rightview}>
                                                    <View style={styles.iconview}>
                                                        <Icon style={styles.iconstyle}
                                                            name="star"
                                                            type="Feather" />
                                                    </View>

                                                    <View style={styles.iconview}>
                                                        <Icon style={styles.iconstyle}
                                                            name="message-text-outline"
                                                            type="MaterialCommunityIcons" />
                                                    </View>
                                                </View> */}
                </Pressable>
              );
            }}
          />
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={chatModal}
        onRequestClose={() => SetChatModal(false)}>
        {session ?
          <SessionChat
            CloseModal={() => SetChatModal(false)}
            uData={props.userData}
            chat={props.chat}
            userChat={(data) => props.userChat(data)}
          />
          :
          <EventChat
            CloseModal={() => SetChatModal(false)}
            uData={props.userData}
            chat={props.chat}
            userChat={(data) => props.userChat(data)}
          />}
      </Modal>
    </View>
  );
};

// const mapStateToProps = ({ video, User }) => ({
//     video,
//     userData: User.userData,
//     refress: User.refress
//   })

export default NetworkTab;

// define your styles
const styles = StyleSheet.create({
  container: {
    height: moderateScale(55),
    width: width,
    backgroundColor: COLORS.themecolor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  preview: {
    height: moderateScale(20),
    width: moderateScale(20),
    resizeMode: 'contain',
  },
  text: {
    color: '#fff',
    paddingVertical: 5,
    fontSize: moderateScale(10),
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 4,
  },
  modalStyle: {
    // height:moderateScale(180),
    // width:width-20,
    backgroundColor: '#222232',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footer: {
    height: 35,
    width: 35,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222232',
  },
  reiseBtn: {
    height: moderateScale(40),
    width: moderateScale(120),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    backgroundColor: COLORS.themecolor,
    borderWidth: 1,
    borderColor: COLORS.white,
    alignSelf: 'center',
    marginTop: moderateScale(5),
    marginBottom: 15,
  },
  iconstyle: {
    color: COLORS.white,
    fontSize: 17,
    alignSelf: 'center',
  },
  listview: {
    flex: 1,
    // backgroundColor: COLORS.list_background,
    flexDirection: 'row',
    marginVertical: moderateScale(8),
    height: moderateScale(55),
    marginHorizontal: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: moderateScale(12),
    // padding: moderateScale(5),
  },
  text: {
    color: COLORS.white,
    // marginLeft: moderateScale(15),
    fontSize: moderateScale(11),
    fontFamily: 'Montserrat-SemiBold',
  },
  iconview: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    // backgroundColor: COLORS.list_background,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
  rightview: {
    width: '30%',
    justifyContent: 'space-around',
    // marginHorizontal: moderateScale(10),
    flexDirection: 'row',
  },
  img: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxview: {
    height: verticalModerateScale(60),
    width: width - 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7D43E0',
    marginHorizontal: moderateScale(20),
  },
  boxtext: {
    color: COLORS.white,
    fontFamily: 'Lato-Bold',
  },
});
