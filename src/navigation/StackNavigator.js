import React from 'react';
import Splash from '../screen/Splash';
import Home from '../screen/home/Home';
import Profile from '../screen/Profile';
import Pooja from '../screen/Pooja/Pooja';
import Terms from '../screen/Settings/Terms';
import Remedy from '../screen/Remedy/Remedy';
import Settings from '../screen/Settings/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PoojaList from '../screen/ECommerce/PoojaList';
import PoojaDetails from '../screen/ECommerce/PoojaDetails';
import RegisterPooja from '../screen/ECommerce/RegisterPooja';
import PriceChange from '../screen/Settings/PriceChange';
import UpdateBankDetails from '../screen/Settings/UpdateBankDetails';
import DownloadForm16A from '../screen/Settings/DownloadForm16A';
import PhotoGallery from '../screen/Settings/PhotoGallery';
import ReferAnAstrologer from '../screen/Settings/ReferAnAstrologer';
import UpdateNumber from '../screen/Settings/UpdateNumber';
import PriceChangeRequest from '../screen/Settings/PriceChangeRequest';
import CallHistory from '../screen/History/CallHistory';
import AddRemedy from '../screen/Remedy/AddRemedy';
import Astromall from '../screen/ECommerce/Astromall';
import ChatHistory from '../screen/History/ChatHistory';
import WalletHistory from '../screen/History/WalletHistory';
import ScheduledList from '../screen/ECommerce/ScheduledList';
import BookingDetails from '../screen/ECommerce/BookingDetails';
import UploadEcommerce from '../screen/ECommerce/UploadEcommerce';
import PoojaHistory from '../screen/ECommerce/PoojaHistory';
import HistoryDetails from '../screen/ECommerce/HistoryDetails';
import CourseList from '../screen/Courses/CourseList';
import AddCourseDetails from '../screen/Courses/AddCourseDetails';
import Followers from '../screen/Followers';
import Products from '../screen/ECommerce/Products';
import Reviews from '../screen/Reviews';
import Offer from '../screen/Offer';
import WaitList from '../screen/WaitList';
import LiveEvent from '../screen/LiveEvent';
import SupportChat from '../screen/SupportChat/SupportChat';
import Login from '../screen/Auth/Login';
import SupportChatScreen from '../screen/SupportChat/SupportChatScreen';
import Performance from '../screen/Performance';
import ForgetPassword from '../screen/Auth/ForgetPassword';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{ headerShown: false }}>
        
      <Stack.Screen name="waitList" component={WaitList} />
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="updateNumber" component={UpdateNumber} />
      <Stack.Screen name="terms" component={Terms} />
      <Stack.Screen name="priceRequest" component={PriceChangeRequest} />
      <Stack.Screen name="priceChange" component={PriceChange} />
      <Stack.Screen name="updateBankDetails" component={UpdateBankDetails} />
      <Stack.Screen name="downloadForm16A" component={DownloadForm16A} />
      <Stack.Screen name="photoGallery" component={PhotoGallery} />
      <Stack.Screen name="referAnAstrologer" component={ReferAnAstrologer} />
      <Stack.Screen name="poojaList" component={PoojaList} />
      <Stack.Screen name="poojaDetails" component={PoojaDetails} />
      <Stack.Screen name="registerPooja" component={RegisterPooja} />
      <Stack.Screen name="callHistory" component={CallHistory} />

      <Stack.Screen name="Remedy" component={Remedy} />
      <Stack.Screen name="addRemedy" component={AddRemedy} />

      <Stack.Screen name="astromall" component={Astromall} />
      <Stack.Screen name="chatHistory" component={ChatHistory} />
      <Stack.Screen name="walletHistory" component={WalletHistory} />
      <Stack.Screen name="pooja" component={Pooja} />
      <Stack.Screen name="bookingDetails" component={BookingDetails} />
      <Stack.Screen name="uploadEcommerce" component={UploadEcommerce} />
      <Stack.Screen name="poojaHistory" component={PoojaHistory} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="historyDetails" component={HistoryDetails} />
      <Stack.Screen name="scheduledList" component={ScheduledList} />

      <Stack.Screen name="courseList" component={CourseList} />
      <Stack.Screen name="addCourseDetails" component={AddCourseDetails} />
      <Stack.Screen name="Followers" component={Followers} />
      <Stack.Screen name="products" component={Products} />
      <Stack.Screen name="ReviwList" component={Reviews} />
      <Stack.Screen name="Offer" component={Offer} />
      <Stack.Screen name="LiveEvent" component={LiveEvent} />
      <Stack.Screen name="SupportChat" component={SupportChat} />
      <Stack.Screen name="supportChatScreen" component={SupportChatScreen} />
      <Stack.Screen name="performance" component={Performance} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />

    </Stack.Navigator>
  );
};

export default StackNavigator;

