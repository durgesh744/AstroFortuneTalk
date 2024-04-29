import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Sizes, Colors, Fonts } from '../assets/style';
import MyStatusBar from '../component/MyStatusBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {
  api_url,
  update_intake_status,
} from '../config/Constants';
import { useFocusEffect } from '@react-navigation/native';
import Loader from '../component/Loader';
import { useGetGroupChatDetails } from '../hooks/chat';

const { width, height } = Dimensions.get('screen');

const AcceptChat = ({ navigation, route, providerData }) => {

  const [message] = useState(route?.params?.message);
  const [isLoading, setIsLoading] = useState(false);
  const { handleChat, chat } = useGetGroupChatDetails()


  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp()
        return true
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    }, [])
  );

  const accept_request = async (status1, status2) => {
    setIsLoading(true);
    await axios({
      method: 'post',
      url: api_url + update_intake_status,
      data: {
        request_id: providerData?.id,
        requested_user: message?.user_id,
        request_status: status1,
      },
    })
      .then(async res => {
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  console.log(chat)

  const handleChatWithUser = () => {
    console.log("662a2069efa3d158a4f936ef")
    handleChat("662a2069efa3d158a4f936ef")
    if (chat.length > 0) {
      navigation.navigate("chat", {
        chatId: chat[0]?._id,
        members: chat[0]?.members
      })
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <LinearGradient
        colors={[Colors.primaryLight, Colors.primaryDark]}
        style={{
          borderRadius: Sizes.fixPadding,
        }}>
        <ImageBackground
          source={require('../assets/images/ChatBackground.png')}
          resizeMode="cover"
          style={{ height: height }}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 0.3,

                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Image
                source={{ uri: message?.profile_pic }}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 1000,
                }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flex: 0.3,
                alignItems: 'center',
                marginHorizontal: Sizes.fixPadding,
              }}>
              <Text
                style={{
                  ...Fonts.white18RobotBold,
                  fontSize: 24,
                  fontWeight: '600',
                  marginVertical: Sizes.fixPadding,
                }}>
                {message?.username}
              </Text>
              <Text
                style={{
                  ...Fonts.white18RobotMedium,
                  color: Colors.dullWhite,

                  marginVertical: Sizes.fixPadding * 2.0,
                }}>
                Please accept chat request
              </Text>
              <Image
                source={require('../assets/images/user.png')}
                style={{
                  width: height * 0.1,
                  height: height * 0.1,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  ...Fonts.while22RighteousRegular,

                  fontWeight: '600',
                }}>
                FortuneTalk
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,

                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => handleChatWithUser()}

                style={{
                  backgroundColor: Colors.lightGreen,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  padding: Sizes.fixPadding + 5,
                  borderRadius: 40,
                  paddingHorizontal: Sizes.fixPadding * 4.5,
                  alignSelf: 'center',
                }}>
                <Ionicons
                  name="chatbubble-ellipses"
                  size={32}
                  color={Colors.white}
                />

                <Text
                  style={{
                    ...Fonts.white18RobotMedium,
                    fontSize: 24,
                    marginHorizontal: Sizes.fixPadding - 5,
                    textAlign: 'center',
                  }}>
                  Start Chat
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => accept_request('REJECTED', 'Reject')}
                style={{
                  backgroundColor: Colors.red,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  padding: Sizes.fixPadding - 2,
                  borderRadius: 40,
                }}>
                <Entypo name="cross" size={30} color={Colors.white} />

                <Text
                  style={{
                    ...Fonts.white18RobotMedium,
                    fontSize: 22,
                    marginHorizontal: Sizes.fixPadding - 5,
                    textAlign: 'center',
                  }}>
                  Reject Chat
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default AcceptChat;
