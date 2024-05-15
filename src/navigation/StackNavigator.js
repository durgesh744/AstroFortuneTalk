import React from 'react';
import Terms from '../screen/Terms';
import Splash from '../screen/Splash';
import Home from '../screen/Home/Home';
import Login from '../screen/Login/Login';
import Settings from '../screen/Settings';
import ChatScreen from '../screen/ChatScreen';
import PriceChange from '../screen/PriceChange';
import UpdateNumber from '../screen/UpdateNumber';
import PriceChangeRequest from '../screen/PriceChangeRequest';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UpdateBankDetails from '../screen/UpdateBankDetails';
import DownloadForm16A from '../screen/DownloadForm16A';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{ headerShown: false }}>

      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="updateNumber" component={UpdateNumber} />
      <Stack.Screen name="terms" component={Terms} />
      <Stack.Screen name="priceRequest" component={PriceChangeRequest} />
      <Stack.Screen name="priceChange" component={PriceChange} />
      <Stack.Screen name="updateBankDetails" component={UpdateBankDetails} />
      <Stack.Screen name="downloadForm16A" component={DownloadForm16A} />

    </Stack.Navigator>
  );
};

export default StackNavigator;
