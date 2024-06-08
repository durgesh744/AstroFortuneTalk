import { useState } from 'react';
import { tabsData } from '../../config/Data';
import Loader from '../../component/Loader';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground
} from 'react-native';
import { Colors, Sizes, Fonts } from '../../assets/style';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Screen';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import AstriInfo from './component/AstriInfo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TrandingInfo from './component/TrandingInfo';
import ChatCallStatus from './component/ChatCallStatus';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MarketingOffer from './component/MarketingOffer';
import MyStatusBar from '../../component/MyStatusBar';
import HomeHeader from './component/HomeHeader';
import GoLiveNow from './component/GoLiveNow';
import FortuneStore from './component/FortuneStore';
import ScheduleCourse from './component/ScheduleCourse';
import SendView from './component/SendView';

const Home = ({ navigation }) => {

  const [state, setState] = useState({
    isLoading: false,
    moa: true,
    nextOnlineChatDate: null,
    nextOnlineChatTime: null,
    nextOnlineCallDate: null,
    nextOnlineCallTime: null,
    callTrendingStatus: false,
    chatTrendingStatus: false,
    trainingVedioData: null,
    bannerData: null,
    rating: 3,
    comments: '',
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryDark}
        barStyle={'light-content'}
      />
      <Loader visible={state.isLoading} />
      <HomeHeader />
      <FlatList
        scrollEnabled={true}
        ListHeaderComponent={
          <>
            <AstriInfo />
            {GoForPolicies()}
            {performance()}
            <MarketingOffer />
            {/* <BannerInfo/> */}
            <ChatCallStatus />
            <TrandingInfo />
            <GoLiveNow />
            <ScheduleCourse />
            <FortuneStore />
            {TabsInfo()}
            {noticeBoard()}
            {reportIssue()}
            <SendView />
          </>
        }
      />
    </GestureHandlerRootView>
  )

  function performance() {
    return (
      <View
        style={{
          marginTop: Sizes.fixPadding * 0.6,
          width: '100%',
          height: 130,
          paddingHorizontal: Sizes.fixPadding,
          paddingVertical: Sizes.fixPadding,
          backgroundColor: Colors.white,
        }}>
        <View style={{ borderRadius: Sizes.fixPadding, overflow: 'hidden' }}>
          <ImageBackground
            source={require('../../assets/images/performance.png')}
            style={{
              height: '100%',
              width: '100%',
            }}
            resizeMode="cover">
            <LinearGradient
              colors={['rgba(255,255,255,0)', Colors.primaryDark]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              locations={[0.8, 1]}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'flex-end',
                padding: Sizes.fixPadding,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('performance')}>
                <AntDesign name="right" size={26} color={Colors.white} />
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
        </View>
      </View>
    );
  }

  function noticeBoard() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('privacy')}
        style={{
          padding: 18,
          backgroundColor: Colors.white,
          borderBottomWidth: 1,
          borderColor: Colors.blackLight + '60',
        }}>
        <View
          style={{
            backgroundColor: "#F9F1FF",
            borderRadius: 15,
            elevation: 3,
            paddingTop: 10,
            paddingBottom: 15,
            borderBottomWidth: 0.8,
            borderColor: Colors.blackLight + '60',
            marginTop: 2,
            gap: 15,
          }}>
          <View
            style={{
              paddingHorizontal: 20,
              display: "flex",
              flexDirection: 'row',
              justifyContent: "space-between",
              alignContent: 'center',
            }} >
            <Text style={{
              fontFamily: 'Roboto-Medium',
              color: Colors.black,
              fontSize: 16,
            }}>Notice Board!</Text>

            <Text style={{
              fontFamily: 'Roboto-Medium',
              color: Colors.primaryLight,
              fontSize: 12,
            }}>View History</Text>
          </View>

          <View style={{
            alignItems: "center",
          }} >
            <TextInput
              placeholder="Type here..."
              placeholderTextColor={Colors.gray3}
              multiline
              style={styles.txtInput}
            />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  function reportIssue() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('privacy')}
        style={{
          padding: 18,
          backgroundColor: Colors.white,
          borderBottomWidth: 1,
          borderColor: Colors.blackLight + '60',
        }}>
        <View
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: 15,
            elevation: 3,
            paddingTop: 10,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            paddingBottom: 15,
            borderBottomWidth: 0.8,
            borderColor: Colors.blackLight + '60',
            marginTop: 2,
            gap: 15,
          }}>
          <FontAwesome6 name="headset" color={Colors.grayDark} size={30} />
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              color: Colors.black,
              fontSize: 20,
            }}
          >
            Report an iusse here
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  function GoForPolicies() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('privacy')}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 18,
          backgroundColor: Colors.white,
        }}>
        <View
          style={{
            backgroundColor: Colors.primaryDark,
            height: SCREEN_HEIGHT * 0.12,
            borderRadius: 15,
            elevation: 10
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: SCREEN_WIDTH * 0.9,
              alignContent: 'center',
              padding: 15,
            }}>
            <View style={{ justifyContent: 'center' }}>
              <Image
                source={require('../../assets/icon/danger.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 25,
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  color: Colors.white,
                  fontSize: 20,
                  fontWeight: "800",
                }}>
                Important Policies
              </Text>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  color: Colors.white,
                  fontSize: 16,
                }}>
                (Please Read all the Policies )
              </Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <MaterialIcons name="keyboard-arrow-down" size={30} color={Colors.white} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function TabsInfo() {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(item.navigate_to)}
          style={{
            width: SCREEN_WIDTH * 0.28,
            height: SCREEN_WIDTH * 0.22,
            backgroundColor: Colors.primaryLight,
            marginBottom: Sizes.fixPadding,
            marginRight: SCREEN_WIDTH * 0.04,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: Sizes.fixPadding * 2,
            elevation: 8,
          }}>
          <Image
            source={item.icon}
            style={{
              width: SCREEN_WIDTH * 0.08,
              height: SCREEN_WIDTH * 0.08,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              ...Fonts.white14RobotoMedium,
              marginTop: Sizes.fixPadding * 0.5,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View
        style={{
          backgroundColor: Colors.primaryDark,
          paddingVertical: SCREEN_WIDTH * 0.04,
          paddingLeft: SCREEN_WIDTH * 0.04,
        }}>
        <FlatList
          data={tabsData}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={item => item.id}
          columnWrapperStyle={{ justifyContent: 'center' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txtInput: {
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 15,
    borderColor: Colors.black,
    height: 70,
    ...Fonts.black14RobotoRegular,
    textAlignVertical: 'top',
    width: "90%",
  },
});

export default Home
