import * as React from 'react';
import {Image, Linking} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../Screen/Home';
import EcommerceHome from '../Screen/Ecommerce/index';
import FeedScreen from '../Screen/Feed';
import MeetingHome from '../Screen/Meeting/MeetingHome';
import {COLORS} from '../Constants/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoreDrawer from './MoreDrawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EventHome from '../Screen/Event';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = (props) => {

  return (
    <Tab.Navigator
      // tabBarVisible={false}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Tv') {
            // iconName = focused
            //   ? require('../Assets/BottomTab/Tv.png')
            //   : require('../Assets/BottomTab/Tv1.png');
              iconName = focused
              ? "tv"
              : "tv-outline"
             return <Ionicons name={iconName} size={size} color={color} /> 
          } else if (route.name === 'MeetingHome') {
            // iconName = focused
            //   ? require('../Assets/BottomTab/Feed.png')
            //   : require('../Assets/BottomTab/Feed1.png');
            iconName = focused
              ? "solution1"
              : "solution1"
             return <AntDesign name={iconName} size={size} color={color} /> 
          } else if (route.name === 'Events') {
            // rss-feed
            iconName = focused
              ? "event"
              : "event"
            return <MaterialIcons name={iconName} size={size} color={color} /> 
          } else if (route.name === 'Social') {
                // iconName = focused
                //   ? require('../Assets/BottomTab/Feed.png')
                //   : require('../Assets/BottomTab/Feed1.png');
                iconName = focused
              ? "rss-feed"
              : "rss-feed"
             return <MaterialIcons name={iconName} size={size} color={color} /> 
          } else if (route.name === 'Shop') {
            // shopping-bag
            // iconName = focused
            //   ? require('../Assets/BottomTab/Shop.png')
            //   : require('../Assets/BottomTab/Shop1.png');
              iconName = focused
              ? "shopping-bag"
              : "shopping-bag"
             return <MaterialIcons name={iconName} size={size} color={color} /> 
          } else if (route.name === 'More') {
            // iconName = focused
            //   ? require('../Assets/BottomTab/More.png')
            //   : require('../Assets/BottomTab/More1.png');
            iconName = focused
              ? "menu"
              : "menu"
             return <Ionicons name={iconName} size={size} color={color} /> 
          }

          // return (
          //   <Image
          //     source={iconName}
          //   />
          // );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#7D43E0',
        inactiveTintColor: '#6D6D80',
        labelStyle: {
          fontSize: 10.5,
          fontFamily: 'Lato-Bold',
          marginBottom: 4.5,
        },
        style: {
          backgroundColor: COLORS.themecolor,
          // height: 45, 
          borderTopColor: '#0d0d14',
          elevation: 50,
        },
      }}>
      <Tab.Screen name="Tv" component={Home} />
      {/* <Tab.Screen name="MeetingHome" component={MeetingHome} 
        options={{tabBarLabel:'Meeting'}} 
        initialParams={{meetId : null,deepLink : false}}
      /> */}
      {/* code change deep */}
      <Tab.Screen name="Events" component={EventHome} />  
      <Tab.Screen name="Social" component={FeedScreen} /> 
        {/* code change deep end  */}
        
      <Tab.Screen name="Shop" component={EcommerceHome} />
      <Tab.Screen name="More" component={MoreDrawer} />
    </Tab.Navigator>
  );
};



export default BottomTab;
