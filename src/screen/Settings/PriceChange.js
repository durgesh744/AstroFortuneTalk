import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Colors, Fonts, Sizes } from '../../assets/style';
import LinearGradient from 'react-native-linear-gradient';
import { api_url, get_request } from '../../config/Constants';
import MyStatusBar from '../../component/common/MyStatusBar';
import Loader from '../../component/common/Loader';
import MyHeader from '../../component/common/MyHeader';
import CustomLine from '../../component/common/CustomLine';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Screen';

const PriceChange = ({ navigation, providerData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [his, sethis] = useState();
  const [state, setState] = useState({
    isLoading: false,
    eventName: '',
    startTime: null,
    startDate: null,
    modalVisible: false,
    eventsData: null,
  });

  const { eventsData } = state;
  useEffect(() => {
    getHistory();
  }, []);

  const updateState = data => {
    setState(prevData => {
      const newData = { ...prevData, ...data };
      return newData;
    });
  };

  const getHistory = async () => {
    setIsLoading(true);
    let data = new FormData();
    data.append('astro_id', '526');
    await axios({
      method: 'post',
      url: api_url + get_request,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    })
      .then(async res => {
        setIsLoading(false);
        if (res.data) {
          sethis(res.data);
        }
      })
      .catch(err => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    updateState({
      eventsData: [
        {
          serviceType: "CALL",
          price: "My Price in India 12.0",
          creation_time: "09 Apr 22, 10:42 PM",
          status: "APPROVED"
        },
        {
          serviceType: "CALL",
          price: "My Price in India 12.0",
          creation_time: "09 Apr 22, 10:42 PM",
          status: "APPROVED"
        },
        {
          serviceType: "CALL",
          price: "My Price in India 12.0",
          creation_time: "09 Apr 22, 10:42 PM",
          status: "APPROVED"
        }
      ]
    })
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <MyHeader title={'Price Change Request'} navigation={navigation} />
      <CustomLine />
      <FlatList ListHeaderComponent={<>{eventsData && liveListInfo()}</>} />
      {BottonButton()}
    </View>
  );

  function BottonButton() {
    return (
      <View
        style={{
          flex: 0,
          borderTopWidth: 1,
          borderColor: Colors.gray_light,
          justifyContent: 'center',
          marginBottom: SCREEN_HEIGHT * 0.04,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <LinearGradient
            colors={[Colors.primaryLight, Colors.primaryDark]}
            style={styles.touchablity}>
            <TouchableOpacity
              onPress={() => navigation.navigate('priceRequest')}>
              <Text style={{ ...Fonts.white16RobotBold, textAlign: 'center' }}>
                + Request for new Price
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }

  function liveListInfo() {
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginTop: Sizes.fixPadding * 1,
            borderRadius: Sizes.fixPadding,
            shadowColor: Colors.black,
            marginVertical: 10,
            marginHorizontal: 20,
            elevation: 5,
            backgroundColor: Colors.grayLight,
            paddingVertical: 15,
            paddingHorizontal: 15
          }}
        >
          <Text style={{
            ...Fonts.while24RighteousRegular,
            fontWeight: '800',
            color: "#454444",
            fontSize: 16,
            paddingBottom: 10,
          }}>
            Service Type: <Text style={{ color: Colors.green }}>{item.serviceType}</Text>
          </Text>
          <Text
            style={{
              ...Fonts.white14RobotoMedium,
              color: "#8C9099",
              fontWeight: '600',
            }}>
            {item.price}
          </Text>
          <Text
            style={{
              ...Fonts.white14RobotoMedium,
              color: "#8C9099",
              fontWeight: '600',
              paddingVertical: 4
            }}>
            Creation Time: {item.creation_time}
          </Text>
          <Text style={{
            ...Fonts.white14RobotoMedium,
            color: "#8C9099",
            fontWeight: '600',
          }}>
            Status: <Text style={{ color: Colors.green }}>{item.status}</Text>
          </Text>

        </TouchableOpacity>
      );
    };
    return (
      <View style={{paddingTop:20}} >
        <FlatList data={eventsData.reverse()} renderItem={renderItem} />
      </View>
    );
  }
};

const mapStateToProps = state => ({
  providerData: state.provider.providerData,
  dashboard: state.provider.dashboard,
});

export default connect(mapStateToProps, null)(PriceChange);

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
  centeredView: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    padding: 25,
    backgroundColor: Colors.dullWhite,
    alignItems: 'flex-start',
    marginHorizontal: Sizes.fixPadding,
    width: '80%',
    borderRadius: 30,
  },
  inputContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: Colors.black,
    padding: 10,
    marginBottom: 20,
    zIndex: -1,
    width: SCREEN_WIDTH * 0.4,
    backgroundColor: Colors.white,
    elevation: 15,
    shadowColor: Colors.black,
    justifyContent: 'space-between',
    padding: 5,
    width: '100%',
    height: 50,
  },
  txtInput: {
    padding: 10,
    backgroundColor: Colors.white,
    marginTop: 10,
    borderRadius: 5,
    borderColor: Colors.black,
    elevation: 15,
    shadowColor: Colors.black,
  },
  blurContainer: {
    flex: 1,
  },
});
