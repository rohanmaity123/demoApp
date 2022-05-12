import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../Screen/Auth/Login';
import Signup from '../Screen/Auth/Signup';
import { COLORS } from '../Constants/Colors';
import ForgetPassword from '../Screen/Auth/ForgetPassword';

const Stack = createStackNavigator();

function AuthStack() {
  return (

        <Stack.Navigator
          initialRouteName="Login"
          headerMode="none"
          screenOptions={{
            cardStyle :{ backgroundColor: COLORS.themecolor},
            gestureEnabled: true,
            backgroundColor:COLORS.themecolor,
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
         
        </Stack.Navigator>
  );
}

export default AuthStack;
