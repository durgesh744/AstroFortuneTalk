import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import Loader from '../../component/common/Loader';
import MyHeader from '../../component/common/MyHeader';
import { Sizes, Colors, Fonts } from '../../assets/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyStatusBar from '../../component/common/MyStatusBar';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Screen';

const CallHistory = ({ navigation, providerData }) => {
  const [CallHistoryData, setCallHistoryData] = useState(
    [
      {
        country: 'USA',
        moa: '1',
        order_id: '123456',
        username: 'John Doe',
        gender: 'Male',
        date_of_birth: '1990-01-01',
        time_of_birth: '12:00',
        place_of_birth: 'New York',
        current_address: '123 Main St, New York, NY',
        problem: 'Financial Issues',
        created_datetime: '2023-05-20T14:30:00Z',
        duration: '30 minutes',
        rate: '20',
        deductAmt: '50.00',
        user_id: '7890',
        customer_id: 4680
      },
      {
        country: 'USA',
        moa: '1',
        order_id: '123456',
        username: 'John Doe',
        gender: 'Male',
        date_of_birth: '1990-01-01',
        time_of_birth: '12:00',
        place_of_birth: 'New York',
        current_address: '123 Main St, New York, NY',
        problem: 'Financial Issues',
        created_datetime: '2023-05-20T14:30:00Z',
        duration: '30 minutes',
        rate: '20',
        deductAmt: '50.00',
        user_id: 531,
        customer_id: 4680
      },
    ]
  );


  const [state, setState] = useState({
    isLoading: false,
    isActiveCall: false,
    activeCallData: null,
  });

  const get_kundli_details = async user_id => {
    try {
      navigation.navigate('kundliInfo', { kundli_id: 221, user_id: user_id })
    } catch (e) {
      console.log(e)
    }
  };

  const updateState = data => {
    setState(prevState => {
      const newData = { ...prevState, ...data };
      return newData;
    });
  };

  const { isLoading, isActiveCall, activeCallData } = state;

  return (
    <View style={{ flex: 1 }}>
      <Loader visible={isLoading} />
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <MyHeader title="Call History" navigation={navigation} />
      <View style={{ flex: 1, marginTop: Sizes.fixPadding * 1.5 }}>
        <FlatList
          ListHeaderComponent={
            <>
              {chatHistoryInfo()}
            </>
          }
        />
      </View>
    </View>
  );

  function chatHistoryInfo() {
    const renderItem = ({ item }) => (
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
                  fontWeight: '400',
                  ...Fonts.black16RobotoMedium,
                }}>
                New ({item?.country}) {item?.moa == '1' && <Text style={{ color: Colors.primaryLight }}>MO@0</Text>}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  ...Fonts.black16RobotoMedium,
                }}>
                Order id: {item.order_id}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons
                name="copy-outline"
                size={26}
                color={Colors.Dark_grayish_red}
                style={{ marginHorizontal: 15 }}
              />
              <TouchableOpacity
                onPress={() => get_kundli_details(item?.customer_id)}
                style={{
                  borderRadius: 30,
                  backgroundColor: Colors.gray_light,
                  paddingHorizontal: Sizes.fixPadding * 1.5,
                  paddingVertical: 3,
                }}>
                <Text style={{ ...Fonts.white14RobotoMedium }}>Open Kundli</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 5,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                Name-{item?.username}
              </Text>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                Gender-{item.gender}
              </Text>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                Birth Date-{item.date_of_birth}
              </Text>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                Birth Time-{item.time_of_birth}
              </Text>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                Birth Place-{item.place_of_birth}
              </Text>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                Current Address-{item.current_address}
              </Text>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                Problem Area-{item.problem}
              </Text>
              <Text
                style={{
                  ...Fonts.gray14RobotoMedium,
                  marginTop: 20,
                  color: Colors.gray3,
                }}>
                Order Time-
                {moment(item.created_datetime).format('DD MMM YYYY, hh:mm A')}
              </Text>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                Duration - {item.duration}
              </Text>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                Rate - {item.rate}
                {'/min'}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    ...Fonts.black14InterMedium,
                  }}>
                  Status -
                </Text>
                <Text
                  style={{
                    ...Fonts.gray14RobotoMedium,
                    color: Colors.green,
                  }}>
                  {' '}
                  Completed
                </Text>
              </View>
            </View>
            <View>
              <ImageBackground
                source={require('../../assets/images/back.png')}
                resizeMode="contain"
                style={{
                  width: SCREEN_WIDTH * 0.3,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  right: -20,
                  position: 'absolute',
                  alignSelf: 'flex-start',
                  top: -15,
                }}>
                <Text
                  style={{
                    ...Fonts.white14RobotoMedium,
                    textAlign: 'center',
                    bottom: 6,
                    fontWeight: '700',
                  }}>
                  {' '}
                  Rs.{parseFloat(item.deductAmt).toFixed(2)}
                </Text>
              </ImageBackground>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: SCREEN_HEIGHT * 0.03,
              justifyContent: 'space-between',
            }}>
            <Text
              onPress={() =>
                navigation.navigate('Remedy', {
                  customer_id: item?.user_id,
                  screen_type: 'not_during_chat'
                })
              }
              style={{ ...Fonts.primaryLight14RobotoMedium, textDecorationLine: 'underline' }}>
              View Chat
            </Text>
            <Text
              onPress={() =>
                navigation.navigate('Remedy', {
                  customer_id: item?.user_id,
                  screen_type: 'not_during_chat'
                })
              }
              style={{ ...Fonts.primaryLight14RobotoMedium, textDecorationLine: 'underline' }}>
              Suggest Remedy
            </Text>
            <Text style={{ ...Fonts.primaryLight14RobotoMedium, textDecorationLine: 'underline' }}>Refund Amount</Text>
          </View>
        </View>
      </View>
    );
    console.log("CallHistoryData ====>>>>", CallHistoryData[0].customer_id)
    return (
      <View>

        <FlatList
          data={CallHistoryData}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 15 }}
        />
      </View>
    );
  }
};

const mapStateToProps = state => ({
  providerData: state.provider.providerData,
  dashboard: state.provider.dashboard,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(CallHistory);