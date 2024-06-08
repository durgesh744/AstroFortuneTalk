import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Colors, Sizes, Fonts } from '../../assets/style';
import LinearGradient from 'react-native-linear-gradient';
import MyStatusBar from '../../component/MyStatusBar';
import Loader from '../../component/Loader';
import MyHeader from '../../component/MyHeader';

const ScheduledList = ({ navigation }) => {
  const [state, setState] = useState({
    isLoading: false,
    poojaData: null,
    isSpell: false,
    spellData: null,
  });

  const updateState = data => {
    setState(prevState => {
      const newData = { ...prevState, ...data };
      return newData;
    });
  };

  const { isLoading, isSpell } = state;

  const spellData = [
    {
      id: '1',
      title: 'Morning Pooja',
      date: new Date(),
      time: new Date(),
      price: '500',
      is_booked: '1',
    },
    {
      id: '2',
      title: 'Afternoon Pooja',
      date: new Date(),
      time: new Date(),
      price: '700',
      is_booked: '0',
    },
    {
      id: '3',
      title: 'Evening Pooja',
      date: new Date(),
      time:  new Date(),
      price: '600',
      is_booked: '1',
    },
  ];

  const poojaData = [
    {
      id: '1',
      title: 'Morning Pooja',
      date: new Date(),
      time: new Date(),
      price: '500',
      is_booked: '1',
    },
    {
      id: '2',
      title: 'Afternoon Pooja',
      date: new Date(),
      time:  new Date(),
      price: '700',
      is_booked: '0',
    },
    {
      id: '3',
      title: 'Evening Pooja',
      date: new Date(),
      time:  new Date(),
      price: '600',
      is_booked: '1',
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: Colors.bodyColor }}>
      <MyStatusBar
        backgroundColor={Colors.primaryDark}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <View style={{ flex: 1 }}>
        <MyHeader navigation={navigation} title={'Scheduled list'} />
        {categoryInfo()}
        <FlatList
          ListHeaderComponent={
            <>
              {
                !isSpell
                  ?
                  poojaData && poojaDataInfo()
                  :
                  spellData && spellDataInfo()
              }
            </>
          }
        />
      </View>
    </View>
  );

  function spellDataInfo() {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={item?.is_booked != '1'}
          onPress={() =>
            navigation.navigate('bookingDetails', { poojaData: item })
          }
          style={styles.itemContainer}>
          <Text
            style={{
              ...Fonts.primaryDark16RobotoMedium,
              marginBottom: Sizes.fixPadding,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              ...Fonts.gray14RobotoMedium,
              color: Colors.blackLight,
              marginBottom: Sizes.fixPadding * 0.3,
            }}>
            Scheduled Date - {moment(item.date).format('Do MMM YYYY')}
          </Text>
          <Text
            style={{
              ...Fonts.gray14RobotoMedium,
              color: Colors.blackLight,
              marginBottom: Sizes.fixPadding * 0.3,
            }}>
            Scheduled Time - {moment(item.time).format('hh:mm A')}
          </Text>

          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                ...Fonts.primaryLight14RobotoMedium,
              }}>
              Price of Pooja - ₹{item.price}-/
            </Text>
            <Text
              style={{
                ...Fonts.black16RobotoMedium,
                color: item?.is_booked == '1' ? Colors.greenLight : Colors.red2,
              }}>
              {item?.is_booked == '1' ? 'Booked' : 'Not Booked'}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 1.5,
          marginVertical: Sizes.fixPadding * 2,
        }}>
        <FlatList
          data={spellData.reverse()}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

  function poojaDataInfo() {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          disabled={item?.is_booked != '1'}
          onPress={() =>
            navigation.navigate('bookingDetails', { poojaData: item })
          }
          style={styles.itemContainer}>
          <Text
            style={{
              ...Fonts.primaryDark16RobotoMedium,
              marginBottom: Sizes.fixPadding,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              ...Fonts.gray14RobotoMedium,
              color: Colors.blackLight,
              marginBottom: Sizes.fixPadding * 0.3,
            }}>
            Scheduled Date - {moment(item.date).format('Do MMM YYYY')}
          </Text>
          <Text
            style={{
              ...Fonts.gray14RobotoMedium,
              color: Colors.blackLight,
              marginBottom: Sizes.fixPadding * 0.3,
            }}>
            Scheduled Time - {moment(item.time).format('hh:mm A')}
          </Text>

          <View
            style={{
              flex: 0,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                ...Fonts.primaryLight14RobotoMedium,
              }}>
              Price of Pooja - ₹{item.price}-/
            </Text>
            <Text
              style={{
                ...Fonts.black16RobotoMedium,
                color: item?.is_booked == '1' ? Colors.greenLight : Colors.red2,
              }}>
              {item?.is_booked == '1' ? 'Booked' : 'Not Booked'}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 1.5,
          marginVertical: Sizes.fixPadding * 2,
        }}>
        <FlatList
          data={poojaData.reverse()}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

  function categoryInfo() {
    return (
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: Sizes.fixPadding,
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => updateState({ isSpell: false })}
          style={{ width: '45%' }}>
          <LinearGradient
            colors={
              !isSpell
                ? [Colors.primaryLight, Colors.primaryDark]
                : [Colors.gray, Colors.gray]
            }
            style={{
              width: '100%',
              borderRadius: 1000,
              paddingVertical: Sizes.fixPadding * 0.7,
            }}>
            <Text style={{ ...Fonts.white14RobotoMedium, textAlign: 'center' }}>
              E-Pooja
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => updateState({ isSpell: true })}
          style={{ width: '45%' }}>
          <LinearGradient
            colors={
              isSpell
                ? [Colors.primaryLight, Colors.primaryDark]
                : [Colors.gray, Colors.gray]
            }
            style={{
              width: '100%',
              borderRadius: 1000,
              paddingVertical: Sizes.fixPadding * 0.7,
            }}>
            <Text style={{ ...Fonts.white14RobotoMedium, textAlign: 'center' }}>
              Spell
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }

};

const mapStateToProps = state => ({
  authData: state.authProvider.authData,
});

export default connect(mapStateToProps, null)(ScheduledList);

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.grayLight,
    marginBottom: Sizes.fixPadding * 2,
    borderRadius: Sizes.fixPadding * 1.4,
    padding: Sizes.fixPadding * 1.5,
    elevation: 3,
    shadowColor: Colors.black,
  },
});
