import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Stars from 'react-native-stars';
import MyStatusBar from '../component/MyStatusBar';
import MyHeader from '../component/MyHeader';
import { Colors, Fonts, Sizes } from '../assets/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SCREEN_WIDTH } from '../config/Screen';

const Reviews = props => {
  const [rating, setRating] = useState(1);
  const DATA = [
    {
      id: 1,
      Name: 'First Item',
      Status: 'WAITING',
      Date: '05 Aug 23 , 04:54 PM',
      Type: 'CALL',
    },
    {
      id: 2,
      Name: 'First Item',
      Status: 'WAITING',
      Date: '05 Aug 23 , 04:54 PM',
      Type: 'CALL',
    },
  ];

  const DATA1 = [
    {
      id: 1,
      rating: 'All',
    },
    {
      id: 2,
      rating: '5',
    },
    {
      id: 3,
      rating: '4',
    },
    {
      id: 4,
      rating: '3',
    },
    {
      id: 5,
      rating: '2',
    },
    {
      id: 6,
      rating: '1',
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title="Reviews" navigation={props.navigation} />
      <View style={{ flex: 1, marginTop: Sizes.fixPadding * 1.5 }}>
        <FlatList
          ListHeaderComponent={
            <>
              {ratingList()}
              {chatHistoryInfo()}
            </>
          }
        />
      </View>
    </View>
  );

  function ratingList() {
    const renderItem1 = ({ item }) => (
      <View
        style={{
          marginHorizontal: 4,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => setRating(item.id)}
          style={{
            backgroundColor: item.id == rating ? Colors.primaryLight : Colors.grayDark,
            borderRadius: 20,
            flexDirection: 'row',
            paddingHorizontal: 15,
            paddingVertical: 5,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...Fonts.white14RobotoMedium,
              fontWeight: '700',
              paddingHorizontal: 2,
            }}>
            {item.rating}
          </Text>
          <MaterialIcons
            size={24}
            name={'star-rate'}
            color={Colors.white}
            style={[styles.myStarStyle, styles.myEmptyStarStyle]}
          />
        </TouchableOpacity>
      </View>
    );
    return (
      <View
        style={{
          flex: 0,
          width: '100%',
          borderBottomWidth: 1,
          top: -5,
          borderColor: Colors.grayLight,
        }}>
        <FlatList
          data={DATA1}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={renderItem1}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingVertical: 5, paddingBottom: 15 }}
        />
      </View>
    );
  }

  function chatHistoryInfo() {
    const renderItem = ({ item }) => (
      <View
        style={{
          marginHorizontal: 15,
          backgroundColor: Colors.dullWhite,
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
                  ...Fonts.white12RobotoRegular,
                  color: Colors.Dark_grayish_red,
                  fontSize: 15,
                }}>
                Order Id: 1691690168225
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
                  color: Colors.grayDark,
                }}>
                Monisha Lorina
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    ...Fonts.gray14RobotoMedium,
                    marginBottom: 5,
                    fontSize: 13,
                    color: Colors.grayDark,
                  }}>
                  Service:
                </Text>
                <Text
                  style={{
                    ...Fonts.gray14RobotoMedium,
                    marginBottom: 5,
                    fontSize: 13,
                    color: Colors.primaryLight,
                  }}>
                  CHAT
                </Text>
              </View>

              <Text
                style={{
                  ...Fonts.gray14RobotoMedium,
                  marginBottom: 5,
                  fontSize: 13,
                }}>
                11 Aug 2023
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  padding: 6,
                }}>
                <Stars
                  disabled={false}
                  default={5}
                  count={5}
                  half={true}
                  starSize={200}
                  rating={rating}
                  fullStar={
                    <MaterialIcons
                      size={20}
                      name={'star-rate'}
                      style={[styles.myStarStyle]}
                    />
                  }
                  emptyStar={
                    <MaterialIcons
                      size={20}
                      name={'star-rate'}
                      color={Colors.white}
                      style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                    />
                  }
                  halfStar={
                    <Icon name={'star-half'} style={[styles.myStarStyle]} />
                  }
                />
                <Text style={{ ...Fonts.gray14RobotoRegular, fontWeight: '600' }}>
                  Good
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
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
          <Text
            style={{
              ...Fonts.white14RobotBold,
              color: Colors.primaryLight,
              textDecorationLine: 'underline',
              textAlign: 'center',
            }}>
            Reply to this review
          </Text>
        </TouchableOpacity>
      </View>
    );
    return (
      <View style={{ marginTop: '5%' }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingVertical: 15 }}
        />
      </View>
    );
  }
};

export default Reviews;

const styles = StyleSheet.create({
  myStarStyle: {
    color: '#FEE781',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
});
