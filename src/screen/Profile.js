import moment from 'moment';
import { useState } from 'react';
import { Image } from '@rneui/base';
import { connect } from 'react-redux';
import { SCREEN_WIDTH } from '../config/Screen';
import MyHeader from '../component/common/MyHeader';
import { Colors, Fonts, Sizes } from '../assets/style';
import MyStatusBar from '../component/common/MyStatusBar';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Profile = props => {
  const [profileData, setProfileData] = useState(props?.authData?.astrologer);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.gray4 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title={'Astrologer Profile'} navigation={props.navigation} />
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
                {profileData && (
                  <Image
                    source={{ uri: profileData.profileImage }}
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
                  Real Name : {profileData.name}
                </Text>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Display Name : {profileData.displayName}
                </Text>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Mail ID : {profileData.email}
                </Text>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Primary No. : {profileData.phoneNumber}
                </Text>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Date Of Birth : {moment(profileData.dateOfBirth).format("DD MMM YYYY")}
                </Text>
                <Text style={[Fonts.gray16RobotoMedium, styles.txt]}>
                  Place of birth : {profileData.address}
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
  authData: state.authProvider.authData,
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
