import React from 'react';
import {SafeAreaView} from 'react-native';
import {AuthProvider} from './src/context/AuthContext';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import { setTopLevelNavigator } from './src/utils/navigationServices';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthProvider>
        <NavigationContainer ref={ref => setTopLevelNavigator(ref)} >
          <StackNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
}

export default App;
