import React from 'react'
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../Components/Drawer';
import BottomTab from './BottomTab';
import MoreDrawer from './MoreDrawer';


const { width } = Dimensions.get('window');

const Drawer = createDrawerNavigator();

const DrawerNav = ({ navigation }) => {
    return (
      <Drawer.Navigator
        // headerMode="none"
        // initialRouteName="Home11"
        drawerContent={props => <DrawerContent {...props} />}
        drawerStyle = {{width: 250}}
        drawerPosition = "right"
      >
        <Drawer.Screen name="Home11" component={BottomTab} />
        <Drawer.Screen name="MoreDrawer2" component={MoreDrawer} />
        {/* <Drawer.Screen name="Meetings" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={HomeScreen} />
        <Drawer.Screen name="BankDetails" component={BankDetails} />
        <Drawer.Screen name="NoticeBoard" component={NoticeBoard} />
        <Drawer.Screen name="Support" component={Support} />
        <Drawer.Screen name="Transaction" component={Transaction} /> */}
      </Drawer.Navigator>
    )
  }

export default DrawerNav ;


