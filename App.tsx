import React from 'react';
import {SafeAreaView} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  );
}

export default App;
