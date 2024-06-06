import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import MyHeader from '../../component/common/MyHeader';
import MyStatusBar from '../../component/common/MyStatusBar';
import { Colors, Fonts, Sizes } from '../../assets/style';
import { Dropdown } from 'react-native-element-dropdown';
import { ImageBackground } from 'react-native';
import { MyMethods } from '../../methods/MyMethods';
import { Modal } from 'react-native-paper';
import Loader from '../../component/common/Loader';
import { SCREEN_WIDTH } from '../../config/Screen';
import LinearGradient from 'react-native-linear-gradient';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import AmountInfo from '../../component/ui/History/AmountInfo';

const WalletHistory = ({ navigation, authData }) => {
  const dashboard = {
    data: {
      Walletbalance: 100
    }
  }
  const astroId = 2403531

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [monthsData, setMonthsData] = useState(null);
  const [state, setState] = useState({
    modalVisible: false,
    isLoading: false,
    // historyData: null,
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    const data = MyMethods.get_calender_months();
    setMonthsData(data);
    get_wallet_history({ startDate: new Date(), endDate: new Date() });
  }, []);

  const get_wallet_history = async ({ startDate, endDate }) => {
    // updateState({ isLoading: true, modalVisible: false });
    // await axios({
    //   method: 'post',
    //   url: api_url + astro_all_wallet_history_new,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   data: {
    //     astro_id: astroId,
    //     startDate: moment(startDate).format('YYYY-MM-DD'),
    //     endDate: moment(endDate).format('YYYY-MM-DD'),
    //   },
    // })
    //   .then(res => {
    //     updateState({ isLoading: false });
    //     updateState({ historyData: res.data.data });
    //   })
    //   .catch(err => {
    //     updateState({ isLoading: false });
    //     console.log(err);
    //   });
  };

  const updateState = data => {
    setState(prevState => {
      const newData = { ...prevState, ...data };
      return newData;
    });
  };

  const { isLoading, modalVisible, startDate, endDate } = state;

  const historyData = [
    {
      order_id: '123456',
      cramount: 100,
      type_for: 'service',
      username: 'JohnDoe',
      customer_id: '78910',
      duration: '15.25',
      transdate: '11 Aug 23, 12:18 AM',
    },
    {
      order_id: '123457',
      cramount: 50.00,
      type_for: 'product',
      username: 'JaneDoe',
      customer_id: '78911',
      duration: '0.00',
      transdate: '11 Aug 23, 12:18 AM',
    },
    {
      order_id: '123457',
      cramount: -50.00,
      type_for: 'product',
      username: 'JaneDoe',
      customer_id: '78911',
      duration: '0.00',
      transdate: '11 Aug 23, 12:18 AM',
    },
  ];


  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <MyHeader title="Wallet History" navigation={navigation} />
      <View style={{ flex: 1, marginTop: Sizes.fixPadding * 1.5 }}>
        <FlatList
          ListHeaderComponent={
            <>
              {balnceShow()}
              {monthsData && filterInfo()}
              <AmountInfo />
              {historyData && chatHistoryInfo()}
            </>
          }
        />
      </View>
      {dateSelectionInfo()}
    </View>
  );

  function dateSelectionInfo() {
    const select_start_date = () => {
      if (Platform.OS == 'android') {
        DateTimePickerAndroid.open({
          value: startDate == null ? new Date() : startDate,
          onChange: (event, date) => {
            if (event.type == 'set') {
              updateState({ startDate: date });
            }
          },
          maximumDate: endDate != null ? endDate : new Date(),
          mode: 'date',
          display: 'calendar',
          is24Hour: true,
        });
      } else {
      }
    };

    const select_end_date = () => {
      if (Platform.OS == 'android') {
        DateTimePickerAndroid.open({
          value: endDate == null ? new Date() : endDate,
          onChange: (event, date) => {
            if (event.type == 'set') {
              updateState({ endDate: date });
            }
          },
          minimumDate: startDate != null ? startDate : new Date(),
          maximumDate: new Date(),
          mode: 'date',
          display: 'calendar',
          is24Hour: true,
        });
      }
    };

    return (
      <Modal visible={modalVisible}>
        <View
          style={{
            width: '90%',
            backgroundColor: Colors.white,
            padding: Sizes.fixPadding,
            alignSelf: 'center',
          }}>
          <Text
            style={{ ...Fonts.primaryLight15RobotoMedium, textAlign: 'center' }}>
            Select Dates
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: Sizes.fixPadding * 2,
            }}>
            <View style={{ alignItems: 'center', width: '40%' }}>
              <Text style={{ ...Fonts.black14RobotoRegular }}>Start Date</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => select_start_date()}
                style={styles.buttonContainer}>
                <Text
                  style={{ ...Fonts.gray14RobotoRegular, textAlign: 'center' }}>
                  {startDate != null
                    ? moment(startDate).format('DD-MM-YYYY')
                    : 'Select'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', width: '40%' }}>
              <Text style={{ ...Fonts.black14RobotoRegular }}>End Date</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => select_end_date()}
                style={styles.buttonContainer}>
                <Text
                  style={{ ...Fonts.gray14RobotoRegular, textAlign: 'center' }}>
                  {endDate != null
                    ? moment(endDate).format('DD-MM-YYYY')
                    : 'Select'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              get_wallet_history({ startDate: startDate, endDate: endDate })
            }
            style={{
              width: '60%',
              alignSelf: 'center',
              marginBottom: Sizes.fixPadding,
              marginTop: Sizes.fixPadding * 2,
            }}>
            <Text style={{ ...Fonts.black14RobotoRegular, textAlign: 'center' }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  function filterInfo() {
    return (
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={{ ...Fonts.primaryLight14RobotoMedium, textAlign: 'center' }}
          containerStyle={{
            marginTop: Sizes.fixPadding,
            borderRadius: Sizes.fixPadding,
          }}
          itemContainerStyle={{ borderRadius: Sizes.fixPadding, justifyContent: 'center', alignItems: 'center' }}
          iconStyle={styles.iconStyle}
          data={monthsData}
          maxHeight={400}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Today' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
            if (item.label == 'Custom') {
              updateState({ modalVisible: true });
            } else if (
              item.label != 'Today' &&
              item.label != 'Yesterday' &&
              item.label != 'Custom'
            ) {
              const date = new Date(item.value);
              const year = date.getUTCFullYear();
              const month = date.getUTCMonth();
              const firstdate = new Date(Date.UTC(year, month, 1));
              var fdate = firstdate.toISOString().split('T')[0]
              const lastdate = new Date(Date.UTC(year, month + 1, 0));
              var ldate = lastdate.toISOString().split('T')[0]
              get_wallet_history({ startDate: fdate, endDate: ldate });
            } else if (item.label == 'Yesterday') {
              get_wallet_history({ startDate: item.value, endDate: item.value });
              // get_wallet_history({startDate: yesterday, endDate: new Date()});
            } else {
              get_wallet_history({ startDate: new Date(), endDate: new Date() });
            }
          }}
        />
      </View>
    );
  }

  function balnceShow() {
    const wallet_balance = dashboard?.data?.Walletbalance
    const pg_charge = wallet_balance - (wallet_balance * 2.5 / 100)
    const payable_amount = pg_charge - (pg_charge * 10 / 100)
    return (
      <LinearGradient
        colors={[Colors.primaryLight, Colors.primaryDark]}
        style={{
          paddingVertical: 15,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 10,
            paddingHorizontal: 10,
            columnGap: 10
          }}>
          <View style={{ width: SCREEN_WIDTH * 0.4, paddingBottom: 5 }} >
            <Text style={styles.viwTxt}>Lifetime Earning</Text>
            <View style={styles.balance} >
              <Text style={{ color: Colors.black, fontWeight: "600" }} >₹ 13,85,880</Text>
            </View>
          </View>

          <View style={{ width: SCREEN_WIDTH * 0.4, paddingBottom: 5 }}>
            <Text style={styles.viwTxt}>Monthly Earning</Text>
            <View style={styles.balance} >
              <Text style={{ color: Colors.black, fontWeight: "600" }}>₹ 13,85,880</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: 10,
            columnGap: 10
          }}>
          <View style={{ width: SCREEN_WIDTH * 0.4 }}>
            <Text style={styles.viwTxt}>Weekly Earning</Text>
            <View style={styles.balance} >
              <Text style={{ color: Colors.black, fontWeight: "600" }}>₹ 13,85,880</Text>
            </View>
          </View>

          <View style={{ width: SCREEN_WIDTH * 0.4, paddingBottom: 5 }}>
            <Text style={styles.viwTxt}>Rank</Text>
            <View style={styles.balance} >
              <Text style={{ color: Colors.black, fontWeight: "600" }}>₹ 13,85,880</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }

  function chatHistoryInfo() {
    const renderItem = ({ item }) => (
      <View
        style={{
          marginHorizontal: 15,
          marginBottom: 10,
          marginTop: 18,
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

            <Text
              style={{
                fontWeight: '400',
                ...Fonts.black16RobotoMedium,
              }}>
              Order ID: {item?.order_id}
            </Text>

            <View>
              <ImageBackground
                source={item.cramount > 0 ? require('../../assets/images/green.png') : require('../../assets/images/redWallet.png')}
                resizeMode="contain"
                style={{
                  width: SCREEN_WIDTH * 0.3,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  right: -10,
                  position: 'absolute',
                  alignSelf: 'flex-start',
                  top: -10,
                  contentContainerStyle: {
                    color: item.Name == '+' ? Colors.green : Colors.red,
                  },
                }}>
                <Text
                  style={{
                    ...Fonts.white12RobotoMedium,
                    textAlign: 'center',
                    bottom: 6,
                  }}>
                  {item.cramount > 0 ? "+" : "-"} ₹ {item?.cramount == '0.000' ? 0.000 : Math.abs(item?.cramount)}
                </Text>
              </ImageBackground>
            </View>
          </View>

          <View>
            <Text
              style={{
                ...Fonts.gray14RobotoMedium,
                color: Colors.primaryLight,
                marginVertical: 5,
                fontSize: 16,
                textTransform: 'capitalize'
              }}>
              {item?.type_for}
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                with {item?.username}({item?.customer_id})
              </Text>
            </View>
            {item?.type_for != 'pooja' && item?.type_for != 'Remedy' && item?.type_for != 'gift' && item?.type_for != 'product' && <Text style={{ ...Fonts.gray14RobotoMedium, }}>
              for {parseFloat(item?.duration).toFixed(2)} minutes
            </Text>}

            <View
              style={{
                flexDirection: 'row',
                marginTop: 5,
                justifyContent: 'space-between',
              }}>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                Userld: {item?.customer_id}
              </Text>
              <Text
                style={{
                  ...Fonts.gray14RobotoMedium,
                  color: Colors.primaryLight,
                }}>
                {item?.transdate}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
    return (
      <View>
        <FlatList
          data={historyData}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 15 }}
        />
      </View>
    );
  }
};

const mapStateToProps = state => ({
  authData: state.authProvider.authData,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(WalletHistory);

const styles = StyleSheet.create({
  txt: {
    paddingVertical: Sizes.fixPadding - 4,
    paddingHorizontal: 6
  },
  container: {
    borderColor: Colors.primaryDark,
    paddingVertical: 18,
    borderRadius: 20,
    justifyContent: 'center',
    width: '90%',
    paddingVertical: 3,
    marginLeft: 18,
    marginTop: 10
  },
  dropdown: {
    height: 50,
    borderColor: Colors.primaryLight,
    borderWidth: 2,
    borderRadius: Sizes.fixPadding,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'red',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.primaryLight,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.primaryLight,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  balance: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  viwTxt: {
    ...Fonts.white8RobotBold,
    color: Colors.white,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
    textAlign: "center"
  },
  buttonContainer: {
    paddingVertical: Sizes.fixPadding * 0.5,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    marginTop: Sizes.fixPadding,
  },
});
