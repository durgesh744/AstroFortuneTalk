import React from 'react';
import {connect} from 'react-redux';
import {Colors, Fonts, Sizes} from '../../assets/style';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import MyHeader from '../../component/common/MyHeader';
import MyStatusBar from '../../component/common/MyStatusBar';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SupportChat = props => {
  const navigation = useNavigation();

  const create_chat = ({props, firebaseId}) => {
    props.navigation.navigate('supportChatScreen');
  };

  // Example usage:
  const chatParams = {
    props: {
      firebaseId: props.firebaseId,
      navigation: navigation,
    },
    firebaseId: props.firebaseId,
  };

  return (
    <View style={{flex: 1}}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title={'Support Chat'} navigation={props.navigation} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.white,
          flex: 0.1,
        }}>
        <Text
          style={{...Fonts.white14RobotBold, color: Colors.Dark_grayish_red}}>
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
          style={{...Fonts.white14RobotBold, color: Colors.Dark_grayish_red}}>
          No Ticket Available
        </Text>
      </View>
      <View>
        <LinearGradient
          colors={[Colors.primaryLight, Colors.primaryDark]}
          style={style.gradient}>
          <TouchableOpacity onPress={() => create_chat(chatParams)}>
            <Text style={{...Fonts.white18RobotBold, fontSize: 16}}>
              + Create New Chat
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  authData: state.authProvider.authData,
});

export default connect(mapStateToProps, null)(SupportChat);

const style = StyleSheet.create({
  gradient: {
    padding: Sizes.fixPadding,
    borderRadius: 30,
    width: '60%',
    marginVertical: Sizes.fixPadding,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
