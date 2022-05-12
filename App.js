if (!__DEV__) {
  console.log = () => null;
}
import * as React from 'react';
// import {Linking, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import Navigation from './App/Service/Navigation';
import {Root} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from './App/Constants/Colors';
import TestHome from './App/Screen/TestHome';
import Login from './App/Screen/Auth/NewLogin';
import Auth from './App/Service/Auth';
import { saveUserData } from './App/Store/action';
import RNBootSplash from 'react-native-bootsplash';

const Stack = createStackNavigator();

function App(props) {
  const dispatch = useDispatch();
  const { login_status, userData } = useSelector((state) => state.User);
  const [isSignedIn, setIsSignIn] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      let result = await Auth.getAccount();
      RNBootSplash.hide({ fade: true });
      if (result != null) {
        dispatch(saveUserData(result));
        setIsSignIn(true);
      } else {
        setIsSignIn(false);
      }
    }
    fetchData();
  }, []);
  return (
    <Root>
        <NavigationContainer
          ref={r => Navigation.setTopLevelNavigator(r)}
>
          <Stack.Navigator
            initialRouteName="Auth"
            headerMode="none"
            detachInactiveScreens={false}
            screenOptions={{
              cardStyle: {backgroundColor: COLORS.themecolor},
              gestureEnabled: false,
              backgroundColor: COLORS.themecolor,
              gestureDirection: 'horizontal',
              ...TransitionPresets.SlideFromRightIOS,
            }}>
              {
                login_status == false?
              
                <Stack.Screen name="Auth" component={Login} />
                :
                <Stack.Screen name="Home" component={TestHome} />
              }

          </Stack.Navigator>
        </NavigationContainer>
    </Root>
  );
}

// export default codePush(codePushOptions)(App);
export default App


