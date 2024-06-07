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
import { connect } from 'react-redux';
import { Colors, Fonts, Sizes } from '../../assets/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ImageView from '../../component/ui/ImageView';
import Loader from '../../component/common/Loader';
import MyStatusBar from '../../component/common/MyStatusBar';
import ChatDetailes from '../../component/ui/SupportChat/ChatDetailes';
import InputMesaage from '../../component/ui/SupportChat/InputMesaage';
import LinearGradient from 'react-native-linear-gradient';
import * as ImagePicker from 'react-native-image-picker';

const SupportChatScreen = ({
  navigation
}) => {
  const [userData] = useState(null);
  const [chatData, setChatData] = useState([]);
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
    firebaseId: 5647,
  });

  useEffect(() => {
    get_firebase_id();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Confirm', 'Are you sure you want to go back?', [
          { text: "Don't leave", style: 'cancel', onPress: () => { } },
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
    if (type == 'capture') {
      ImagePicker.launchCamera(options, res => {
        if (res.didCancel) {
          console.log('user cancel');
        } else if (res.errorCode) {
          console.log(res.errorCode);
        } else if (res.errorMessage) {
          console.log(res.errorMessage);
        } else {
          setChatData(prev => [
            {
              from: firebaseId,
              image: res.assets[0].uri,
              message: '',
              timestamp: new Date().getTime(),
              to: 'dsfnsdhfjhsdjfh',
              type: 'image',
              uploading: true,
            },
            ...prev,
          ]);
          handleImageUpload(res.assets[0].uri, res.assets[0].fileName);
        }
      });
    } else {
      ImagePicker.launchImageLibrary({ ...options, includeBase64: true }, res => {
        if (res.didCancel) {
          console.log('user cancel');
        } else if (res.errorCode) {
          console.log(res.errorCode);
        } else if (res.errorMessage) {
          console.log(res.errorMessage);
        } else {
          const selectedImage = res.assets[0];

          setChatData(prev => [
            {
              from: firebaseId,
              message: selectedImage.uri,
              timestamp: new Date().getTime(),
              to: 'dsfnsdhfjhsdjfh',
              type: 'image',
              uploading: true,
            },
            ...prev,
          ]);
          handleImageUpload(selectedImage.uri, selectedImage.fileName);
        }
      });
    }
  }, []);

  const add_message = async ({ image = null, type = 'text', message = '' }) => {
    setChatData(prev => [
      ...prev,
      {
        from: "DURGESH",
        message: image != null ? image : message,
        timestamp: new Date().getTime(),
        to: 'dsfnsdhfjhsdjfh',
        type: type,
      },
    ]);
  };

  const handleImageUpload = async (imageUri, filename) => {
    try {
      setUploading(true);

      await uploadImageWithProgress(imageUri, filename, progress => {
        setUploadProgress(progress);
      });

      setUploading(false);
      setUploadProgress(0);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const uploadImageWithProgress = async (imageUri, filename, onProgress) => {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const ref = storage().ref().child(`images/${filename}`);

    const metadata = {
      contentType: 'image/jpeg',
    };

    const task = ref.put(blob);
    task.on('state_changed', snapshot => {
      const progress = snapshot.bytesTransferred / snapshot.totalBytes;
      onProgress(progress);
    });

    await task;
    const downloadURL = await ref.getDownloadURL();
    add_message({ image: downloadURL, type: 'image', message: null });

    return downloadURL;
  };

  const go_home = () => {
    navigation.navigate("Home")
  };

  const updateState = data => {
    setState(prevState => {
      const newData = { ...prevState, ...data };
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
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />

      <Loader visible={isLoading} />
      {header()}

      <KeyboardAvoidingView keyboardVerticalOffset={64} style={{ flex: 1 }}>
        <LinearGradient
          colors={[Colors.primaryLight, Colors.primaryDark]}
        >
          <ImageBackground
            source={require('../../assets/images/ChatBackground.png')}
            style={{ width: '100%', height: '100%',}}>
            <ChatDetailes
              memorizedChat={memorizedChat}
              uploadProgress={uploadProgress}
              customerData={userData}
              firebaseId={45}
              updateState={updateState}
            />
            <InputMesaage
              setUploadProgress={setUploadProgress}
              add_message={add_message}
              get_profile_pick={get_profile_pick}
              setChatData={setChatData}
              firebaseId={54}
              updateState={updateState}
            />
          </ImageBackground>
        </LinearGradient>
      </KeyboardAvoidingView>


      <ImageView
        updateState={updateState}
        image={imageViewData}
        imageVisible={imageVisible}
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
