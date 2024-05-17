import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import { useState } from 'react';
import MyStatusBar from '../component/MyStatusBar';
import { Colors, Fonts, Sizes } from '../assets/style';
import MyHeader from '../component/MyHeader';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import Loader from '../component/Loader';
import CustomLine from '../component/common/CustomLine';
import CustomDropdown from '../component/common/CustomDropdown';

const { width, height } = Dimensions.get('screen');

const PriceChangeRequest = ({ navigation, providerData }) => {
  const [dropdown, setDropdown] = useState(null)
  const [state, setState] = useState({
    isLoading: false,
    eventName: '',
    startTime: null,
    startDate: null,
    modalVisible: false,
    visible: false,
    dataFocus: false,
  });

  const { isLoading } =
    state;

  const data = [
    {
      label: "Call",
      value: "CALL"
    },
    {
      label: "Chat",
      value: "CHAT"
    }
  ]

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <MyHeader title={'Price Change Request'} navigation={navigation} />
      <CustomLine />
      <FlatList ListHeaderComponent={
        <>
          {policy()}
        </>
      }
      />
      {Customer()}
      {BottonButton()}
    </View>
  );

  function Customer() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          paddingBottom: 5
        }}
      >
        <View>
          <Text style={styles.custom}>Customer</Text>
          <Text style={styles.custom}>Price</Text>
        </View>
        <View style={{ width: "33%" }} >
          <Text style={{ paddingLeft: 10, color: Colors.Dark_grayish_red  }} >Select Type</Text>
          <CustomDropdown data={data} setValue={setDropdown} value={dropdown} />
        </View>
        <TextInput style={styles.txtInput} />
      </View>
    );
  }

  function BottonButton() {
    return (
      <View
        style={{
          flex: 0,
          borderTopWidth: 1,
          borderColor: Colors.gray_light,
          justifyContent: 'center',
          marginBottom: height * 0.07,
        }}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <LinearGradient
            colors={[Colors.primaryLight, Colors.primaryDark]}
            style={styles.touchablity}>
            <TouchableOpacity>
              <Text style={{ ...Fonts.white16RobotBold, textAlign: 'center' }}>
                + Request for new Price
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }

  function policy() {
    return (
      <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
        <Text style={{color: Colors.Dark_grayish_red }} >1. Eligibility for Price Increase?</Text>
        <Text style={{ paddingVertical: 5, color: Colors.Dark_grayish_red }} >a. Customer Satisfaction must be Excellent which means &gt;= 64%.</Text>
        <Text style={{ paddingVertical: 5, color: Colors.Dark_grayish_red }} >b. Retention Rate must be Excellent which means &gt;=17.</Text>
        <Text style={{ paddingVertical: 5, color: Colors.Dark_grayish_red }} >c. Average Call Rating must be Excellent which means &gt;=4.75.</Text>
        <Text style={{ paddingVertical: 5, color: Colors.Dark_grayish_red }} >d. Average Chat Rating must be Excellent which means &gt;=4.75. e. PO rating 4.2</Text>
        <Text style={{ paddingVertical: 5, color: Colors.Dark_grayish_red }} >f. PO served properly percentage must be excellent &gt; 85%. g. Last 30 days busy time must be &gt;=4 hours.</Text>
        <Text style={{ paddingVertical: 5, color: Colors.Dark_grayish_red }} >If customer price is Rs 20: Customer Price can be increased by upto Rs 4 after 30 days. after every 3 months.</Text>
        <Text style={{ paddingVertical: 5, color: Colors.Dark_grayish_red }} >ii. If customer price &gt;= Rs 20 and Rs 30: Customer price can be increased by upto Rs 4,</Text>
        <Text style={{ paddingVertical: 5, color: Colors.Dark_grayish_red }} >iii. If customer price &gt;= Rs 30: Customer price can be increased by upto 10% (or Rs 4) with a maximum by Rs 10, after every 6 months</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  providerData: state.provider.providerData,
  dashboard: state.provider.dashboard,
});

export default connect(mapStateToProps, null)(PriceChangeRequest);

const styles = StyleSheet.create({
  touchablity: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 40,
    padding: 10,
    paddingHorizontal: Sizes.fixPadding * 1.5,
    width: '80%',
    justifyContent: 'center',
    marginHorizontal: Sizes.fixPadding,
    marginTop: Sizes.fixPadding * 2.6,
  },
  txtInput: {
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    shadowColor: Colors.black,
    borderRadius: 5,
    elevation: 5,
    width: "25%"
  },
  custom: {
    color: Colors.primaryDark,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
