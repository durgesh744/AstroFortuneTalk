import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import React, { useState, useEffect } from 'react';
import { Colors, Fonts } from '../../assets/style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  api_url,
  delete_gallery_photo_status,
  get_gallery_photo,
  update_gallery_photo_status,
  upload_gallery_photo,
} from '../../config/constants';
import RNFetchBlob from 'rn-fetch-blob';
import { SCREEN_WIDTH } from '../../config/Screen';
import Loader from '../../component/Loader';
import MyHeader from '../../component/MyHeader';
import MyStatusBar from '../../component/MyStatusBar';
import CustomSwitch from '../../component/CustomSwitch';

const PhotoGallery = ({ navigation, authData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [galleryPhotos, setGalleryPhotos] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const CameraActions = [
    {
      title: 'Camera',
      type: 'capture',
      options: {
        maxWidth: 300,
        maxHeight: 300,
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.2,
      },
    },
    {
      title: 'Gallary',
      type: 'library',
      options: {
        maxWidth: 300,
        maxHeight: 300,
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.2,
      },
    },
  ];

  useEffect(() => {
    fetch_Gallery_Photo();
  }, []);

  const get_profile_pick = useCallback((type, options) => {
    if (type == 'capture') {
      ImagePicker.launchCamera(options, res => {
        setModalVisible(false);
        if (res.didCancel) {
          console.log('user cancel');
        } else if (res.errorCode) {
          console.log(res.errorCode);
        } else if (res.errorMessage) {
          console.log(res.errorMessage);
        } else {
          uploadPhoto(res.assets[0].uri, res.assets[0].fileName);
        }
      });
    } else {
      ImagePicker.launchImageLibrary(options, res => {
        setModalVisible(false);
        if (res.didCancel) {
          console.log('user cancel');
        } else if (res.errorCode) {
          console.log(res.errorCode);
        } else if (res.errorMessage) {
          console.log(res.errorMessage);
        } else {
          uploadPhoto(res.assets[0].uri, res.assets[0].fileName);
        }
      });
    }
  }, []);

  const uploadPhoto = async (imageUri, filename) => {
    setIsLoading(true);
    RNFetchBlob.fetch(
      'POST',
      api_url + upload_gallery_photo,
      {
        'Content-Type': 'multipart/form-data',
      },
      [
        { name: 'astrologer_id', data: authData.astrologer._id },
        {
          name: 'image',
          filename: `${filename}`,
          type: 'jpg/png',
          data: RNFetchBlob.wrap(imageUri),
        },
      ],
    )
      .then(async res => {
        var resposne = JSON.parse(res.data);
        if (resposne.status) {
          setIsLoading(false);
          fetch_Gallery_Photo();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetch_Gallery_Photo = async () => {
    setIsLoading(true);
    await axios({
      method: 'post',
      url: api_url + get_gallery_photo,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: {
        astrologer_id: authData.astrologer._id ,
      },
    })
      .then(async res => {
        if (res.data?.status) {
          setGalleryPhotos(res.data.data);
          setIsLoading(false);
        } else {
          setGalleryPhotos(null);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const change_status = async (image_id, image_status) => {
    setIsLoading(true);
    var status = image_status === true ? 0 : 1;
    await axios({
      method: 'post',
      url: api_url + update_gallery_photo_status,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: {
        id: image_id,
        status: status,
      },
    })
      .then(async res => {
        if (res.data?.status) {
          fetch_Gallery_Photo();
          setIsLoading(false);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const delete_photo = async image_id => {
    setIsLoading(true);
    await axios({
      method: 'post',
      url: api_url + delete_gallery_photo_status,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: {
        id: image_id,
      },
    })
      .then(async res => {
        if (res.data?.status) {
          fetch_Gallery_Photo();
          setIsLoading(false);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title="Photo Gallery" navigation={navigation} />
      <Loader visible={isLoading} />
      <View style={{ flex: 0.8 }}>{photosList()}</View>
      <View style={{ flex: 0.1 }}>{notelabel()}</View>
      <View style={{ flex: 0.1 }}>{button()}</View>
    </View>
  );

  function photosList() {
    const renderItem = ({ item }) => {
      var image_status = item.status === '1' ? true : false;
      return (
        <View style={{ width: SCREEN_WIDTH * 0.48, marginBottom: 20, justifyContent: 'space-between' }}>
          <View style={styles.container}>
            <Image
              resizeMode='stretch'
              style={{
                height: '100%',
                width: '100%',
              }}
              source={{ uri: item.url }}
            />
          </View>
          <View style={styles.eventbox}>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={[Fonts.grayDark14RobotoMedium]}>Verify</Text>
              <Image
                style={{ width: 15, height: 15 }}
                source={require('../../assets/icon/verify.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '50%',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <CustomSwitch
                active={image_status}
                change_status={() => change_status(item.id, image_status)} />

              <TouchableOpacity onPress={() => delete_photo(item.id)}>
                <AntDesign name="delete" size={15} color={Colors.gray} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    };

    return (
      <View style={{ paddingHorizontal: 10 }}>
        {galleryPhotos !== null ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={galleryPhotos}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text
            style={{
              paddingVertical: 20,
              ...Fonts.primaryLight14RobotoRegular,
              textAlign: 'center',
            }}>
            No Photos Found.
          </Text>
        )}
      </View>
    );
  }

  function notelabel() {
    return (
      <View
        style={{
          width: SCREEN_WIDTH * 1,
          backgroundColor: Colors.backgr_clr,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: SCREEN_WIDTH * 0.05,
          paddingVertical: SCREEN_WIDTH * 0.03,
        }}>
        <Text style={[Fonts.black12RobotoRegular, { textAlign: 'center' }]}>
          Admin takes upto 7 days to approve the image. Your image shall be
          visible to customers when you enable at least 3 images
        </Text>
      </View>
    );
  }

  function button() {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '70%',
            borderRadius: SCREEN_WIDTH * 0.1,
            justifyContent: 'center',
            backgroundColor: Colors.primaryDark,
            paddingVertical: SCREEN_WIDTH * 0.04,
            marginTop: SCREEN_WIDTH * 0.02,
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={[Fonts.white16RobotoMedium, { textAlign: 'center' }]}>
            {' '}
            + Upload Image
          </Text>
        </TouchableOpacity>
        <Modal
          isVisible={modalVisible}
          useNativeDriver={true}
          style={{ padding: 0, margin: 0 }}
          hideModalContentWhileAnimating={true}
          onBackdropPress={() => setModalVisible(false)}>
          <View
            style={{
              flex: 0,
              width: '100%',
              backgroundColor: Colors.whiteDark,
              padding: 20,
              position: 'absolute',
              bottom: 0,
            }}>
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              {CameraActions.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => get_profile_pick(item.type, item.options)}
                  style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons
                    name={item.title == 'Camera' ? 'camera' : 'image'}
                    size={25}
                    color={Colors.primaryDark}
                  />
                  <Text style={Fonts.primaryDark16RobotoMedium}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
};
const mapStateToProps = state => ({
  authData: state.authProvider.authData,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: SCREEN_WIDTH * 0.4,
    backgroundColor: Colors.white,
    marginVertical: SCREEN_WIDTH * 0.05,
    marginHorizontal: SCREEN_WIDTH * 0.05,
    borderTopLeftRadius: SCREEN_WIDTH * 0.1,
    borderTopEndRadius: SCREEN_WIDTH * 0.1,
    overflow: 'hidden',
    position: 'relative',
  },
  eventbox: {
    position: 'absolute',
    width: '90%',
    height: SCREEN_WIDTH * 0.12,
    backgroundColor: Colors.grayLight,
    elevation: 5,
    borderRadius: SCREEN_WIDTH * 0.03,
    bottom: -5,
    marginHorizontal: SCREEN_WIDTH * 0.025,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
