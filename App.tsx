import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Provider store={store}> */}
        <AuthProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </AuthProvider>
      {/* </Provider> */}
    </SafeAreaView>
  );
}

export default App;
