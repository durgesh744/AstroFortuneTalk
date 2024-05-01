import { useState } from 'react';
import { Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from '../../assets/style';
import MyStatusBar from '../../component/MyStatusBar';
import Loader from '../../component/Loader';
import Header from '../../component/Home/Header/Header';
import AstriInfo from '../../component/Home/AstriInfo/AstriInfo';
import GoForPolicies from '../../component/Home/GoForPolicies/GoForPolicies';
import Performance from '../../component/Home/Performance/Performance';
import Offer from '../../component/Home/Offer/Offer';

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
      <AstriInfo />
      <GoForPolicies />
      <Performance />
      <Offer />
      {/* <Button title={"Logout"} onPress={handleLogout} /> */}
      {/* <AcceptChat navigation={navigation} /> */}
    </GestureHandlerRootView>
  )
}

export default Home
