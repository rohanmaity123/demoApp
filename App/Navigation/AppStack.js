import * as React from 'react';
import {Image, Linking} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../Screen/Home';
import EcommerceHome from '../Screen/Ecommerce/index';
import FeedScreen from '../Screen/Feed';
import FeedNotification from '../Screen/Feed/FeedNotification';
import OttSearch from '../Screen/Ott/Ottsearch';
// import HomeQuize from '../Screen/Quize/HomeQuize';
import GenreScreen from '../Screen/SliderRowScreen/GenreScreen';
import ActionMovies from '../Screen/SliderRowScreen/ActionMoviesScreen';
import History from '../Screen/Home/History';
import SingleScreen from '../Screen/Ott/SingleScreen';
import FirstRowCard from '../Components/Ott/SquareCard';
import DownloadList from '../Screen/DownloadLists';
import OttFilter from '../Components/OttHeaderBar/OttFilter';
import HomeQuize from '../Screen/Quize/QuizList';
import Wishlist from '../Screen/Ecommerce/Wishlist';
import ShopInner from '../Screen/Ecommerce/ShopInner';
import Categories from '../Screen/Ecommerce/Categories';
import SingleCategory from '../Screen/Ecommerce/SingleCategory';
import LeaderBoard from '../Screen/LeaderBoard';
import LeaderBoardTwo from '../Screen/LeaderBoardTwo';
// import  from '../Screen/LeaderBoard'
import Quizegames from '../Screen/Quize/SingleQuiz';
import ResultQuize from '../Screen/Quize/ResultQuize';
import LoyalityPoints from '../Screen/LoyalityPoints/Redeem';
import Cart from '../Screen/Ecommerce/Product/Cart';
// import CheckOut from '../Screen/Ecommerce/Product/CheckOut';
import MyOrder from '../Screen/Ecommerce/Product/MyOrder';
import MyOrderTabs from '../Screen/Ecommerce/MyOrderTabs';
import OrderDetails from '../Screen/Ecommerce/Product/OrderDetails';
import DownloadLists from '../Screen/DownloadLists';
// import JoinMeeting from '../Components/Modal/JoinMeeting';
// import ScheduleMeeting from '../Components/Modal/ScheduleMeeting';
import PageNo16 from '../Components/Modal/PageNo16';
import Page64 from '../Components/Modal/Page64';
import Page65 from '../Components/Modal/Page65';
import HistoryTwo from '../Components/Modal/HistoryTwo';
import BuyLogin from '../Components/Modal/BuyLogin';
import More from '../Screen/More';
import TermsConditions from '../Screen/Others/TermsConditions';
import MeetingHome from '../Screen/Meeting/MeetingHome';
import SearchTabs from '../Screen/Ecommerce/Product/SearchTabs';
import Notification from '../Screen/Notification/index';
import CheckoutDetails from '../Screen/Ecommerce/Product/CheckOutDetails';
import OrderHistory from '../Screen/Ecommerce/Product/OrderHistory';
// import Payment from '../Components/Payment';
import Page69 from '../Components/Modal/Page69';
import Page68 from '../Components/Modal/Page68';
import Vip from '../Components/Modal/Vip';
// import InnerRoom from '../Components/Modal/InnerRoom';
import RoundTableMeeting from '../Screen/Meeting/RoundTableMeeting';
import SquareSeatBooking from '../Screen/Meeting/SquareSeatBooking';
import ChooseRoom from '../Components/Events/ChooseRoom';
import Room from '../Components/Events/Room';
import EventFlow from '../Screen/Event/index2';
// import MakePayment from '../Components/Events/MakePayment';
import CourseHome from '../Screen/Courses';
import SingleCourse from '../Screen/Courses/SingleCourse';
import SingleNotification from '../Screen/Notification/SinleNotification';
import About from '../Screen/Others/About';
import EventEarn from '../Components/Events/EventEarn';
import MyProfile from '../Screen/MyProfile';
import EditProfile from '../Screen/MyProfile/EditProfile';
import CreatePost from '../Screen/Feed/PostPage';
import {COLORS} from '../Constants/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScratchCardScreen from '../Screen/ScrathCard/index';
import TestShimmer from '../Components/ShimmerLoader/ott/MoviesLoader';
// import Stripe from './App/Stripe';
import SinglePost from '../Screen/Feed/SinglePage';
import MoreProduct from '../Screen/Ecommerce/Product/MoreProduct';
//// import Participants from '../Screen/Events/Participates';
import EventTwo from '../Screen/Event/EventTwo';
import TableMeeting from '../Screen/Event/TableMeeting';
import Networking from '../Screen/Event/Networking';
import SingleEvent from '../Screen/Event/SingleEvent';
import Participants from '../Screen/Event/Participants';
import Event from '../Screen/Event';
import PrivateMeeting from '../Screen/PrivateMeeting/PrivateMeeting';
import Eventinfo from '../Screen/Event/Eventinfo';
import BookRoom from '../Screen/Event/BookRoom';
import JoinTable from '../Screen/Event/JoinTable';
import Leave from '../Screen/Event/Leave';
import AllContent from '../Components/HeaderBar/AllContent';
import EventPayment from '../Components/Events/EventPayment';
import MeetingDetails from '../Screen/Event/MeetingDetails';
import MeetingCreate from '../Screen/Event/MeetingCreate';
import CategoryData from '../Screen/Ott/CategoryData';
import TypeData from '../Screen/Ott/TypeData';
import ChangeAddress from '../Screen/Ecommerce/ChangeAddress';
import ClubHouse from '../Screen/Meeting';
import Scanner from '../Screen/Scanner';
// import QrCode from '../Screen/Scanner/QrCode';
import DigiCardDetails from '../Screen/DigiCard/DigiCard';
import Winnings from '../Screen/ScrathCard/Winnings';
import Navigation from '../Service/Navigation';
import EnterEvent from '../Screen/Event/EnterEvent';
import Session from '../Screen/Event/Sessions';
// import DrawerContent from '../../App/Components/Drawer'
// import {
//   createDrawerNavigator,
// } from '@react-navigation/drawer';
import { Base64Decode } from '../Service/Base64';
import MoreDrawer from './MoreDrawer';
import DrawerNav from './Drawer';
import BottomTab from './BottomTab';
import Test from '../Screen/Test';
import SpeakerEntrance from '../Screen/Event/SpeakerEntrance';
import PrivateMeetingType from '../Screen/Event/PrivateMeetingType';
import MeetingInfo from '../Screen/Event/MeetingInfo';
// import FeedScreen from '../Screen/Feed';
import { moderateScale } from '../Components/PixelRatio';
import PMeetingHistory from '../Screen/PrivateMeeting/PMeetingHistory';
import PMeetingList from '../Screen/PrivateMeeting/PMeetingList';
import PCreateMeeting from '../Screen/PrivateMeeting/PCreateMeeting';
import socket from '@Socket';
import Auth from '../Service/Auth';
import GetSubscription from '../Screen/Subscription/GetSubscription';
import UserSubscription from '../Screen/Subscription/UserSubscription';
import CategoryProduct from '../Screen/Ecommerce/CategoryProduct';
import EditSocialPost from '../Screen/Feed/EditSocialPost';
import MyPost from '../Screen/Feed/MyPost';
import LiveVideo from '../Screen/Live';
import SingleLive from '../Screen/Live/LiveSingle';
import MyCard from '../Screen/CardChange';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const DrawerNav = ({ navigation }) => {
//   return (
//     <Drawer.Navigator
//       headerMode="none"
//       initialRouteName="More"
//       drawerContent={props => <DrawerContent {...props} />}
//       drawerPosition="right"
//       drawerStyle={{
//         width: 250,
//         backgroundColor: '#e8e8e8'
//       }}
//     >
//       <Drawer.Screen name="More" component={More} />
//     </Drawer.Navigator>
//   )
// }
// const bottomTab = (props) => {

//   React.useEffect(() => {
//     checkUrl()
//   }, []);
//   const checkUrl = () => {
//     Linking.getInitialURL().then(url => {
//       // console.log("sdjnfjdsnf",url)
//       if (url != null) {
//         let data = { url: url };
//         // console.log('deeplinkdata',data)
//         handleDeepLink(data);
//       }

//     })
//     Linking.addEventListener('url', handleDeepLink);
//   }
//   const handleDeepLink = async (e) => {
//     // alert("handleDeepLink")
//     let urlArr = e.url.split('/');
//     let length = urlArr.length;
//     let postpath = urlArr[length - 2];
//     // console.log("postpath",postpath);
//     if (postpath == 'post') {
//       postId = urlArr[length - 1];
//       Navigation.navigate('SinglePost',{'postId':postId})
//       // Navigation.navigate('Feed')
//     } else if(postpath == 'event'){
//       let eventId = urlArr[length - 1];
//       Navigation.navigate('SingleEvent',{'eventId':eventId,'loading':true})
//     }
//     else if(postpath == 'instantmeeting'){
//       let meetId = await Base64Decode(urlArr[length - 1]);
//       // console.log("meetId>>>>>>>>>>>>>>",meetId);
//       Navigation.navigate('MeetingHome',{'meetId':meetId,'deepLink':true})
//     }
//     else if(postpath == "tv"){
//       let videoId = await Base64Decode(urlArr[length - 1]);
//       Navigation.navigate('OttSingleScreen',{'id':videoId,'loading':true})
//     }
//     else {
//       let userId = urlArr[length - 1];
//       Navigation.navigate('DigiCardDetails',{'uid':userId})
//     }
//   }
//   return (
//     <Tab.Navigator
//       // tabBarVisible={false}
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'Tv') {
//             iconName = focused
//               ? require('../Assets/BottomTab/Tv.png')
//               : require('../Assets/BottomTab/Tv1.png');
//           } else if (route.name === 'Feed') {
//             iconName = focused
//               ? require('../Assets/BottomTab/Feed.png')
//               : require('../Assets/BottomTab/Feed1.png');
//           } else if (route.name === 'Events') {
//             iconName = focused
//               ? require('../Assets/BottomTab/Events.png')
//               : require('../Assets/BottomTab/Events1.png');
//           } else if (route.name === 'Shop') {
//             iconName = focused
//               ? require('../Assets/BottomTab/Shop.png')
//               : require('../Assets/BottomTab/Shop1.png');
//           } else if (route.name === 'More') {
//             iconName = focused
//               ? require('../Assets/BottomTab/More.png')
//               : require('../Assets/BottomTab/More1.png');
//           }

//           return (
//             <Image
//               source={iconName}
//             />
//           );
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: '#7D43E0',
//         inactiveTintColor: '#6D6D80',
//         labelStyle: {
//           fontSize: 10.5,
//           fontFamily: 'Lato-Bold',
//           marginBottom: 3
//         },
//         style: {
//           backgroundColor: COLORS.themecolor,
//           height: 45,
//           borderTopColor: '#0d0d14',
//           elevation: 50,
//         },
//       }}>
//       <Tab.Screen name="Tv" component={Home} />
//       <Tab.Screen name="Feed" component={FeedScreen} />
//       <Tab.Screen name="Events" component={Event} />
//       <Tab.Screen name="Shop" component={EcommerceHome} />
//       <Tab.Screen name="More" component={MoreDrawer} />
//     </Tab.Navigator>
//   );
// };


const EventTab = (props) => {
  // console.log("tab",props)
  return (
    <Tab.Navigator
      // tabBarVisible={false}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Info') {
            iconName = require('../Assets/BottomTab/info.png');
          }

          if (route.name === 'Networking') {
            iconName = require('../Assets/BottomTab/networking.png');
          }
          if (route.name === 'Sessions') {
            iconName = require('../Assets/BottomTab/sessions.png');
          }
          if (route.name === 'Partcipants') {
            iconName = require('../Assets/BottomTab/participant.png');
          }

          return (
            <Image
              style={{
                width: moderateScale(33),
                height: moderateScale(33),
                resizeMode: 'cover',
                backgroundColor: focused ? COLORS.button : COLORS.themecolor,
                borderRadius: moderateScale(33),
              }}
              source={iconName}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#7D43E0',
        inactiveTintColor: '#6D6D80',
        labelStyle: {
          fontSize: 11,
          fontFamily: 'Lato-Bold',
          marginBottom: 3,
          textTransform:'uppercase',
          color: COLORS.white,
          letterSpacing:.2
        },
        style: {
          backgroundColor: COLORS.themecolor,
          height: 55,
          borderTopColor: '#0d0d14',
          paddingTop:1,
          elevation: 50,
        },
      }}>
      <Tab.Screen name="Info" component={Eventinfo}
      initialParams={props.route.params}
      />
      <Tab.Screen name="Networking" component={Networking}
      initialParams={props.route.params}
      />
      <Tab.Screen name="Sessions" component={Session}
      initialParams={props.route.params}
      />
      <Tab.Screen name="Partcipants" component={Participants}
      initialParams={props.route.params}
      />
    </Tab.Navigator>
  );
};

