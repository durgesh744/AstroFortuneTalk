import axios from 'axios';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, Fonts } from '../../assets/style';
import { api_url, update_mobile_mumber } from '../../config/Constants';
import { useAuth } from '../../context/AuthContext';
import Loader from '../../component/common/Loader';
import MyStatusBar from '../../component/common/MyStatusBar';
import MyHeader from '../../component/common/MyHeader';
import { SCREEN_WIDTH } from '../../config/Screen';

const UpdateNumber = props => {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');

  const mobileNumberValidation = () => {
    return /^[0-9]{10}$/.test(mobileNumber);
  };

  const validation = () => {
    if (mobileNumber.length == 0) {
      Alert.alert('Please enter your Mobile Number');
      return false;
    } else if (mobileNumberValidation() == false) {
      Alert.alert('Please enter full Mobile Number.');
      return false;
    } else {
      return true;
    }
  };

  const handleChange = async () => {
    if (validation()) {
      setIsLoading(true);
      await axios({
        method: 'post',
        url: api_url + update_mobile_mumber,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: {
          astrologer_id: user.data.user.id,
          mobile_number: mobileNumber,
        },
      })
        .then(async res => {
          setIsLoading(false);
          if (res.data?.status) {
            Alert.alert(res.data.message);
          } else {
            Alert.alert('Please Check Your Internet');
          }
        })
        .catch(err => {
          setIsLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title="Update Phone Number" navigation={props.navigation} />
      <Loader visible={isLoading} />
      <View style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={
            <>
              {notelabel()}
              {updateForm()}
            </>
          }
        />
      </View>
    </View>
  );

  function notelabel() {
    return (
      <View
        style={{
          width: SCREEN_WIDTH * 1,
          backgroundColor: Colors.backgr_clr,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: SCREEN_WIDTH * 0.05,
          paddingVertical: SCREEN_WIDTH * 0.05,
        }}>
        <Text style={[Fonts.black12RobotoMedium, { textAlign: 'center', color: "black" }]}>
          You will get call and chat alerts on these numbers
        </Text>
      </View>
    );
  }
  function updateForm() {
    return (
      <View
        style={{
          backgroundColor: Colors.dullWhite,
          width: SCREEN_WIDTH,
          flex: 1,
          paddingHorizontal: SCREEN_WIDTH * 0.1,
          paddingVertical: SCREEN_WIDTH * 0.07,
          borderBottomWidth: 1,
          borderBottomColor: Colors.gray3,
        }}>
        <Text style={Fonts.primaryDark16RobotoMedium}>
          Primary Mobile Number
        </Text>
        <View style={styles.inputContainer}>
          <View
            style={{
              width: '15%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image
              source={require('../../assets/icon/india_flag.png')}
              style={{
                width: '90%',
                height: '50%',
                borderRadius: SCREEN_WIDTH * 0.02,
                backgroundColor: 'red',
              }}
            />
          </View>
          <View
            style={{
              width: '15%',
              height: '80%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={[Fonts.grayDark16RobotoMedium, { color: Colors.Dark_grayish_red }]}>+91</Text>
            <View
              style={{
                height: '80%',
                width: 1.5,
                backgroundColor: Colors.gray_back,
              }}
            />
          </View>
          <View style={{ width: '70%' }}>
            <TextInput
              inputMode="numeric"
              value={mobileNumber}
              cursorColor={Colors.primaryDark}
              style={[Fonts.primaryDark16RobotoMedium, { width: '100%' }]}
              placeholder="Enter Mobile Number"
              maxLength={10}
              onChangeText={text => setMobileNumber(text)}
              placeholderTextColor={Colors.Dark_grayish_red}
            />
          </View>
        </View>
        <View style={{ width: '70%', alignSelf: 'center' }}>
          <TouchableOpacity
            onPress={() => handleChange()}
            style={{
              width: '100%',
              borderRadius: SCREEN_WIDTH * 0.1,
              backgroundColor: Colors.primaryDark,
              paddingVertical: SCREEN_WIDTH * 0.04,
            }}>
            <Text style={[Fonts.white16RobotoMedium, { textAlign: 'center' }]}>
              Verify
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default UpdateNumber;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1.5,
    borderColor: Colors.gray_back,
    paddingHorizontal: 5,
    width: '100%',
    height: SCREEN_WIDTH * 0.15,
    borderRadius: SCREEN_WIDTH * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SCREEN_WIDTH * 0.05,
  },
});
