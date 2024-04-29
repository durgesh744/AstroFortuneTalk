import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import React, { useCallback, useEffect, useState, } from 'react';
import { Colors, Fonts, Sizes } from '../assets/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MyStatusBar from '../component/MyStatusBar';
import Loader from '../component/Loader';;
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = ({
  navigation,
  route,
}) => {
  const [userData] = useState(route?.params?.customerData);
  const [chatData, setChatData] = useState(null);

  const [messages, setMessages] = useState([])

  const onSend = useCallback((messages = []) => {
    if (messages.length > 0) {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      )
      // let message = messages[0].text
      // socket.emit(NEW_MESSAGE, { chatId, members, message })
    }
  }, [])

  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const go_home = () => {
  }

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />

      {/* <Loader visible={isLoading} /> */}
      {header()}

      <KeyboardAvoidingView keyboardVerticalOffset={64} style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/images/ChatBackground.png')}
          style={{ width: '100%', height: '100%' }}>
          <GiftedChat
            alwaysShowSend
            messages={messages}
            onSend={messages => onSend(messages)}
            scrollToBottom
            user={{
              _id: 1,
              // avatar: img_url_2 + providerData?.img_url,
              // name: providerData?.owner_name,
            }}
          />
        </ImageBackground>
      </KeyboardAvoidingView>

    </View>
  );

  function header() {
    return (
      <View
        style={{
          padding: Sizes.fixPadding * 1.5,
          ...styles.row,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            go_home();
          }}
          style={{
            alignSelf: 'flex-start',
            flex: 0.1,
          }}>
          <AntDesign
            name="leftcircleo"
            color={Colors.primaryDark}
            size={Sizes.fixPadding * 2.2}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...Fonts.white16RobotoMedium,
            textAlign: 'center',
            color: Colors.primaryDark,
            flex: 0.6,
          }}>
          {userData?.username}
        </Text>
        <TouchableOpacity
          onPress={() => end_chat()}
          style={{
            width: '20%',
            backgroundColor: Colors.red2,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 6,
          }}>
          <Text style={{ ...Fonts.white12RobotoRegular }}>End Chat</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default ChatScreen;

const styles = StyleSheet.create({
  row: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.grayLight,
    borderTopLeftRadius: Sizes.fixPadding * 4,
    elevation: 8,
  },
});
