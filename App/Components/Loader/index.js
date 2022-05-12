//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../../Constants/Colors';

// create a component
const Loader = () => {
    return (
    <View style={styles.container}>
            <ActivityIndicator  
            color="#7D43E0" 
            size={40} />
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});

//make this component available to the app
export default Loader;
