import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Pressable,
  Image,
} from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getOttBanner } from '../../Store/reducer/Banner';
import { getAllOttData, getOtttypeData } from '../../Store/reducer/OttReducer';
import AllContent from '../../Components/Ott/AllContent';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Navigation from '../../Service/Navigation';

function Home(props) {

  const dispatch = useDispatch();

  const { allContent, allTypeData } = useSelector((state) => state.OttData);
  // console.log("allTypeData",JSON.stringify(allTypeData))
  const { colors, dark } = useTheme();
  useEffect(() => {
    dispatch(getOttBanner());
    dispatch(getAllOttData());
    dispatch(getOtttypeData());
  }, []);

  return (
    <SafeAreaView
    style={[styles.container, {
        backgroundColor: colors.background
    }]}
>
    <StatusBar
        barStyle={dark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
    />
      <View
                style={{
                    height: 40,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 35,
                    marginBottom: 5
                }}
            >
                <Pressable
                    onPress={() => Navigation.openDrawer()}
                >
                    <Feather
                        name="menu"
                        size={20}
                        color={colors.text}
                    />
                </Pressable>


                <Image
                    source={require('../../Assets/logo.png')}
                    style={{
                        width: 80,
                        height: 20
                    }}
                />

                <Feather
                    name="search"
                    size={20}
                    color={colors.text}
                />
            </View>
      <AllContent
          data={allContent}
          allTypeData={allTypeData}
      />
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
