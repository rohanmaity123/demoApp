import { ScrollableTab, Tab, Tabs } from 'native-base';
import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TvShoesHeader from '../../Components/Header/TvShowsHeader';
import AllTypeContent from '../../Components/Ott/AllTypeContent';
import { COLORS } from '../../Constants/Colors';
import TabStyle from '../../Components/TabStyle';
import OttService from '../../Service/OttService';
import Toast from 'react-native-simple-toast'
import { moderateScale } from '../../PixelRatio';


const {height,width} = Dimensions.get('window');

export default function OttSearch(props) {

    const [search, setsearch] = React.useState([]);
    const [searched, setsearched] = React.useState(false);

    React.useEffect(() => {
      return () => null;
    }, [props,search]);


    const searchNow = async (data3) => {
      setsearched(false);
      let data = {
          "keyword": data3
      }
      Toast.show('Searching result..',Toast.SHORT)
      let result = await OttService.getOttSearch(data);
      console.log("keyword",JSON.stringify(result));
      if (result && result.status) {
        setsearch(result.data);
        setsearched(false);
      }else{
        setsearched(true);
      }
  }
  
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#191926" barStyle="light-content" />
        <TvShoesHeader 
        apisearchData={(data)=> searchNow(data)}
        />
      {searched == true && search.length == 0 ?  
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../Assets/gif/nodata.gif')}
            style={{ width: moderateScale(220), height: moderateScale(220) }}
          />
        </View>
        :
       <ScrollView>
           
        <Tabs
            renderTabBar={() => <ScrollableTab style={TabStyle.scrollableTab} />}
            tabBarUnderlineStyle={TabStyle.tabBarUnderlineStyle}
            tabContainerStyle={TabStyle.tabContainerStyle}
            locked={true}
          >
            {search.map((it, key) =>
             it.data && it.data.length > 0 ?
              <Tab
                heading={it.name}
                activeTextStyle={TabStyle.activeTabStyle}
                textStyle={TabStyle.textStyle}
                activeTabStyle={TabStyle.activeTabStyle}
                tabStyle={TabStyle.tabStyle}
                key={key}>
                <AllTypeContent 
                hidebanner={true}
                data={it.data} />
              </Tab> : null
            )}

          </Tabs>

       </ScrollView>
      }
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.themecolor,
  },
  HeaderView: {
    height: hp('10%'),
    width: width,
    alignSelf: 'center',
    borderWidth: 4,
  },
  TabStyle: {
    width: '25%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#af4cdb',
    backgroundColor: COLORS.HeaderColor,
  },
  totalView: {
    // height:hp('90%'),
    // width:width,
    flex: 1,
  },
});
