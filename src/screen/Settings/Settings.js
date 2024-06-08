import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Loader from '../../component/Loader';
import { SCREEN_WIDTH } from '../../config/Screen';
import { settingsTabsData } from '../../config/Data';
import MyHeader from '../../component/MyHeader';
import { Colors, Sizes, Fonts } from '../../assets/style';
import MyStatusBar from '../../component/MyStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api_base_url, astrologer_logout } from '../../config/constants';
import { showToastWithGravityAndOffset } from '../../methods/toastMessage';
import { postRequest } from '../../utils/apiRequests';

const Settings = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showalert = title => {
    Alert.alert(title, `Are You sure to ${title}`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => logout() },
    ]);
  };

  const logout = async () => {
    setIsLoading(true);
    await postRequest({
      url: api_base_url + astrologer_logout
    })
      .then(res => {
        setIsLoading(false);
        cleardata()
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const cleardata = async () => {
    await AsyncStorage.clear();
    navigation.navigate('login');
    showToastWithGravityAndOffset("Logout Successfully")
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryDark}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <MyHeader title="Settings" navigation={navigation} />
      <View style={{ flex: 1, backgroundColor: Colors.primaryDark }}>
        <FlatList ListHeaderComponent={<>{tabsInfo({ navigation })}</>} />
      </View>
    </View>
  );

  function tabsInfo({ navigation }) {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            item.name == 'Logout'
              ? showalert(item.name)
              : item.name == 'Delete Account'
                ? showalert(item.name)
                : navigation.navigate(item.navigate_to)
          }
          style={{
            width: SCREEN_WIDTH * 0.28,
            height: SCREEN_WIDTH * 0.34,
            backgroundColor: Colors.primaryLight,
            marginBottom: Sizes.fixPadding,
            marginRight: SCREEN_WIDTH * 0.04,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: Sizes.fixPadding * 2,
            elevation: 8,
            justifyContent: 'center',
          }}>
          <Image
            source={item.icon}
            style={{
              width: SCREEN_WIDTH * 0.08,
              height: SCREEN_WIDTH * 0.08,
              resizeMode: 'contain',
              marginBottom: '8%',
            }}
          />
          <Text
            style={{
              ...Fonts.white14RobotoMedium,
              marginTop: Sizes.fixPadding * 0.5,
              textAlign: 'center'
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.primaryDark,
          paddingVertical: SCREEN_WIDTH * 0.04,
          paddingLeft: SCREEN_WIDTH * 0.04,
        }}>
        <FlatList
          data={settingsTabsData}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
};


export default Settings;
