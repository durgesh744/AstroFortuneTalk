import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import Loader from '../component/Loader';
import MyHeader from '../component/MyHeader';
import { Colors, Fonts } from '../assets/style';
import MyStatusBar from '../component/MyStatusBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { api_url, update_bank_details } from '../config/Constants';
import { Checkbox } from 'react-native-paper';
import { commonStyles } from '../assets/commonStyle';

const { width, height } = Dimensions.get('screen');

const UpdateBankDetails = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [bankName, setBankName] = useState(null);
  const [accoountNumber, setAccountNumber] = useState(null);
  const [ifsc, setIfsc] = useState(null);
  const [name, setName] = useState(null);
  const [accountType, setAccountType] = useState(null);
  const [checked, setChecked] = React.useState(false);

  const handleSelectAccountType = e => {
    setAccountType(e);
    setVisible(false);
  };

  const validation = () => {
    if (bankName.length == 0) {
      Alert.alert('Please enter your Bank Name');
      return false;
    } else if (accoountNumber.length == 0) {
      Alert.alert('Please enter Account Number');
      return false;
    } else if (accoountNumber.length <= 10) {
      Alert.alert('Please enter Full Account Number');
      return false;
    } else if (ifsc.length == 0) {
      Alert.alert('Please enter IFSC Code');
      return false;
    } else if (ifsc.length < 11) {
      Alert.alert('Please enter Full IFSC Code');
      return false;
    } else if (name.length == 0) {
      Alert.alert('Please enter Account Holder Name');
      return false;
    } else if (accountType == null) {
      Alert.alert('Please Select Account type');
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
        url: api_url + update_bank_details,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: {
          astro_id: props.providerData.id,
          bank: bankName,
          account_no: accoountNumber,
          account_name: name,
          account_type: accountType?.value,
          ifsc_code: ifsc,
        },
      })
        .then(async res => {
          setIsLoading(false);
          if (res.data?.status) {
            Alert.alert(res.data.message);
            clearFields();
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

  const clearFields = () => {
    setBankName(null);
    setAccountNumber(null);
    setIfsc(null);
    setName(null);
    setAccountType(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title={'Bank Details'} navigation={props.navigation} />
      <Loader visible={isLoading} />
      <View style={{ flex: 1 }}>
        <FlatList ListHeaderComponent={<>{bankDetailsForm()}</>} />
      </View>
    </View>
  );

  function bankDetailsForm() {
    return (
      <View style={{ justifyContent: 'space-between', height: height * 0.82 }}>
        <View style={{ marginHorizontal: 20, paddingTop: 10 }}>
          <Text style={[Fonts.black14InterMedium]}>Bank Name</Text>
          <TextInput
            value={bankName}
            onChangeText={e => setBankName(e)}
            style={commonStyles.inputbox1}
            placeholder="Enter Bank Name"
          />
          <Text style={[Fonts.black14InterMedium]}>Account Holder's Name</Text>
          <TextInput
            value={name}
            onChangeText={e => setName(e)}
            style={commonStyles.inputbox1}
            placeholder="Enter Name"
          />
          <Text style={[Fonts.black14InterMedium]}>IFSC Code</Text>
          <TextInput
            value={ifsc}
            maxLength={11}
            onChangeText={e => setIfsc(e)}
            style={commonStyles.inputbox1}
            placeholder="Enter IFSC Code"
          />
          <Text style={[Fonts.black14InterMedium]}>Account Number</Text>
          <TextInput
            value={accoountNumber}
            maxLength={16}
            inputMode="numeric"
            onChangeText={e => setAccountNumber(e)}
            style={commonStyles.inputbox1}
            placeholder="Enter Account Number"
          />
          <Text style={[Fonts.black14InterMedium]}>Account type</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={commonStyles.inputbox1}
            onPress={() => setVisible(true)}>
            <Text>{accountType == null ? 'Account type' : accountType?.title}</Text>
            <Menu
              visible={visible}
              animationDuration={100}
              style={{
                width: width * 0.5,
                position: 'absolute',
                top: '72%',
              }}
              anchor={<Ionicons name={'chevron-down'} size={15} />}
              onRequestClose={() => setVisible(false)}>
              <MenuItem
                onPress={() => handleSelectAccountType({ title: 'Saving account', value: 'SAVING' })}>
                <Text style={Fonts.gray14RobotoMedium}>Saving Account</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                onPress={() => handleSelectAccountType({ title: 'Current account', value: 'CURRENT' })}>
                <Text style={Fonts.gray14RobotoMedium}>Current Account</Text>
              </MenuItem>
            </Menu>
          </TouchableOpacity>
          <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
          }} >
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text>Save bank details by default</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => handleChange()}
            style={{
              backgroundColor: Colors.primaryDark,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              height: width * 0.13,
              width: '70%',
              paddingHorizontal: 15,
            }}>
            <Text style={Fonts.white16RobotoMedium}>Add Bank Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const mapStateToProps = state => ({
  providerData: state.provider.providerData,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBankDetails);
