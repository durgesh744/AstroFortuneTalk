import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import { Input } from '@rneui/themed';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import Loader from '../../component/common/Loader';
import MyHeader from '../../component/common/MyHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Sizes, Fonts } from '../../assets/style';
import MyStatusBar from '../../component/common/MyStatusBar';
import { showToastWithGravityAndOffset } from '../../methods/toastMessage';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import CustomButton from '../../component/common/CustomButton';

const RegisterPooja = ({ navigation, route, authData }) => {
  const [state, setState] = useState({
    imageData: null,
    date: null,
    time: null,
    price: '',
    isLoading: false,
  });

  const validation = () => {
    if (date == null) {
      showToastWithGravityAndOffset('Please select a date.');
      return false;
    } else if (time == null) {
      showToastWithGravityAndOffset('Please select a time.');
      return false;
    } else if (price.length == 0) {
      showToastWithGravityAndOffset('Please enter your price.');
      return false;
    } else {
      return true;
    }
  };

  const update_pooja_details = async () => {
    navigation.navigate('sceduledList');
    // if (validation()) {
    //   updateState({ isLoading: true });
    //   await axios({
    //     method: 'post',
    //     url: api_url + schedule_a_pooja,
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //     data: {
    //       date: date,
    //       time: time,
    //       astro_id: providerData?.id,
    //       pooja_id: route?.params?.pooja_id,
    //       price: price,
    //     },
    //   })
    //     .then(res => {
    //       updateState({ isLoading: false });
    //       if (res.data.status) {
    //         showToastWithGravityAndOffset('Pooja scheduled');
    //         navigation.navigate('sceduledList');
    //       }
    //     })
    //     .catch(err => {
    //       updateState({ isLoading: false });
    //       console.log(err);
    //     });
    // }
  };

  const updateState = data => {
    setState(prevState => {
      const newData = { ...prevState, ...data };
      return newData;
    });
  };

  const { imageData, date, time, price, isLoading } = state;

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bodyColor }}>
      <MyStatusBar
        backgroundColor={Colors.primaryDark}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <View style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={
            <>
              {header()}
              {dateTimeInfo()}
              {priceInfo()}
              {attachment()}
            </>
          }
        />
      </View>
      {continueButtonInfo()}
    </View>
  );

  function attachment() {
    return (
      <View
        style={{
          paddingLeft: 20,
          paddingTop: 10
        }}
      >
        <Text
          style={{
            color: Colors.black,
            paddingBottom: 10,
            fontSize: 18
          }}
        >Attachment(Add Photos)</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          // onPress={() => open_time_picker()}
          style={[styles.attachment, { marginBottom: 20 }]}
        >
          <Ionicons name="add" color={Colors.gray} size={80} />
        </TouchableOpacity>
      </View>
    )
  }

  function continueButtonInfo() {
    return (
      <View>
        <CustomButton
          handleSend={update_pooja_details}
          btnName={"Submit"}
        />
      </View>
    );
  }

  function priceInfo() {
    return (
      <View style={{ margin: Sizes.fixPadding * 2 }}>
        <View
          style={[
            styles.row,
            { justifyContent: 'space-between' },
          ]}>
          <Text style={{ ...Fonts.black16RobotoRegular }}>Price of Pooja</Text>
          <Input
            placeholder="0"
            placeholderTextColor={Colors.gray}
            keyboardType="number-pad"
            onChangeText={text => updateState({ price: text })}
            rightIcon={<Text style={{ ...Fonts.gray16RobotoMedium }}>/-</Text>}
            inputStyle={{ ...Fonts.gray14RobotoMedium, textAlign: 'right' }}
            containerStyle={{ height: 45 }}
            inputContainerStyle={styles.input}
            leftIcon={
              <View style={styles.row}>
                <Text style={{ ...Fonts.gray18RobotoRegular }}>₹</Text>
                <View
                  style={{
                    width: 1,
                    height: 20,
                    backgroundColor: Colors.gray,
                    marginHorizontal: Sizes.fixPadding * 2,
                  }}
                />
              </View>
            }
          />
        </View>
      </View>
    );
  }

  function dateTimeInfo() {
    const open_date_picker = () => {
      DateTimePickerAndroid.open({
        value: date == null ? new Date() : date,
        onChange: (event, date) => {
          if (event.type == 'set') {
            updateState({ date: date });
          }
        },
        minimumDate: new Date(),
        mode: 'date',
        display: 'calendar',
      });
    };

    const open_time_picker = () => {
      DateTimePickerAndroid.open({
        value: time == null ? new Date() : time,
        onChange: (event, time) => {
          if (event.type == 'set') {
            updateState({ time: time });
          }
        },
        mode: 'time',
        display: 'clock',
      });
    };

    return (
      <View style={{ margin: Sizes.fixPadding * 2 }}>
        <Text style={{ ...Fonts.black16RobotoRegular }}>
          Schedule a Date and time
        </Text>
        <View
          style={[
            styles.row,
            { justifyContent: 'space-between', marginTop: Sizes.fixPadding * 2 },
          ]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => open_date_picker()}
            style={styles.dataTimeContainer}>
            <Text style={{ ...Fonts.gray14RobotoMedium, color: Colors.Dark_grayish_red }}>
              {date == null ? 'Date' : moment(date).format('Do MMM YYYY')}
            </Text>
            <Ionicons name="chevron-down" color={Colors.gray} size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => open_time_picker()}
            style={styles.dataTimeContainer}>
            <Text style={{ ...Fonts.gray14RobotoMedium }}>
              {time == null ? 'Time' : moment(time).format('hh:mm A')}
            </Text>
            <Ionicons name="chevron-down" color={Colors.gray} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function header() {
    return <MyHeader navigation={navigation} title={'Schedule a Pooja'} />;
  }
};

const mapStateToProps = state => ({
  authData: state.authProvider.authData,
});

export default connect(mapStateToProps, null)(RegisterPooja);

const styles = StyleSheet.create({
  row: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataTimeContainer: {
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Sizes.fixPadding * 1.4,
    backgroundColor: Colors.gray4,
    borderRadius: Sizes.fixPadding,
    elevation: 5,
    shadowColor: Colors.blackLight,
  },
  input: {
    borderBottomWidth: 0,
    backgroundColor: 'red',
    height: '100%',
    width: '60%',
    backgroundColor: Colors.gray4,
    borderRadius: Sizes.fixPadding,
    elevation: 5,
    shadowColor: Colors.blackLight,
    paddingHorizontal: Sizes.fixPadding,
  },
  attachment: {
    width: '30%',
    padding: Sizes.fixPadding,
    backgroundColor: Colors.gray4,
    borderRadius: Sizes.fixPadding,
    elevation: 5,
    shadowColor: Colors.blackLight,
  }
});
