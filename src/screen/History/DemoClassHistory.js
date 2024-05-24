import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import MyStatusBar from '../../component/MyStatusBar';
import Loader from '../../component/Loader';
import {Colors, Fonts, Sizes} from '../../assets/style';
import {SCREEN_WIDTH} from '../../config/Screen';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {api_url, pdf_course_demo_astro_history} from '../../config/Constants';
import {ApiRequests} from '../../config/requests';

const DemoClassHistory = ({navigation, providerData}) => {
  const [state, setState] = useState({
    isLoading: false,
    historyData: null,
  });

  useEffect(() => {
    get_demo_history();
  }, []);

  const get_demo_history = async () => {
    updateState({isLoading: true});
    try {
      const response = await ApiRequests.postRequest({
        url: api_url + pdf_course_demo_astro_history,
        data: {
          astro_id: providerData?.id,
        },
      });

      if (response.status == '200') {
        updateState({historyData: response.data});
      }
      updateState({isLoading: false});
    } catch (e) {
      updateState({isLoading: false});
      console.log(e);
    }
  };

  const updateState = data => {
    setState(prevState => {
      const newData = {...prevState, ...data};
      return newData;
    });
  };

  const {isLoading, historyData} = state;
  return (
    <View style={{flex: 1}}>
      <Loader visible={isLoading} />
      <View style={{flex: 1, marginTop: Sizes.fixPadding * 1.5}}>
        <FlatList
          ListHeaderComponent={<>{historyData && demoHistoryInfo()}</>}
        />
      </View>
    </View>
  );

  function demoHistoryInfo() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        // onPress={() =>
        //   navigation.navigate('demoClassDetails', {
        //     classData: item,
        //   })
        // }
        activeOpacity={0.9}
        style={styles.container}>
        <View style={styles.subContainer}>
          <Text numberOfLines={1} style={{...Fonts.primaryDark16RobotoMedium}}>
            {item?.course_name}
          </Text>
          <Text
            numberOfLines={4}
            style={[
              Fonts.gray14RobotoRegular,
              {marginTop: 5, textAlign: 'justify'},
            ]}>
            {item?.description}
          </Text>
        </View>
        <LinearGradient
          colors={[Colors.grayDark, Colors.grayDark]}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          locations={[0.5, 1]}
          style={[styles.statusContainer]}>
          <View style={styles.statusTextBox}>
            <Text style={[Fonts.white14RobotoMedium, {textAlign: 'center'}]}>
              Completed
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={historyData}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: 15}}
      />
    );
  }
};

const mapStateToProps = state => ({
  providerData: state.provider.providerData,
});

export default connect(mapStateToProps, null)(DemoClassHistory);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: 'transparent',
    marginBottom: SCREEN_WIDTH * 0.11,
    marginTop: 10,
    position: 'relative',
  },
  subContainer: {
    borderRadius: 20,
    backgroundColor: Colors.grayLight,
    borderRadius: SCREEN_WIDTH * 0.04,
    elevation: 3,
    padding: SCREEN_WIDTH * 0.05,
  },
  statusContainer: {
    borderRadius: 20,
    borderRadius: SCREEN_WIDTH * 0.04,
    elevation: 3,
    paddingBottom: SCREEN_WIDTH * 0.025,
    paddingHorizontal: SCREEN_WIDTH * 0.02,
    position: 'absolute',
    height: SCREEN_WIDTH * 0.2,
    zIndex: -1,
    bottom: -SCREEN_WIDTH * 0.1,
    right: 0,
  },
  statusTextBox: {
    width: SCREEN_WIDTH * 0.4,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});