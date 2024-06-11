import {
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import {Colors, Sizes} from '../../assets/style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'react-native-image-picker';
import {api_url, upload_voice_image_pdf} from '../../config/Constants';

const MenuItems = ({
  navigation,
  setChatData,
  firebaseId,
  setUploadProgress,
  updateState,
  get_kundli_details,
  get_recents_chats,
  get_numerology_details,
  state,
  add_message,
  customer_profile,
  userData,
}) => {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        openCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err, 'requestCameraPermission');
    }
  };

  const openImageLibrary = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      quality: 1,
    }; // Add any camera options you need
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image library');
      } else if (response.errorCode) {
        console.log(response.errorCode, response.errorMessage, 'asdfghjk');
      } else {
        setChatData(prev => [
          {
            from: firebaseId,
            image: response.assets[0].uri,
            message: '',
            timestamp: new Date().getTime(),
            to: 'dsfnsdhfjhsdjfh',
            type: 'image',
            uploading: true,
          },
          ...prev,
        ]);
        uploadImageWithProgress(
          response.assets[0].uri,
          response.assets[0].fileName,
        );
      }
    });
  };

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      quality: 1,
    }; // Add any camera options you need
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled the camera');
      } else if (response.errorCode) {
        console.log('Error code:', response.errorCode);
        console.log('Error message:', response.errorMessage);
      } else {
        setChatData(prev => [
          {
            from: firebaseId,
            image: response.assets[0].uri,
            message: '',
            timestamp: new Date().getTime(),
            to: 'dsfnsdhfjhsdjfh',
            type: 'image',
            uploading: true,
          },
          ...prev,
        ]);
        uploadImageWithProgress(
          response.assets[0].uri,
          response.assets[0].fileName,
        );
      }
    });
  };

  const uploadImageWithProgress = async (imageUri, filename) => {
    try {
      await RNFetchBlob.fetch(
        'POST',
        api_url + upload_voice_image_pdf,
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          {
            name: 'image_file',
            filename: `${filename}.jpg`,
            type: 'jpg/png',
            data: RNFetchBlob.wrap(imageUri),
          },
        ],
      )
        .uploadProgress((written, total) => {
          console.log(written);
          console.log(total);
          setUploadProgress(written / total);
        })
        .then(response => {
          const data = JSON.parse(response.data);
          console.log('Audio uploaded successfully:', data);
          setUploadProgress(0);
          add_message({image: data.data, type: 'image'});
        })
        .catch(error => {
          console.error('Error uploading audio:', error);
        });

    } catch (e) {
      console.log(e);
    }
  };

  const {
    taroatModalVisible,
    customerModalVisible,
    watingModalVisible,
    kundliModalVisible,
    tarotSelectionModalVisible,
    numerologyModalVisible,
  } = state;

  return (
    <View
      style={{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Sizes.fixPadding,
        backgroundColor: '#F5F5F5',
      }}>
      <TouchableOpacity onPress={() => requestCameraPermission()}>
        <FontAwesome5 name="camera" size={22} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openImageLibrary()}
        style={{height: 24, width: 24}}>
        <Image
          source={require('../../assets/images/Gallery.png')}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => get_kundli_details()}
        style={{height: 24, width: 24}}>
        <Image
          source={require('../../assets/icon/kundli_icon.png')}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{height: 24, width: 24}}
        onPress={() =>
          navigation.navigate('Remedy', {
            customer_id: userData?.user_id,
          })
        }>
        <Image
          source={require('../../assets/images/phytotherapy.png')}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={get_numerology_details}
        style={{height: 24, width: 24}}>
        <Image
          source={require('../../assets/images/numerology.png')}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => updateState({taroatModalVisible: true})}
        style={{height: 24, width: 24}}>
        <Image
          source={require('../../assets/images/tarot-card.png')}
          style={{
            width: '100%',
            height: '100%',
            tintColor: taroatModalVisible ? Colors.primaryDark : null,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={customer_profile}
        style={{height: 24, width: 24}}>
        <Image
          source={require('../../assets/images/usericon.png')}
          style={{
            width: '100%',
            height: '100%',
            tintColor: customerModalVisible ? Colors.primaryDark : null,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={get_recents_chats}
        style={{height: 24, width: 24}}>
        <Image
          source={require('../../assets/images/restore.png')}
          style={{
            width: '100%',
            height: '100%',
            tintColor: watingModalVisible ? Colors.primaryDark : null,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={{height: 24, width: 24}}>
        <Image
          source={require('../../assets/images/language.png')}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default MenuItems;
