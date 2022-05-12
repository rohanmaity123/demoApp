import React from 'react'
import { View, Text, Image } from 'react-native'

const EmptyLoader = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
            <Image 
             source={require('../../Assets/gif/empty.gif')}   
             style={{resizeMode:'center',alignSelf:'center'}}
            />
        </View>
    )
}

export default EmptyLoader
