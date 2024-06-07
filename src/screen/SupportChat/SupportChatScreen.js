import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ImageBackground,
  BackHandler,
} from 'react-native';
import {connect} from 'react-redux';
import Loader from '../component/Loader';
import ImageView from '../component/ImageView';
import MyStatusBar from '../component/MyStatusBar';
import {Colors, Fonts, Sizes} from '../../assets/style';
import HistoryModal from '../component/Chat/HistoryModal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChatDetailes from '../component/SupportChat/ChatDetailes';
import InputMesaage from '../component/SupportChat/InputMesaage';
import React, {useEffect, useMemo, useState, useCallback} from 'react';
import {CommonActions, useFocusEffect} from '@react-navigation/native';

const SupportChatScreen = ({
  navigation
}) => {
  const [userData] = useState(null);
  const [chatData, setChatData] = useState(null);
  const memorizedChat = useMemo(() => chatData, [chatData]);
  const [uploadProgress, setUploadProgress] = useState(false);

  const [state, setState] = useState({
    userDetailes: null,
    taroatModalVisible: false,
    customerModalVisible: false,
    watingModalVisible: false,
    kundliModalVisible: false,
    basicKundliData: null,
    kundliDoshaData: null,
    panchangData: null,
    chartData: null,
    recentChatData: null,
    isLoading: false,
    tarotSelectionModalVisible: false,
    tarotType: 1,
    numerologyModalVisible: false,
    numerologyData: null,
    voiceUploading: false,
    imageUploading: false,
    imageVisible: false,
    imageViewData: null,
    startTime: '',
    inVoiceId: null,
    firebaseId: firebaseId,
  });

  useEffect(() => {
    get_firebase_id();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Confirm', 'Are you sure you want to go back?', [
          {text: "Don't leave", style: 'cancel', onPress: () => {}},
          {
            text: 'Yes, leave',
            style: 'destructive',
            onPress: () => go_home(), 
          },
        ]);
        return true;
      };
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, [navigation]),
  );

  const get_firebase_id = async () => {

  };

  const get_profile_pick = useCallback((type, options) => {

  }, []);

  const add_message = async ({image = null, type = 'text', message = ''}) => {
   
  };

  const go_home = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'home'}],
      }),
    );
  };

  const updateState = data => {
    setState(prevState => {
      const newData = {...prevState, ...data};
      return newData;
    });
  };

  const {
    watingModalVisible,
    recentChatData,
    isLoading,
    imageViewData,
    imageVisible,
  } = state;
  return (
    <View style={{flex: 1}}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />

      <Loader visible={isLoading} />
      {header()}

      <KeyboardAvoidingView keyboardVerticalOffset={64} style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/images/ChatBackground.png')}
          style={{width: '100%', height: '100%'}}>
          <ChatDetailes
            memorizedChat={memorizedChat}
            uploadProgress={uploadProgress}
            customerData={userData}
            firebaseId={firebaseId}
            updateState={updateState}
          />
          <InputMesaage
            setUploadProgress={setUploadProgress}
            add_message={add_message}
            get_profile_pick={get_profile_pick}
            setChatData={setChatData}
            firebaseId={firebaseId}
            updateState={updateState}
          />
        </ImageBackground>
      </KeyboardAvoidingView>

      <ImageView
        updateState={updateState}
        image={imageViewData}
        imageVisible={imageVisible}
      />

      <HistoryModal
        updateState={updateState}
        watingModalVisible={watingModalVisible}
        recentChatData={recentChatData}
      />
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
            Alert.alert('Alert!', 'Are you sure to leave your chat?', [
              {
                text: 'No',
                style: 'cancel',
              },
              {
                text: 'Yes',
                style: 'destructive',
                onPress: () => go_home(),
              },
            ]);
          }}
          style={{
            alignSelf: 'flex-start',
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
            flex: 1.5,
          }}>
          Support Chat
        </Text>
      </View>
    );
  }
};

const mapStateToProps = state => ({
  authData: state.authProvider.authData,
});

export default connect(mapStateToProps, null)(SupportChatScreen);

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
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.8, 
  },
});
