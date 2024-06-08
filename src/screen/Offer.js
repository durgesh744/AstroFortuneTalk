import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import MyStatusBar from '../component/MyStatusBar';
import MyHeader from '../component/MyHeader';
import { Colors, Fonts } from '../assets/style';
import { Switch } from 'react-native-switch';
import Loader from '../component/Loader';
import { SCREEN_WIDTH } from '../config/Screen';

const Offer = ({ authData, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch_all_offers();
  }, []);

  const fetch_all_offers = async () => {
  };

  const change_status = async () => {
  };

  const data = [
    {
      offer_name: "Durgesh Chaudhary",
      discount: "10%",
      user_status: "1",
      my_share: 545465,
      admin_share: 5245,
      current_pays: 53465,
      id: 1
    },
    {
      offer_name: "Durgesh Chaudhary",
      discount: "10%",
      user_status: "1",
      my_share: 545465,
      admin_share: 5245,
      current_pays: 53465,
      id: 2
    },
    {
      offer_name: "Durgesh Chaudhary",
      discount: "10%",
      user_status: "1",
      my_share: 545465,
      admin_share: 5245,
      current_pays: 53465,
      id: 3
    },

  ]
  
  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title="Call & Chat Offers" navigation={navigation} />
      <Loader visible={isLoading} />
      <View style={{ flex: 1 }}>
        <FlatList ListHeaderComponent={<>{offersInfo()}</>} />
      </View>
    </View>
  );

  function offersInfo() {
    const renderItem = ({ item }) => {
      return (
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
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <View style={{ width: '70%' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      ...Fonts.black16RobotoMedium,
                      fontWeight: '600',
                      color: Colors.gray,
                    }}>
                    Offer Name:{' '}
                  </Text>
                  <Text
                    style={{
                      ...Fonts.black16RobotoMedium,
                      fontWeight: '600',
                      color: Colors.green,
                    }}>
                    {item.offer_name}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      ...Fonts.black16RobotoMedium,
                      fontWeight: '600',
                      color: Colors.gray,
                      lineHeight: 18,
                    }}>
                    Display Name:{' '}
                  </Text>
                  <Text
                    style={{
                      ...Fonts.black16RobotoMedium,
                      fontWeight: '600',
                      color: Colors.primaryLight,
                      lineHeight: 18,
                    }}>
                    {item.discount}% off
                  </Text>
                </View>
              </View>
              <Switch
                value={item?.user_status == '1'}
                renderActiveText={false}
                renderInActiveText={false}
                circleBorderWidth={4}
                circleSize={20}
                onValueChange={() => change_status(item.id, item?.user_status)}
                circleBorderActiveColor={Colors.primaryLight}
                backgroundActive={Colors.primaryLight}
                backgroundInactive={Colors.gray3}
                circleBorderInactiveColor={Colors.primaryLight}
              />
            </View>
            <View>
              <Text style={{ ...Fonts.gray14RobotoMedium }}>
                User Type: All Users
              </Text>
              <Text
                style={{ ...Fonts.gray12RobotoMedium, fontSize: SCREEN_WIDTH * 0.03 }}>
                India: My Share: {parseFloat(item.my_share.toFixed(2))} | AT
                Share: {parseFloat(item.admin_share.toFixed(2))} | Customer
                Pays: {parseFloat(item.current_pays.toFixed(2))}
              </Text>
            </View>
          </View>
        </View>
      );
    };
    return (
      <View style={{ marginTop: '4%' }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
