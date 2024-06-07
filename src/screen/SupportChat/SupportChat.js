import React from 'react';
import { connect } from 'react-redux';
import { Colors, Fonts, Sizes } from '../../assets/style';
import MyHeader from '../../component/common/MyHeader';
import MyStatusBar from '../../component/common/MyStatusBar';
import { View, Text } from 'react-native';
import CustomButton from '../../component/common/CustomButton';

const SupportChat = ({ navigation }) => {

  const create_chat = ({ props, firebaseId }) => {
    navigation.navigate('supportChatScreen');
  };

  // Example usage:
  const chatParams = {
    props: {
      firebaseId: 57578,
      navigation: navigation,
    },
    firebaseId: 687646,
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title={'Support Chat'} navigation={navigation} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.white,
          flex: 0.1,
        }}>
        <Text
          style={{ ...Fonts.white14RobotBold, color: Colors.Dark_grayish_red }}>
          Data shown for last 3 days only
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.dullWhite,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{ ...Fonts.white14RobotBold, color: Colors.Dark_grayish_red }}>
          No Ticket Available
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
           paddingHorizontal:Sizes.fixPadding * 5,
           paddingVertical:Sizes.fixPadding * 0.5
        }}>
        <CustomButton handleSend={() => create_chat(chatParams)} btnName={" + Create New Chat"} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  authData: state.authProvider.authData,
});

export default connect(mapStateToProps, null)(SupportChat);
