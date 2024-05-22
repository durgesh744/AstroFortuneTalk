import { useState } from 'react';
import { FlatList } from 'react-native';
import { Colors } from '../../assets/style';
import Loader from '../../component/common/Loader';
import Offer from '../../component/ui/Home/Offer/Offer';
import Header from '../../component/ui/Home/Header/Header';
import TabsInfo from '../../component/ui/Home/TabsInfo/TabsInfo';
import SendView from '../../component/ui/Home/SendView/SendView';
import MyStatusBar from '../../component/ui/common/MyStatusBar';
import AstriInfo from '../../component/ui/Home/AstriInfo/AstriInfo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Performance from '../../component/ui/Home/Performance/Performance';
import GoForPolicies from '../../component/ui/Home/GoForPolicies/GoForPolicies';
import GoLiveNowInfo from '../../component/ui/Home/GoLiveNowInfo/GoLiveNowInfo';
import ScheduleCourse from '../../component/ui/Home/ScheduleCourse/ScheduleCourse';
import FortuneStoreInfo from '../../component/ui/Home/FortuneStoreInfo/FortuneStoreInfo';
import TrandingInfoOnOff from '../../component/ui/Home/TrandingInfoOnOff/TrandingInfoOnOff';
import TrainingReelsInfo from '../../component/ui/Home/TrainingReelsInfo/TrainingReelsInfo';
import ChatCallStatusInfo from '../../component/ui/Home/ChatCallStatusInfo/ChatCallStatusInfo';

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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryDark}
        barStyle={'light-content'}
      />
      <Loader visible={state.isLoading} />
      <Header />
      <FlatList
        scrollEnabled={true}
        ListHeaderComponent={
          <>
            <AstriInfo />
            <GoForPolicies />
            <Performance />
            <Offer />
            {/* <HomeBannerInfo/> */}
            <ChatCallStatusInfo />
            <TrandingInfoOnOff />
            <GoLiveNowInfo />
            <TrainingReelsInfo />
            <ScheduleCourse />
            <FortuneStoreInfo />
            <TabsInfo navigation={navigation} />
            <SendView />
          </>
        }
      />
    </GestureHandlerRootView>
  )
}

export default Home
