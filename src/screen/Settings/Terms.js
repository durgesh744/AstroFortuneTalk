import { View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors, Sizes } from '../../assets/style';
import { ApiRequests } from '../../config/Requests';
import RenderHtml from 'react-native-render-html';
import { SCREEN_WIDTH } from '../../config/Screen';
import Loader from '../../component/Loader';
import { api_url, terms } from '../../config/constants';
import MyHeader from '../../component/MyHeader';
import MyStatusBar from '../../component/MyStatusBar';

const Terms = ({ navigation }) => {
  const [state, setState] = useState({
    isLoading: false,
    policyData: null,
  });

  useEffect(() => {
    get_policy();
  }, []);

  const get_policy = async () => {
    try {
      updateState({ isLoading: true });
    } catch (e) {
      updateState({ isLoading: false });
      console.log(e);
    }
  };

  const updateState = data => {
    setState(prevState => {
      const newData = { ...prevState, ...data };
      return newData;
    });
  };

  const { isLoading, policyData } = state;

  return (
    <View style={{ flex: 1, backgroundColor:"#fff" }}>
      <MyStatusBar
        backgroundColor={"#9D6BC7"}
        barStyle={'light-content'}
      />
      <MyHeader title="Terms and Conditions" navigation={navigation} />
      <Loader visible={isLoading} />
      <View style={{ flex: 1 }}>
        <FlatList ListHeaderComponent={<>{policyData && policyInfo()}</>} />
      </View>
    </View>
  );

  function policyInfo() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: Sizes.fixPadding,
        }}>
        <RenderHtml
          contentWidth={SCREEN_WIDTH}
          source={{ html: policyData }}
          enableExperimentalMarginCollapsing={true}
          baseStyle={{
            color: Colors.blackLight,
            textAlign: 'auto',
            fontSize: '14px',
            lineHeight: 22,
          }}
        />
      </View>
    );
  }
};

export default Terms;
