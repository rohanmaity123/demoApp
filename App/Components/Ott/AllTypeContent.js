import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import { COLORS } from '../../Constants/Colors';
import Banner from '../BannerImg/banner';
import SquareCard from './SquareCard';
import RectengularCard from './RectengularCard';
import { moderateScale } from '../PixelRatio';
import Navigation from '../../Service/Navigation';
// import MoviesLoader from '../ShimmerLoader/ott/MoviesLoader'
// import HeadingLoader from '../ShimmerLoader/ott/HeadingLoader';

const shimmerData = [
  {
    "data" : [1,2,3,]
  },
  {
    "data" : [1,2,3,]
  },
  {
    "data" : [1,2,3,]
  }
]


function AllTypeContent(props) {
  
  // console.log(object)
  const { data, hidebanner, faith } = props;

  return (
    <View style={styles.container}>
     <ScrollView>
       {hidebanner ? null : <Banner /> }
{/* 
        {
         data.length == 0 ? shimmerData.map((it,key)=>  
          <View key={key}> 
           <HeadingLoader />
           <FlatList
            data={it.data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item,index) => index}
            renderItem={({ item }) => {
              return (
               <MoviesLoader 
               item={item}
               />
              )
            }}
          />
          </View>
        )

        : */}
      { data.map((item1, key) =>
          <View style={styles.SliderView} key={key}>
            <View style={styles.TextView}>
              <Text style={styles.textStyle}>{item1.name}</Text>
              <Pressable onPress={()=>Navigation.navigate('CategoryData',{id:item1.id,name:item1.name})}>
                <Text style={[styles.textStyle]}>See All</Text>
              </Pressable>
            </View>
                <FlatList
                  data={item1.movies}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item,index) => index}
                  renderItem={({ item }) => {
                    return (
                      // item1.type ?
                        <RectengularCard 
                        faith={faith}
                        item={item} />
                        // :
                        // <SquareCard item={item} />
                    )
                  }}
                />
          </View>
        )}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.themecolor,
  },
  SliderView: {
    paddingHorizontal: moderateScale(5),
    backgroundColor: COLORS.themecolor,
  },
  textStyle: {
    fontSize: moderateScale(11),
    color: '#fff',
    fontFamily: 'Lato-Bold',
  },
  TextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(7),
  },
});

export default React.memo(AllTypeContent);
