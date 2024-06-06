import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import Loader from '../component/common/Loader';
import React, { useEffect, useState } from 'react';
import MyStatusBar from '../component/common/MyStatusBar';
import MyHeader from '../component/common/MyHeader';
import { Colors, Fonts, Sizes } from '../assets/style';
import LinearGradient from 'react-native-linear-gradient';
import { api_url, call_waiting_user_list } from '../config/Constants';
import { SCREEN_WIDTH } from '../config/Screen';

const WaitList = ({ navigation, authData, dispatch }) => {
  const [state, setState] = useState({
    waitListData: null,
    isLoading: false,
    isRefreshing: false,
    isActiveChat: false,
    chatData: null,
  });

  // useEffect(() => {
  //   database()
  //     .ref(`CurrentRequest/${providerData?.id}`)
  //     .on('value', snapshot => {
  //       if (snapshot.val()?.status == 'AceeptedbyUser') {
  //         updateState({isActiveChat: true});
  //       } else {
  //         updateState({isActiveChat: false});
  //       }
  //     });
  // }, []);

  const get_chat_data = async () => {
    // const data = await AsyncStorage.getItem('chatData');
    // const parsedData = JSON.parse(data);
    // dispatch(ChatActions.setChatRequestData(parsedData))
    // navigation.navigate('ChatScreen', {
    //   customerData: parsedData, 
    // });
  };

  useEffect(() => {
    getWaitListData();
  }, []);

  const getWaitListData = async () => {

  };

  const getDateOrTime = timestamp => {
    const date1 = new Date(new Date().getTime() / 1000);
    const date2 = new Date(timestamp / 1000); // Current timestamp in seconds
    const timeDifference = Math.abs(date1 - date2);

    const hours = Math.floor(timeDifference / 3600);
    const minutes = Math.floor((timeDifference % 3600) / 60);

    if (hours >= 1) {
      return `${hours} Hr, ${minutes} Mins`;
    } else {
      return `${minutes} Mins`;
    }
  };

  const on_refresh = async () => {
  };

  const updateState = data => {
    setState(prevState => {
      const newData = { ...prevState, ...data };
      return newData;
    });
  };

  const data = [
    {
      time_start: new Date(),
      username: "Durgesh Chaudhary",
      time_start: new Date(),
      type: "1",
      status: "1"
    }
  ]

  const { waitListData, isLoading, isRefreshing, isActiveChat, chatData } = state;

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <MyHeader title="Waitlist" navigation={navigation} />
      <View style={{ flex: 1, marginTop: Sizes.fixPadding * 1.5 }}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={on_refresh} />
          }
          ListHeaderComponent={
            <>
              {isActiveChat && activeChatInfo()}
              {data && chatHistoryInfo()}
            </>
          }
        />
      </View>
    </View>
  );

  function chatHistoryInfo() {
    const renderItem = ({ item, index }) => {
      return (
        <View
          style={{
            marginHorizontal: 15,
            backgroundColor: Colors.white,
            marginBottom: 10,
          }}>
          <View
            style={{
              borderRadius: 20,
              flex: 0,
              backgroundColor: Colors.dullWhite,
              borderRadius: 10,
              padding: 15,
              elevation: 5,
              shadowColor: Colors.blackLight,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 15,
                width: SCREEN_WIDTH * 0.9,
              }}>
              <View>
                <Text
                  style={{
                    fontWeight: '600',
                    ...Fonts.black16RobotoMedium,
                    fontSize: 15,
                  }}>
                  New(Indian)
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    ...Fonts.black16RobotoMedium,
                    fontSize: 15,
                    color:
                      item.Type == 'CALL' ? Colors.green : Colors.primaryDark,
                  }}>
                  India
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{
                    ...Fonts.white14RobotoMedium,
                    color: Colors.bright_red,
                    right: 6,
                    fontWeight: '600',
                  }}>
                  Duration: {getDateOrTime(new Date(item.time_start).getTime())}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    ...Fonts.gray14RobotoMedium,
                    marginBottom: 5,
                    fontSize: 13,
                  }}>
                  {item?.username} (Id: 2198852)
                </Text>
                <Text
                  style={{
                    ...Fonts.gray14RobotoMedium,
                    marginBottom: 5,
                    fontSize: 13,
                  }}>
                  {moment(item?.time_start).format('DD MMM YY hh:mm A')}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      ...Fonts.gray14RobotoMedium,
                      marginBottom: 5,
                      fontSize: 13,
                    }}>
                    Type -{' '}
                  </Text>
                  <Text
                    style={{
                      ...Fonts.gray14RobotoMedium,
                      marginBottom: 5,
                      fontSize: 13,
                      color: item.type == 1 ? Colors.green : Colors.primaryDark,
                    }}>
                    {item.type == '1' ? 'Call' : 'Chat'}
                  </Text>
                </View>

                <Text
                  style={{
                    ...Fonts.gray14RobotoMedium,
                    marginBottom: Sizes.fixPadding,
                    fontSize: 13,
                  }}>
                  Token No - {index + 1}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      ...Fonts.gray14RobotoMedium,
                      color: Colors.bright_red,
                      fontWeight: '600',
                    }}>
                    Status:
                  </Text>
                  <Text
                    style={{
                      ...Fonts.gray14RobotoMedium,
                      fontWeight: '600',
                      color: Colors.bright_red,
                    }}>
                    {item.status == '1' || item.status == null
                      ? 'WAITING'
                      : 'PASUED'}
                  </Text>
                </View>
              </View>
              <View></View>
            </View>
          </View>
          <LinearGradient
            colors={[Colors.primaryLight, Colors.primaryDark]}
            style={{
              right: 8,
              position: 'absolute',
              bottom: 10,
              borderRadius: 30,
              paddingVertical: 10,
              paddingHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  ...Fonts.white14RobotoMedium,
                  fontSize: 15,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Start Offline Session
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      );
    };
    return (
      <View style={{}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingVertical: 15 }}
        />
      </View>
    );
  }

  function activeChatInfo() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={get_chat_data}
        style={{
          marginHorizontal: Sizes.fixPadding * 2,
          paddingVertical: Sizes.fixPadding,
          backgroundColor: Colors.primaryLight,
          borderRadius: Sizes.fixPadding,
        }}>
        <Text style={{ ...Fonts.white14RobotoMedium, textAlign: 'center' }}>
          You have an active Chat
        </Text>
      </TouchableOpacity>
    );
  }
};

const mapStateToProps = state => ({
  authData: state.authProvider.authData,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(WaitList);
