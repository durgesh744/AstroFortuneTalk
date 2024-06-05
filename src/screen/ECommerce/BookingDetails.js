import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MyHeader from '../../component/common/MyHeader';
import { Colors, Sizes, Fonts } from '../../assets/style';
import MyStatusBar from '../../component/common/MyStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../../component/common/Loader';

const BookingDetails = ({ navigation, route }) => {
  const [state, setState] = useState({
    isLoading: false,
    bookingData: null,
    poojaData: route?.params?.poojaData,
  });

  const { isLoading } = state;

  // Example poojaData (passed through route params)
  const poojaData = {
    title: 'Durgesh Chaudhary',
    date: '2024-06-01',  // date string
    time: '08:00 AM',    // time string
    price: '500',
    pooja_id: '1',
  };

  // Example bookingData (retrieved from the API)
  const bookingData = {
    username: 'Durgesh Chaudhary',
    gender: '1',  // '1' for Male, '2' for Female, or other values
    date_of_birth: '1990-01-01',  // date string
    time_of_birth: '07:30',       // time string in 'hh:mm' format
    birth_place: 'New York',
    current_address: '123 Main St, New York, NY',
    occupation: 'Software Engineer',
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bodyColor }}>
      <MyStatusBar
        backgroundColor={Colors.primaryDark}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <View style={{ flex: 1 }}>
        {header()}
        <FlatList
          ListHeaderComponent={
            <>
              {topMessageInfo()}
              {poojaInfo()}
              {bookingData && profileDetailsInfo()}
              {bookingData && paidAmountInfo()}
            </>
          }
        />
      </View>
      {continueButtonInfo()}
    </View>
  );

  function continueButtonInfo() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('uploadEcommerce', { poojaData: poojaData })
        }
        style={{
          marginHorizontal: Sizes.fixPadding * 3,
          marginVertical: Sizes.fixPadding,
          borderRadius: 1000,
          overflow: 'hidden',
        }}>
        <LinearGradient
          colors={[Colors.primaryDark, Colors.primaryDark]}
          style={{ paddingVertical: Sizes.fixPadding }}>
          <Text style={{ ...Fonts.white16RobotoMedium, textAlign: 'center' }}>
            Upload a Attachment
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  function paidAmountInfo() {
    return (
      <View
        style={{
          margin: Sizes.fixPadding * 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: Sizes.fixPadding * 1.5,
          backgroundColor: Colors.whiteDark,
          borderRadius: Sizes.fixPadding * 1.5,
          elevation:2
        }}>
        <Text style={{ ...Fonts.black18RobotoMedium, color: Colors.blackLight }}>
          Paid Amount
        </Text>
        <Text style={{ ...Fonts.black18RobotoMedium, color: Colors.blackLight }}>
          ₹ {poojaData?.price}/-
        </Text>
      </View>
    );
  }

  function profileDetailsInfo() {
    return (
      <View style={{ margin: Sizes.fixPadding * 2 }}>
        <Text style={{ ...Fonts.primaryLight14RobotoRegular }}>
          Profile Details:
        </Text>
        <View style={styles.itemContainer}>
          <Text style={styles.child}>Name</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.childValue}>{bookingData?.username}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.child}>Gender</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.childValue}>
            {bookingData?.gender == '1'
              ? 'Male'
              : bookingData?.gender == '2'
                ? 'Female'
                : bookingData?.gender}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.child}>Birth Date</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.childValue}>
            {moment(bookingData?.date_of_birth).format('DD-MMMM-YYYY')}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.child}>Birth Time</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.childValue}>
            {moment(bookingData?.time_of_birth, 'hh:mm').format('hh:mm A')}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.child}>Birth Place</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.childValue}>{bookingData?.current_address}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.child}>Current Address</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.childValue}>{bookingData?.current_address}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.child}>Occupation</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.childValue}>{bookingData?.occupation}</Text>
        </View>
      </View>
    );
  }

  function poojaInfo() {
    return (
      <View
        style={{
          paddingBottom: Sizes.fixPadding * 2,
          borderBottomWidth: 1,
          borderBottomColor: Colors.grayLight,
        }}>
        <View
          style={{
            marginHorizontal: Sizes.fixPadding * 2,
            borderRadius: Sizes.fixPadding * 1.4,
            padding: Sizes.fixPadding * 1.5,
            elevation: 5,
            shadowColor: Colors.blackLight,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.whiteDark,
          }}>
          <Text
            style={{
              ...Fonts.primaryDark18RobotoMedium,
              marginBottom: Sizes.fixPadding * 0.5,
              fontWeight:"700"
            }}>
            {poojaData?.title}
          </Text>
          <Text
            style={{
              ...Fonts.gray14RobotoMedium,
              color: Colors.blackLight,
              marginBottom: Sizes.fixPadding * 0.3,
            }}>
            {moment(poojaData?.date).format('Do MMMM YYYY')}
          </Text>
          <Text
            style={{
              ...Fonts.gray14RobotoMedium,
              color: Colors.blackLight,
              marginBottom: Sizes.fixPadding * 0.3,
            }}>
            at {moment(poojaData?.time).format('hh:mm A')}
          </Text>
        </View>
      </View>
    );
  }

  function topMessageInfo() {
    return (
      <View style={{ margin: Sizes.fixPadding * 2 }}>
        <Text
          style={{
            ...Fonts.black18RobotoMedium,
            color: '#5DC709',
            textAlign: 'center',
            fontWeight:"600"
          }}>
          You’ve been Booked for Pooja !!
        </Text>
      </View>
    );
  }

  function header() {
    return <MyHeader navigation={navigation} title={'Booking'} />;
  }
};

export default BookingDetails;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  child: {
    flex: 0.4,
    ...Fonts.black14RobotoRegular,
    fontSize: 13,
  },
  colon: { ...Fonts.black16RobotoMedium },
  childValue: {
    flex: 0.6,
    ...Fonts.black14RobotoRegular,
    marginLeft: Sizes.fixPadding,
    fontSize: 13,
  },
});