function AppStack(props) {

  
  React.useEffect(() => {
    checkUrl()
  }, []);

  const checkUrl = () => {
    Linking.getInitialURL().then(url => {
      // console.log("sdjnfjdsnf",url)
      if (url != null) {
        let data = { url: url };
        // console.log('deeplinkdata',data)
        handleDeepLink(data);
      }

    })
    Linking.addEventListener('url', handleDeepLink);
  }
  
  const handleDeepLink = async (e) => {
    // alert("handleDeepLink")
    let urlArr = e.url.split('/');
    let length = urlArr.length;
    let postpath = urlArr[length - 2];
    // console.log("postpath",postpath);
    if (postpath == 'post') {
      let postId = await Base64Decode(urlArr[length - 1]);
      Navigation.navigate('SinglePost',{'postId':postId})
      // Navigation.navigate('Feed')
    } else if(postpath == 'event'){
      let eventId = urlArr[length - 1];
      Navigation.navigate('SingleEvent',{'eventId':eventId,'loading':true})
    }
    else if(postpath == 'instantmeeting'){
      let roomId = await Base64Decode(urlArr[length - 1]);
      // console.log("meetId>>>>>>>>>>>>>>",meetId);
      // Navigation.navigate('MeetingHome',{'meetId':meetId,'deepLink':true})44
      let userData = await Auth.getAccount();
      if (userData != null) {
        socket.SocketConnect();
        Navigation.navigate('ClubHouse',
        {roomId : roomId, uData : userData,instant:true});
      }

    }else if(postpath == 'schelulemeeting'){
      let roomId = await Base64Decode(urlArr[length - 1]);
      // console.log("meetId>>>>>>>>>>>>>>",meetId);
      // Navigation.navigate('MeetingHome',{'meetId':meetId,'deepLink':true})44
      let userData = await Auth.getAccount();
      if (userData != null) {
        socket.SocketConnect();
        Navigation.navigate('ClubHouse',
        {roomId : roomId, uData : userData});
      }

    }
    else if(postpath == "tv"){
      let videoId = await Base64Decode(urlArr[length - 1]);
      Navigation.navigate('OttSingleScreen',{'id':videoId,'loading':true})
    }
    else if(postpath == "event-speaker"){
      let split = urlArr[length - 1].split('_')
      let eventId = await Base64Decode(split[0]);
      let sessionId = await Base64Decode(split[1]);
      let speakerId = await Base64Decode(split[2]);
      console.log("event",eventId,sessionId,speakerId);
      Navigation.navigate('SpeakerEntrance',{eventId,sessionId,speakerId})
    }
    else {
      let userId = urlArr[length - 1];
      Navigation.navigate('DigiCardDetails',{'uid':userId})
    }
  }

  return (
        <Stack.Navigator
          initialRouteName="Home"
          headerMode="none"
          detachInactiveScreens={false}
          screenOptions={{
            cardStyle :{ backgroundColor: COLORS.themecolor},
            gestureEnabled: true,
            backgroundColor:COLORS.themecolor,
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          {/* <Stack.Screen name="Home" component={BottomTab} /> */}
          {/* <Stack.Screen name="Test" component={Test} /> */}
          <Stack.Screen name="Home" component={DrawerNav} />
          <Stack.Screen name="EventTab" component={EventTab} />
          <Stack.Screen name="AllContent" component={AllContent} />
          <Stack.Screen name="OttSearch" component={OttSearch} />
          <Stack.Screen name="OttFilter" component={OttFilter} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="LiveVideo" component={LiveVideo} />
          <Stack.Screen name='singleLive' component={SingleLive} />
          <Stack.Screen name="FeedNotification" component={FeedNotification} />
          <Stack.Screen name="OttSingleScreen" component={SingleScreen} />
          <Stack.Screen name="FirstRowCard" component={FirstRowCard} />
          <Stack.Screen name="GenreScreen" component={GenreScreen} />
          <Stack.Screen name="ActionMovies" component={ActionMovies} />
          <Stack.Screen name="DownloadList" component={DownloadList} />
          <Stack.Screen name="HomeQuize" component={HomeQuize} />
          <Stack.Screen name='MeetingHome' component={MeetingHome} />
          <Stack.Screen name="Wishlist" component={Wishlist} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="MyOrder" component={MyOrder} />
          <Stack.Screen name="ShopInner" component={ShopInner} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="CategoryProduct" component={CategoryProduct} />
          {/* <Stack.Screen name="CheckOut" component={CheckOut} /> */}
          <Stack.Screen name="SearchTabs" component={SearchTabs} />
          <Stack.Screen name="SingleCategory" component={SingleCategory} />
          <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
          <Stack.Screen name="LeaderBoardTwo" component={LeaderBoardTwo} />
          <Stack.Screen name="MyOrderTabs" component={MyOrderTabs} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="Quizegames" component={Quizegames} />
          <Stack.Screen name="ResultQuize" component={ResultQuize} />
          <Stack.Screen name="LoyalityPoints" component={LoyalityPoints} />

          <Stack.Screen name="DownloadLists" component={DownloadLists} />
          {/* <Stack.Screen name="JoinMeeting" component={JoinMeeting} /> */}
          {/* <Stack.Screen name="ScheduleMeeting" component={ScheduleMeeting} /> */}
          {/* code change deep */}
          {/* <Stack.Screen name="Feed" component={FeedScreen} />  */}
          <Stack.Screen name="Event" component={Event} />           
          {/* code change deep end */}
          <Stack.Screen name="PageNo16" component={PageNo16} />
          <Stack.Screen name="TermsConditions" component={TermsConditions} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="CheckoutDetails" component={CheckoutDetails} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
          
          {/* <Stack.Screen name="Payment" component={Payment} /> */}
          <Stack.Screen name="HistoryTwo" component={HistoryTwo} />
          <Stack.Screen name="BuyLogin" component={BuyLogin} />
          <Stack.Screen name="Page64" component={Page64} />
          <Stack.Screen name="Page65" component={Page65} />
          <Stack.Screen name="Page69" component={Page69} />
          <Stack.Screen name="Page68" component={Page68} />
          <Stack.Screen name="Vip" component={Vip} />

          <Stack.Screen name="RoundTableMeeting" component={RoundTableMeeting} />
          <Stack.Screen name="SquareSeatBooking" component={SquareSeatBooking} />
          <Stack.Screen name="EventFlow" component={EventFlow} />
          {/* <Stack.Screen name="MakePayment" component={MakePayment} /> */}
          <Stack.Screen name="CourseHome" component={CourseHome} />
          <Stack.Screen name="SingleCourse" component={SingleCourse} />
          <Stack.Screen name="EventEarn" component={EventEarn} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="UserSubscription" component={UserSubscription} />

          <Stack.Screen name="ChooseRoom" component={ChooseRoom} />
          <Stack.Screen name="Room" component={Room} />
          <Stack.Screen name="About" component={About} />
          {/* <Stack.Screen name="InnerRoom" component={InnerRoom} /> */}
          <Stack.Screen name="SingleNotification" component={SingleNotification} />
          <Stack.Screen name="CreatePost" component={CreatePost} />
          {/* <Stack.Screen name="VideoPlayer" component={VideoPlayer} /> */}

          <Stack.Screen name="ScrathCard" component={ScratchCardScreen} />
          <Stack.Screen name="TestShimmer" component={TestShimmer}/>

          <Stack.Screen name="SinglePost" component={SinglePost}/>
          <Stack.Screen name="MoreProduct" component={MoreProduct}/>
          <Stack.Screen name="EventTwo" component={EventTwo}/>
          {/* <Stack.Screen name="Louges" component={Louges}/> */}
          <Stack.Screen name="SingleEvent" component={SingleEvent}/>
          {/* <Stack.Screen name="TableMeeting" component={TableMeeting}/> */}
          {/* <Stack.Screen name="Participants" component={Participants}/> */}

          {/* <Stack.Screen name="Event" component={Event} /> */}
          <Stack.Screen name="EventEvent" component={EnterEvent} />
          <Stack.Screen name="Eventinfo" component={Eventinfo} />
          <Stack.Screen name="PMeetingHistory" component={PMeetingList} />
          <Stack.Screen name="PrivateMeeting" component={PrivateMeeting} />
          <Stack.Screen name="BookRoom" component={BookRoom} />
          <Stack.Screen name="JoinTable" component={JoinTable} />
          <Stack.Screen name="Leave" component={Leave} />
          <Stack.Screen name="EventPayment" component={EventPayment} />
          <Stack.Screen name="MeetingDetails" component={MeetingDetails} />
          <Stack.Screen name="MeetingCreate" component={MeetingCreate} />
          <Stack.Screen name="CategoryData" component={CategoryData} />
          <Stack.Screen name="TypeData" component={TypeData} />
          <Stack.Screen name="ChangeAddress" component={ChangeAddress} />
          <Stack.Screen name="ClubHouse" component={ClubHouse} />
          <Stack.Screen name="Scanner" component={Scanner} />
          <Stack.Screen name="DigiCardDetails" component={DigiCardDetails} />
          <Stack.Screen name="Winnings" component={Winnings} />
          <Stack.Screen name="SpeakerEntrance" component={SpeakerEntrance} />
          <Stack.Screen name="PrivateMeetingType" component={PrivateMeetingType} />
          <Stack.Screen name="MeetingInfo" component={MeetingInfo} />
          <Stack.Screen name="PCreateMeeting" component={PCreateMeeting} />
          <Stack.Screen name="GetSubscription" component={GetSubscription} />
          <Stack.Screen name="EditSocialPost" component={EditSocialPost} />
          <Stack.Screen name="MyPost" component={MyPost} />
          <Stack.Screen name="MyCard" component={MyCard} />
    
        </Stack.Navigator>
  );
}
export default AppStack;
