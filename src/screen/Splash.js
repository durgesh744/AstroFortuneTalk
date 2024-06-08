import {
  View,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '../assets/style';
import MyStatusBar from '../component/MyStatusBar.js';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import * as AuthActions from '../redux/actions/authActions.js'
import LottieView from "lottie-react-native";

const Splash = ({ navigation, dispatch }) => {

  useEffect(() => {
    setTimeout(() => {
      navigate();
    }, 2000);
  }, []);

  const navigate = async () => {
    let providerData = await AsyncStorage.getItem('userData');
    let data = JSON.parse(providerData);
    dispatch(AuthActions.setAuthData(data))
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
        <LottieView
          source={require('../assets/animations/test.json')}
          style={{ width: "100%", height: "100%" }}
          autoPlay
          loop
        />
      </LinearGradient>
    </View>
  );
};

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Splash)

