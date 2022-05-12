//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProductCard from '../../Components/Ecommerce/Productcard';
import EcommService from '../../Service/EcommService';

// create a component
const TestHome = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        getProduct()
    },[])
    const getProduct = async () => {
        let result = await EcommService.product();
        console.log('result',result)
        if (result) {
            setProduct(result)
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        // backgroundColor:'red',
                        marginHorizontal: 10,
                        justifyContent: 'space-between'
                    }}>
                        {
                            product.length > 0 ?
                                product.map((item, index) => {
                                    return (
                                        <ProductCard
                                            data={item}
                                            key={index}
                                        />
                                    )
                                })
                                :
                                null
                        }
                    </View>
                    </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
});

//make this component available to the app
export default TestHome;
