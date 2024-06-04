import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from '../assets/style';
import MyStatusBar from '../component/MyStatusBar';
import MyHeader from '../component/MyHeader';
import { connect } from 'react-redux';
import { Image } from '@rneui/base';
import {
  api_url,
  get_provider_details,
  img_url_2,
} from '../config/Constants';
import Loader from '../component/Loader';
import { SCREEN_WIDTH } from '../config/Screen';

const Profile = props => {
  const [isLoading, setIsLoading] = useState();
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    fetch_user_details();
  }, []);

  const fetch_user_details = async () => {
    setIsLoading(true);
    await axios({
      method: 'post',
      url: api_url + get_provider_details,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: {
        astrologer_id: props.providerData.id,
      },
    })
      .then(async res => {
        if (res.data?.status) {
          setProfileData(res.data.data);
          setIsLoading(false);
        }
      })
      .catch(err => {
        setIsLoading(false);
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.gray4 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title={'Astrologer Profile'} navigation={props.navigation} />
      <Loader visible={isLoading} />
      <View style={{ flex: 1, marginTop: Sizes.fixPadding * 1.5 }}>
        <FlatList
          ListHeaderComponent={
            <>{profileData && <>{profileDetailsAndImage()}</>}</>
          }
        />
      </View>
    </View>
  );

  function profileDetailsAndImage() {
    return (
      <>
        {profileData !== null ? (
          <>
            <View
              style={{
                flex: 0.3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: SCREEN_WIDTH * 0.4,
                  height: SCREEN_WIDTH * 0.4,
                  justifyContent: 'center',
                  borderRadius: SCREEN_WIDTH * 0.05,
                  overflow: 'hidden',
                  borderWidth: 4,
                  elevation: 5,
                  borderColor: Colors.primaryLight,
                }}>
                {profileData?.img_url && (
                  <Image
                    source={{ uri: img_url_2 + profileData.img_url }}
                    resizeMode="cover"
                    style={{ height: '100%', width: '100%' }}
                  />
                )}
              </View>
            </View>
            <View style={{ padding: 10 }}>
              <View
                style={{
                  height: 1.5,
                  backgroundColor: Colors.grayLight,
                  width: '100%',
                }}></View>
            </View>
            <View style={{ flex: 0.7, padding: 20 }}>
              <View
                style={{
                  backgroundColor: Colors.grayLight,
                  borderRadius: SCREEN_WIDTH * 0.05,
                  elevation: 5,
                  padding: SCREEN_WIDTH * 0.03,
                  paddingTop: SCREEN_WIDTH * 0.05,
                }}>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Real Name : {profileData.shop_name}
                </Text>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Display Name : {profileData.nic_name}
                </Text>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Mail ID : {profileData.email}
                </Text>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Registered No. : {profileData.phone}
                </Text>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Date Of Birth : {profileData.dob}
                </Text>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Time of Birth : 1:55 PM
                </Text>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Place of birth :
                </Text>
              </View>
            </View>
          </>
        ) : (
          <Text
            style={{
              paddingVertical: 20,
              ...Fonts.primaryLight14RobotoRegular,
              textAlign: 'center',
            }}>
            No PDF Found.
          </Text>
        )}
      </>
    );
  }
};

const mapStateToProps = state => ({
  providerData: state.provider.providerData,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  txt: { marginBottom: SCREEN_WIDTH * 0.03 },
  container: {
    backgroundColor: 'white',
    width: '70%',
    paddingVertical: 18,
    borderWidth: 0.7,
    borderRadius: 20,
    justifyContent: 'center',
    paddingVertical: 3,
    marginLeft: 22,
  },
});
