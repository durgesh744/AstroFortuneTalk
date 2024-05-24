import {
  View,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import Loader from '../../component/common/Loader';
import MyHeader from '../../component/common/MyHeader';
import { Sizes, Colors } from '../../assets/style';
import MyStatusBar from '../../component/common/MyStatusBar';
import HistoryInfo from '../../component/ui/History/HistoryInfo';

const CallHistory = ({ navigation, providerData }) => {
  const [CallHistoryData, setCallHistoryData] = useState(
    [
      {
        country: 'USA',
        moa: '1',
        order_id: '123456',
        username: 'John Doe',
        gender: 'Male',
        date_of_birth: '1990-01-01',
        time_of_birth: '12:00',
        place_of_birth: 'New York',
        current_address: '123 Main St, New York, NY',
        problem: 'Financial Issues',
        created_datetime: '2023-05-20T14:30:00Z',
        duration: '30 minutes',
        rate: '20',
        deductAmt: '50.00',
        user_id: '7890',
        customer_id: 4680
      },
      {
        country: 'USA',
        moa: '1',
        order_id: '123456',
        username: 'John Doe',
        gender: 'Male',
        date_of_birth: '1990-01-01',
        time_of_birth: '12:00',
        place_of_birth: 'New York',
        current_address: '123 Main St, New York, NY',
        problem: 'Financial Issues',
        created_datetime: '2023-05-20T14:30:00Z',
        duration: '30 minutes',
        rate: '20',
        deductAmt: '50.00',
        user_id: 531,
        customer_id: 4680
      },
    ]
  );

  const [state, setState] = useState({
    isLoading: false,
    isActiveCall: false,
    activeCallData: null,
  });

  const get_kundli_details = async user_id => {
    try {
      navigation.navigate('kundliInfo', { kundli_id: 221, user_id: 531 })
    } catch (e) {
      console.log(e)
    }
  };

  const updateState = data => {
    setState(prevState => {
      const newData = { ...prevState, ...data };
      return newData;
    });
  };

  const { isLoading, isActiveCall, activeCallData } = state;

  return (
    <View style={{ flex: 1 }}>
      <Loader visible={isLoading} />
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <Loader visible={isLoading} />
      <MyHeader title="Call History" navigation={navigation} />
      <View style={{ flex: 1, marginTop: Sizes.fixPadding * 1.5 }}>
        <FlatList
          ListHeaderComponent={
            <>
              <HistoryInfo
                CallHistoryData={CallHistoryData}
                navigation={navigation}
                get_kundli_details={get_kundli_details}
              />
            </>
          }
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  providerData: state.provider.providerData,
  dashboard: state.provider.dashboard,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(CallHistory);