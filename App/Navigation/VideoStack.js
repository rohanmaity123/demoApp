import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import VideoPlayer from '../Screen/VideoPlayer';
import { COLORS } from '../Constants/Colors';
import Videotrailer from '../Screen/VideoPlayer/Trailer';

const Stack = createStackNavigator();


function VideoStack() {

  return (
        <Stack.Navigator
          initialRouteName="VideoPlayer"
          headerMode="none"
          detachInactiveScreens={false}
          screenOptions={{
            cardStyle :{ backgroundColor: COLORS.themecolor},
            gestureEnabled: true,
            backgroundColor:COLORS.themecolor,
            // gestureDirection: 'horizontal',
            ...TransitionPresets.ModalTransition,
          }}
        >
          <Stack.Screen 
          name="VideoPlayer" component={VideoPlayer} />
           <Stack.Screen 
          name="Videotrailer" component={Videotrailer} />
        </Stack.Navigator>
  );
}
export default VideoStack;
