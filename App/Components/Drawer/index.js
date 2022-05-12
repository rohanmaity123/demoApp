import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Pressable, Platform} from 'react-native';
import {ListItem, Left, Body, Button, Icon} from 'native-base';
import NavigationService from '@Service/Navigation';
import {COLORS} from '../../Constants/Colors';
import {connect} from 'react-redux';
import Auth from '../../Service/Auth';
import {clearLogData} from '../../Store/action';
import Navigation from '../../Service/Navigation';

function DrawerContent(props) {
  const data = [
    {
      name: 'My Profile',
      path: 'MyProfile',
      iconName: 'user-circle-o',
      iconType : 'FontAwesome'
    },
    {
      img: require('../../Assets/crown.png'),
      name: 'My Card',
      path: 'MyCard',
      iconName: 'creditcard',
      iconType : 'AntDesign'
    },
    // {
    //   img: require('../../Assets/BottomTab/Events_W.png'),
    //   name: 'Go Live',
    //   path: 'LiveVideo',
    //   iconName: 'live-tv',
    //   iconType : 'MaterialIcons'
    // },
    {
      img: require('../../Assets/BottomTab/Events_W.png'),
      name: 'Meeting',
      path: 'MeetingHome',
      iconName: 'solution1',
      iconType : 'AntDesign'
    },
    // {
    //   img: require('../../Assets/crown.png'),
    //   name: 'Private Meeting',
    //   path: 'PMeetingHistory',
    // 
    // },
    {
      img: require('../../Assets/crown.png'),
      name: 'Scanner',
      path: 'Scanner',
      iconName: 'qr-code-scanner',
      iconType : 'MaterialIcons'
    },
    {
      img: require('../../Assets/vector5.png'),
      name: 'Quiz',
      path: 'HomeQuize',
      iconName: 'trophy',
      iconType : 'Ionicons'
    },
    {
      img: require('../../Assets/vector5.png'),
      name: 'My Post',
      path: 'MyPost',
      iconName: 'rss-feed',
      iconType : 'MaterialIcons'
    },
    {
      img: require('../../Assets/crown.png'),
      name: 'Loyalty',
      path: 'ScrathCard',
      iconName: 'loyalty',
      iconType : 'MaterialIcons'
    },
    {
      img: require('../../Assets/crown.png'),
      name: 'Rewards',
      path: 'Winnings',
      iconName: 'gift',
      iconType : 'Ionicons'
    },
    // {
    //   img: require('../../Assets/Cart.png'),
    //   name: 'Cart',
    //   path: 'Cart',
    // },
    // {
    //   img: require('../../Assets/watchlist.png'),
    //   name: 'Wishlist',
    //   path: 'Wishlist',
    // },
    {
        img: require('../../Assets/subscription.png'),
        name: 'Subscription',
        path: 'UserSubscription',
        iconName: 'subscriptions',
        iconType : 'MaterialIcons'
    },
    {
      img: require('../../Assets/subscription.png'),
      name: 'My Orders',
      path: 'OrderHistory',
      iconName: 'order-bool-ascending',
      iconType : 'MaterialCommunityIcons'
    },
    {
      img: require('../../Assets/tc.png'),
      name: 'T&C',
      path: 'TermsConditions',
      iconName: 'book-information-variant',
      iconType : 'MaterialCommunityIcons'
    },
    {
      img: require('../../Assets/about.png'),
      name: 'About',
      path: 'About',
      iconName: 'ios-information-circle',
      iconType : 'Ionicons'
    },
    {
      img: require('../../Assets/invite_2.png'),
      name: 'Invite',
      path: 'EventEarn',
      iconName: 'user-plus',
      iconType : 'FontAwesome5'
    },
    {
      img: require('../../Assets/crown.png'),
      name: 'Log Out',
      path: 'Log Out',
      iconName: 'log-out',
      iconType : 'Ionicons',
      status: true,
    },
  ];
  const IosOffMenu = [
    {
      name: 'Scanner',
    },
  ];
  const logout = async () => {
    // alert();
    await Auth.logout();
    props.dispatch(clearLogData());
  };

  const goTo = item => {
    if (item.path == 'MeetingHome') {
      NavigationService.navigate(item.path, {meetId: null, deepLink: false});
    } else {
      NavigationService.navigate(item.path);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.themecolor}}>
      <View style={styles.ImgView}>
        <Image
          style={styles.proBack}
          source={{uri: props.userData.background}}
        />

        <Image style={styles.profileImg} source={{uri: props.userData.image}} />

        <Pressable
          style={styles.nameView}
          onPress={()=>Navigation.navigate('MyProfile')}>
          <Text style={styles.name} numberOfLines={1}>
            {props.userData.firstname} {props.userData.lastname}
          </Text>
          <View style={styles.circleRow}>
            <View style={styles.circleRow}>
              <Image
                style={styles.icon}
                source={require('../../Assets/more_two.png')}
              />
              <Text style={styles.count}>{props.loyalityPoint} Points</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <ScrollView style={{marginTop: 5}} showsVerticalScrollIndicator={false}>
        <View style={{paddingTop: 5}}>
        {/* {  
        props.userData.vip?
        <ListItem
                icon
                style={styles.menu}
                onPress={() => NavigationService.navigate('LiveVideo')}>
                <Left style={{paddingRight:10,marginLeft:10}}>
                  <Button transparent>
                    <Image style={styles.menuImg} source={item.img} />
                    <Icon 
                    style={{color:COLORS.white}}
                    name='live-tv' 
                    type='MaterialIcons' />
                  </Button>
                </Left>
                <Body style={styles.menuBody}>
                  <Text style={styles.menuName}>Go Live</Text>
                </Body>
              </ListItem>:null
      } */}
          {data.map((item, index) => {
            if (Platform.OS == "ios" && IosOffMenu.filter(it => it.name == item.name).length != 0) {
              return null;
            }
            return (
              <ListItem
                icon
                key={index}
                style={styles.menu}
                onPress={() => (item.status ? logout() : goTo(item))}>
                <Left style={{paddingRight:10,marginLeft:10}}>
                  <Button transparent>
                    {/* <Image style={styles.menuImg} source={item.img} /> */}
                    <Icon 
                    style={{color:COLORS.white}}
                    name={item.iconName} 
                    type={item.iconType} />
                  </Button>
                </Left>
                <Body style={styles.menuBody}>
                  <Text style={styles.menuName}>{item.name}</Text>
                </Body>
              </ListItem>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
const mapStateToProps = state => {
  // console.log("state", state)
  return {
    userData: state.User.userData,
    loyalityPoint: state.Loyalty.loyalityPoint,
  };
};

export default connect(mapStateToProps)(DrawerContent);
const styles = StyleSheet.create({
  ImgView: {
    height: 150,
    width : '95%'
  },
  proBack: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
  },
  profileImg: {
    width: 70,
    height: 70,
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    bottom: 10,
    left: 5,
  },
  nameView: {
    position: 'absolute',
    bottom: 15,
    left: 85,
    width: '85%',
  },
  name: {
    color: '#fff',
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    width: '78%',
    // backgroundColor:'red'
  },
  circleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    color: COLORS.yellow_text,
    marginLeft: 5,
    fontFamily: 'Lato-Light',
  },
  icon: {
    width: 12,
    height: 12,
  },
  levelView: {
    position: 'absolute',
    right: 10,
    top: 10,
    flexDirection: 'row',
  },
  levelIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  levelText: {
    fontFamily: 'Lato-Light',
    fontSize: 12,
    color: '#fff',
  },
  menu: {
    marginBottom: 3,
    backgroundColor: COLORS.box_theam,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  menuImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    // marginLeft: 10,
  },
  menuName: {
    fontFamily: 'Lato-Bold',
    color: '#fff',
    fontSize: 13,
  },
  menuBody: {
    borderColor: 'transparent',
  },
});
