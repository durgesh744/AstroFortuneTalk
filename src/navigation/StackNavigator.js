import React from 'react';
import Splash from '../screen/Splash';
import Home from '../screen/Home/Home';
import Profile from '../screen/Profile';
import Login from '../screen/Login/Login';
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
import KundliCategory from '../screen/Kundli/KundliInfo';
import AddRemedy from '../screen/Remedy/AddRemedy';
import Astromall from '../screen/ECommerce/Astromall';
import ChatHistory from '../screen/History/ChatHistory';
import WalletHistory from '../screen/History/WalletHistory';
import ScheduledList from '../screen/ECommerce/ScheduledList';
import BookingDetails from '../screen/ECommerce/BookingDetails';
import UploadEcommerce from '../screen/ECommerce/UploadEcommerce';
import PoojaHistory from '../screen/ECommerce/PoojaHistory';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{ headerShown: false }}>

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

      <Stack.Screen name="kundliInfo" component={KundliCategory} />
      <Stack.Screen name="Remedy" component={Remedy} />
      <Stack.Screen name="addRemedy" component={AddRemedy}/>

      <Stack.Screen name="astromall" component={Astromall} />
      <Stack.Screen name="chatHistory" component={ChatHistory} />
      <Stack.Screen name="walletHistory" component={WalletHistory} />
      <Stack.Screen name="pooja" component={Pooja}/>
      <Stack.Screen name="scheduledList" component={ScheduledList} />
      <Stack.Screen name="bookingDetails" component={BookingDetails} />
      <Stack.Screen name="uploadEcommerce" component={UploadEcommerce} />
      <Stack.Screen name="poojaHistory" component={PoojaHistory} />
      <Stack.Screen name="profile" component={Profile} />

    </Stack.Navigator>
  );
};

export default StackNavigator;

