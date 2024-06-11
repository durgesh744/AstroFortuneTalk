import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import Loader from '../../component/Loader';
import MyHeader from '../../component/MyHeader';
import { SCREEN_WIDTH } from '../../config/Screen';
import MyStatusBar from '../../component/MyStatusBar';
import { Colors, Fonts, Sizes } from '../../assets/style';
import { provider_img_url } from '../../config/constants';
import Octicons from 'react-native-vector-icons/Octicons'

const DownloadForm16A = ({ navigation, authData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pdf, setPDF] = useState();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title="Download Form 16A" navigation={navigation} />
      <Loader visible={isLoading} />
      <View style={{ flex: 1, marginTop: Sizes.fixPadding * 1.5 }}>
        <FlatList ListHeaderComponent={<>{filesList()}</>} />
      </View>
    </View>
  );

  function filesList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        onPress={() => Linking.openURL(provider_img_url + item.pdf)}
        activeOpacity={0.9}
        style={styles.button}>
        <Text numberOfLines={1} style={{ ...Fonts.grayDark16RobotoMedium, color: Colors.Dark_grayish_red }}>
          {item.title}
        </Text>
        <Octicons name="download" size={26} color={Colors.primaryLight} />
      </TouchableOpacity>
    );

    return (
      <>
        {pdf !== null ? (
          <FlatList
            data={pdf}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingVertical: 15 }}
          />
        ) : (
          <Text
            style={{
              paddingVertical: 20,
              ...Fonts.primaryLight14RobotoRegular,
              textAlign: 'center',
            }}>
            No PDF Found.
          </Text>
        )}
      </>
    );
  }
};

const mapStateToProps = state => ({
  authData: state.authProvider.authData,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(DownloadForm16A);

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 15,
    backgroundColor: Colors.grayLight,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SCREEN_WIDTH * 0.05,
    borderRadius: SCREEN_WIDTH * 0.03,
    elevation: 5,
  },
});
