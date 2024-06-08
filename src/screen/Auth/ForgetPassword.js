import React from 'react';
import { Colors, Fonts, } from '../../assets/style';
import { SCREEN_HEIGHT } from '../../config/Screen';
import MyHeader from '../../component/common/MyHeader';
import LinearGradient from 'react-native-linear-gradient';
import { Image, Text, FlatList, View } from 'react-native';
import MyStatusBar from '../../component/common/MyStatusBar';

const ForgetPassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title="Forget Password" navigation={navigation} />
      <LinearGradient
        colors={[Colors.primaryLight, Colors.primaryDark]}
        style={{ flex: 1, backgroundColor: Colors.primaryDark }}>
        <FlatList ListHeaderComponent={<>{user()}</>} />
      </LinearGradient>
    </View>
  );

  function user() {
    return (
      <View
        style={{
          height: SCREEN_HEIGHT * 0.7,
          width: '100%',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/images/user.png')}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            ...Fonts.primaryLight15RobotoMedium,
            fontSize: 20,
            color: Colors.white,
            marginTop: 50,
            textAlign: "center"
          }}>
          Please contact to the admin support at
        </Text>
        <Text style={{
          ...Fonts.primaryLight15RobotoMedium,
          fontSize: 20,
          color: Colors.white,
          textAlign: 'center'
        }}>contact@fortunetalk.co.in</Text>
      </View>
    );
  }
};

export default ForgetPassword;
