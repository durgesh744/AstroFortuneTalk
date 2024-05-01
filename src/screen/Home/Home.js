import { useState } from 'react';
import { Colors } from '../../assets/style';
import Loader from '../../component/Loader';
import Offer from '../../component/Home/Offer/Offer';
import MyStatusBar from '../../component/MyStatusBar';
import Header from '../../component/Home/Header/Header';
import AstriInfo from '../../component/Home/AstriInfo/AstriInfo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Performance from '../../component/Home/Performance/Performance';
import GoForPolicies from '../../component/Home/GoForPolicies/GoForPolicies';
import HomeBannerInfo from '../../component/Home/HomeBannerInfo/HomeBannerInfo';
import ChatCallStatusInfo from '../../component/Home/ChatCallStatusInfo/ChatCallStatusInfo';
import TrandingInfoOnOf from '../../component/Home/TrandingInfoOnOf/TrandingInfoOnOf';
import { ScrollView } from 'react-native';
import GoLiveNowInfo from '../../component/Home/GoLiveNowInfo/GoLiveNowInfo';

const Home = ({ navigation, route }) => {

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

  // const handleLogout = () => {
  //   AsyncStorage.removeItem("user")
  //   navigation.navigate("login")
  // }

  const {
    isLoading,
    bannerData
  } = state;



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryDark}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <Header />
      <ScrollView>

        <AstriInfo />
        <GoForPolicies />
        <Performance />
        <Offer />
        {/* <HomeBannerInfo/> */}
        <ChatCallStatusInfo />
        <TrandingInfoOnOf />
        <GoLiveNowInfo />
        
      </ScrollView>
      {/* <Button title={"Logout"} onPress={handleLogout} /> */}
      {/* <AcceptChat navigation={navigation} /> */}
    </GestureHandlerRootView>
  )
}

export default Home
