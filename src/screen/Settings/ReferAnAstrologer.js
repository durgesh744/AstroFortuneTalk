import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Colors, Fonts, Sizes } from '../../assets/style';
import { commonStyles } from '../../assets/global';
import CustomButton from '../../component/CustomButton';
import MyStatusBar from '../../component/MyStatusBar';
import MyHeader from '../../component/MyHeader';
import Loader from '../../component/Loader';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Screen';

const ReferAnAstrologer = ({ navigation, authData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [expertise, setExpertise] = useState('');
  const [experience, setExperience] = useState('');

  const validation = () => {
    if (name.length == 0) {
      Alert.alert('Please enter Astrologer Name');
      return false;
    } else if (email.length == 0) {
      Alert.alert('Please enter Email ID');
      return false;
    }
    else if (mobileNumber.length == 0) {
      Alert.alert('Please enter Mobile Number');
      return false;
    } else if (mobileNumber.length != 10) {
      Alert.alert('Please enter Full Mobile Number');
      return false;
    } else if (expertise.length == 0) {
      Alert.alert('Please enter Astrologer Expertise');
      return false;
    } else if (experience.length == 0) {
      Alert.alert('Please enter Astrologer Experience');
      return false;
    } else {
      return true;
    }
  };

  const handleSend = async () => {
   
  };

  const clearFields = () => {
    setName(null);
    setEmail(null);
    setMobileNumber(null);
    setExpertise(null);
    setExperience(null);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title={'Refer an Astrologer'} navigation={navigation} />
      <Loader visible={isLoading} />
      <View style={{ flex: 1 }}>
        <FlatList ListHeaderComponent={<>{astrologerdetailsform()}</>} />
      </View>
    </View>
  );

  function astrologerdetailsform() {
    return (
      <View style={{ justifyContent: 'space-between', height: SCREEN_HEIGHT * 0.8 }}>
        <View style={{ marginHorizontal: 20, paddingTop: 10 }}>
          <TextInput
            value={name}
            onChangeText={e => setName(e)}
            style={commonStyles.inputbox2}
            placeholder="Name of Astrologer"
            placeholderTextColor={Colors.Dark_grayish_red}
          />

          <TextInput
            value={email}
            onChangeText={e => setEmail(e)}
            style={commonStyles.inputbox2}
            placeholder="Email ID"
            placeholderTextColor={Colors.Dark_grayish_red}
          />

          <View style={styles.inputContainer}>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('../../assets/icon/india_flag.png')}
                resizeMode="cover"
                style={{
                  width: '70%',
                  height: '50%',
                  borderRadius: SCREEN_WIDTH * 0.02,
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
              <Text style={Fonts.gray14RobotoMedium}>+91</Text>
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
                style={[Fonts.gray14RobotoRegular, { width: '100%' }]}
                placeholder="Enter Mobile Number"
                maxLength={10}
                onChangeText={text => setMobileNumber(text)}
                placeholderTextColor={Colors.Dark_grayish_red}
              />
            </View>
          </View>
          <TextInput
            value={expertise}
            onChangeText={e => setExpertise(e)}
            style={commonStyles.inputbox2}
            placeholder="Expertise of Astrologer"
            placeholderTextColor={Colors.Dark_grayish_red}
          />
          <TextInput
            value={experience}
            inputMode="numeric"
            onChangeText={e => setExperience(e)}
            style={commonStyles.inputbox2}
            placeholder="Years of Experience"
            placeholderTextColor={Colors.Dark_grayish_red}
          />
        </View>
        <View style={{ paddingHorizontal: Sizes.fixPadding * 2 }}>
          <CustomButton btnName={"Submit"} handleSend={handleSend} />
        </View>
      </View>
    );
  }
};

const mapStateToProps = state => ({
  authData: state.authProvider.authData,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(ReferAnAstrologer);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: SCREEN_WIDTH * 0.05,
    marginTop: 10,
  },
  button: {
    borderRadius: 20,
    borderRadius: SCREEN_WIDTH * 0.04,
    elevation: 3,
    width: '48%',
    height: SCREEN_WIDTH * 0.25,
  },
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
    marginVertical: SCREEN_WIDTH * 0.02,
  },
});
