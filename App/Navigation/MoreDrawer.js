import { Button } from 'native-base';
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../Constants/Colors';
import Navigation from '../Service/Navigation';

const MoreDrawer = (props) => {

    useEffect(() => {
        Navigation.back();
        Navigation.openDrawer();
        
    },[])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('tabPress', (e) => {
          // Prevent default behavior
      
          e.preventDefault();
          Navigation.openDrawer();
          // Do something manually
          // ...
        });
      
        return unsubscribe;
      }, [props.navigation]);

    return (
        <View style={styles.container}>
            {/* <Button onPress={()=>Navigation.openDrawer()}>
                <Text>OPEN DRAWER</Text>
            </Button> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.themecolor
    },
});

export default MoreDrawer;