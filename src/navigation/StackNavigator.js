import React from 'react';
import Splash from '../screen/Splash';
import Home from '../screen/Home/Home';
import Login from '../screen/Login/Login';
import Settings from '../screen/Settings/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PoojaList from '../screen/ECommerce/PoojaList';
import PoojaDetails from '../screen/ECommerce/PoojaDetails';
import RegisterPooja from '../screen/ECommerce/RegisterPooja';
import Terms from '../screen/Settings/Terms';
import PriceChange from '../screen/Settings/PriceChange';
import UpdateBankDetails from '../screen/Settings/UpdateBankDetails';
import DownloadForm16A from '../screen/Settings/DownloadForm16A';
import PhotoGallery from '../screen/Settings/PhotoGallery';
import ReferAnAstrologer from '../screen/Settings/ReferAnAstrologer';
import UpdateNumber from '../screen/Settings/UpdateNumber';
import PriceChangeRequest from '../screen/Settings/PriceChangeRequest';
import CallHistory from '../screen/History/CallHistory';

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

    </Stack.Navigator>
  );
};

export default StackNavigator;
