import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';
import {SocketProvider} from './src/context/socket';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthProvider>
        <NavigationContainer>
          <SocketProvider>
            <StackNavigator />
          </SocketProvider>
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
}

export default App;
