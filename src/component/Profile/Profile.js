import { View, Text, Dimensions, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import MyStatusBar from '../../component/MyStatusBar';
import MyHeader from '../component/MyHeader';
import { connect } from 'react-redux';
import { Colors, Fonts, Sizes } from '../assets/style';
import { Image } from '@rneui/base';
import Loader from '../../component/Loader';
import { getAstrologerProfile } from '../../hooks/Profile/Profile';

const { width, height } = Dimensions.get('screen');

const Profile = props => {
  const [isLoading, setIsLoading] = useState();
  const { profile } = getAstrologerProfile()

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
            <>{profile && <>{profileDetailsAndImage()}</>}</>
          }
        />
      </View>
    </View>
  );

  function profileDetailsAndImage() {
    return (
      <>
        {profile !== null ? (
          <>
            <View
              style={{
                flex: 0.3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: width * 0.4,
                  height: width * 0.4,
                  justifyContent: 'center',
                  borderRadius: width * 0.05,
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
                  borderRadius: width * 0.05,
                  elevation: 5,
                  padding: width * 0.03,
                  paddingTop: width * 0.05,
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
  txt: { marginBottom: width * 0.03 },
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
