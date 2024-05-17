import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import Loader from '../component/Loader';
import MyHeader from '../component/MyHeader';
import React, { useEffect, useState } from 'react';
import MyStatusBar from '../component/MyStatusBar';
import { Colors, Fonts, Sizes } from '../assets/style';
import { api_url, get_PDF, provider_img_url } from '../config/Constants';
import { useAuth } from '../context/AuthContext';

const { width, height } = Dimensions.get('screen');

const DownloadForm16A = props => {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false);
  const [pdf, setPDF] = useState();

  useEffect(() => {
    fetch_PDF();
  }, []);

  const fetch_PDF = async () => {
    setIsLoading(true);
    await axios({
      method: 'post',
      url: api_url + get_PDF,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: {
        astrologer_id: user?.data?.user?.id,
      },
    })
      .then(async res => {
        if (res.data?.status) {
          setPDF(res.data.data);
          setIsLoading(false);
        } else {
          setGalleryPhotos(null);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title="Download Form 16A" navigation={props.navigation} />
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
        <Text numberOfLines={1} style={{ ...Fonts.grayDark16RobotoMedium , color:Colors.Dark_grayish_red}}>
          {item.title}
        </Text>
        <Image source={require('../../src/assets/icon/download_purple.png')} />
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
  providerData: state.provider.providerData,
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
    padding: width * 0.05,
    borderRadius: width * 0.03,
    elevation: 5,
  },
});
