import {
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Colors } from '../assets/style';
import { SCREEN_WIDTH } from '../config/Screen';
import LinearGradient from 'react-native-linear-gradient';
import MyStatusBar from '../component/common/MyStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation, route }) => {
  
  useEffect(() => {
    setTimeout(() => {
      navigate();
    }, 2000);
  }, []);

  const navigate = async () => {
    let providerData = await AsyncStorage.getItem('userData');
    let data = JSON.parse(providerData);
    if (data) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("login");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <LinearGradient
        colors={[Colors.primaryLight, Colors.primaryDark]}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../assets/videos/splash.gif')}
          style={{ width: SCREEN_WIDTH * 0.9, height: SCREEN_WIDTH * 0.9 }}
        />
      </LinearGradient>
    </View>
  );
};

const mapStateToProps = state => ({
  chatRequestData: state.chat.chatRequestData
})

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Splash);


