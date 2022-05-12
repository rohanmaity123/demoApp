import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import {COLORS} from '../../Constants/Colors';
import Banner from '../BannerImg/banner';
import SquareCard from './SquareCard';
import RectengularCard from './RectengularCard';
import {moderateScale} from '../PixelRatio';
import MoviesLoader from '../ShimmerLoader/ott/MoviesLoader';
import HeadingLoader from '../ShimmerLoader/ott/HeadingLoader';
import Navigation from '../../Service/Navigation';
import TypeList from '../TypeList';
import {useTheme} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CategoryLoader from '../ShimmerLoader/CategoryLoader';

const shimmerData = [
  {
    data: [1, 2, 3],
  },
  {
    data: [1, 2, 3],
  },
  {
    data: [1, 2, 3],
  },
];

function AllContent(props) {
  const {colors, dark} = useTheme();
  // console.log(object)
  const {data,allTypeData} = props;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 20,
            height: 100,
            paddingLeft: 20,
          }}>
          
          {allTypeData && allTypeData.length > 0 ?
          allTypeData.map((item, index) => {
            return (
              <TypeList
                item={item}
                image="http://d279m997dpfwgl.cloudfront.net/wp/2020/12/GettyImages-1150049038-1000x630.jpg"
                title={item.name}
              />
            );
          })
          :
           shimmerData.map((it, key) => (
            <View key={key}>
              <FlatList
                data={it.data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => {
                  return <CategoryLoader />;
                }}
              />
            </View>
          ))
        }
        </ScrollView>
        {data.length == 0
          ? shimmerData.map((it, key) => (
              <View key={key}>
                <HeadingLoader />
                <FlatList
                  data={it.data}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index}
                  renderItem={({item}) => {
                    return <MoviesLoader item={item} />;
                  }}
                />
              </View>
            ))
          : data.map((item1, key) => (
              <View key={key}>
                <View
                  style={{
                    marginHorizontal: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: colors.text,
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    {item1.name}
                  </Text>
                  <Pressable
                    onPress={() =>
                      Navigation.navigate('TypeData', {
                        id: item1.id,
                        name: item1.name,
                      })
                    }>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={colors.text}
                    />
                  </Pressable>
                </View>
                <FlatList
                  data={item1.data}
                  horizontal={true}
                  // style={styles.FlatStyle}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index}
                  renderItem={({item}) => {
                    return (
                      // item1.type ?
                      <RectengularCard
                        item={item}
                        faith={true}
                        listCardHeight={200}
                        listCardWidth={150}
                      />
                      // :
                      // <SquareCard item={item} />
                    );
                  }}
                />
              </View>
            ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SliderView: {
    paddingHorizontal: moderateScale(5),
  },
  textStyle: {
    fontSize: moderateScale(12),
    fontFamily: 'Lato-Bold',
  },
  TextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(7),
  },
});

export default React.memo(AllContent);
