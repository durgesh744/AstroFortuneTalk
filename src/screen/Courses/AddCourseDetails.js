import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import { Colors, Fonts, Sizes } from '../../assets/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SCREEN_WIDTH } from '../../config/Screen';
import LinearGradient from 'react-native-linear-gradient';
import DocumentPicker from 'react-native-document-picker';
import { api_url, upload_free_pdf } from '../../config/constants';
import * as Progress from 'react-native-progress';
import MyStatusBar from '../../component/MyStatusBar';
import MyHeader from '../../component/MyHeader';
import Loader from '../../component/Loader';
import DemoClass from '../../component/ui/Courses/DemoClass';
import LiveClassForm from '../../component/ui/Courses/LiveClassForm';

const AddCourseDetails = ({ navigation, route, authData }) => {
  const [freePDFTitle, setFreePDFTitle] = useState('');
  const [freePDF, setFreePDF] = useState(null);

  const [paidPDFTitle, setPaidPDFTitle] = useState('');
  const [paidPDFAmount, setPaidPDFAmount] = useState('');
  const [paidPDF, setPaidPDF] = useState(null);
  // FreePDF States End //

  const [dateShow, setDateShow] = useState(false);
  const [date, setDate] = useState(null);
  const [timeShow, setTimeShow] = useState(false);
  const [time, setTime] = useState(null);

  const [state, setState] = useState({
    isLoading: false,
    selectedTab: null,
    scheduleClassButtons: true,
    pdfButtons: true,
    uploadProgress: 0,
    uploading: false,
  });

  const handleTabPress = tabName => {
    if (selectedTab !== tabName) {
      updateState({ selectedTab: tabName });
      if (tabName === 'demoClass' || tabName === 'liveClass') {
        updateState({ scheduleClassButtons: true, pdfButtons: false });
      } else {
        updateState({ pdfButtons: true });
      }
    } else {
      updateState({
        scheduleClassButtons: true,
        pdfButtons: true,
        selectedTab: null,
      });
    }
  };

  const selectPDF = async value => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      if (value == 'free') {
        setFreePDF(result[0]);
      } else {
        setPaidPDF(result[0]);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  const validationFreePDF = () => {
    if (freePDFTitle.length == 0) {
      Alert.alert('Please enter Title');
      return false;
    } else if (freePDF == null) {
      Alert.alert('Please Select a PDF');
      return false;
    } else {
      return true;
    }
  };

  const submitFreePDF = async () => {
    if (validationFreePDF()) {
      updateState({ isLoading: true });
      RNFetchBlob.fetch(
        'POST',
        api_url + upload_free_pdf,
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          { name: 'astro_id', data: authData.id },
          { name: 'title', data: freePDFTitle },
          { name: 'type', data: 'free_pdf' },
          { name: 'amount', data: '' },
          { name: 'course_id', data: route.params.course_id },
          {
            name: 'pdf_file',
            filename: `${freePDF.name}`,
            type: 'jpg/png',
            data: RNFetchBlob.wrap(freePDF.uri),
          },
        ],
      )
        .then(async res => {
          var data = JSON.parse(res.data);
          if (data.status) {
            updateState({ isLoading: false });
            Alert.alert('PDF Submit Successfull');
            clearFields();
          }
        })
        .catch(err => {
          console.log(err);
          Alert.alert('Server Error');
          updateState({ isLoading: false });
        });
    }
  };

  const validationPaidPDF = () => {
    if (paidPDFTitle.length == 0) {
      Alert.alert('Please enter Title');
      return false;
    } else if (paidPDFAmount.length == 0) {
      Alert.alert('Please enter Amount');
      return false;
    } else if (paidPDF == null) {
      Alert.alert('Please Select a PDF');
      return false;
    } else {
      return true;
    }
  };

  const submitPaidPDF = async () => {
    if (validationPaidPDF()) {
      updateState({ isLoading: true });
      await RNFetchBlob.fetch(
        'POST',
        api_url + upload_free_pdf,
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          { name: 'astro_id', data: authData.id },
          { name: 'title', data: paidPDFTitle },
          { name: 'type', data: 'paid_pdf' },
          { name: 'amount', data: paidPDFAmount },
          { name: 'course_id', data: route.params.course_id },
          {
            name: 'pdf_file',
            filename: `${paidPDF.name}`,
            type: 'jpg/png',
            data: RNFetchBlob.wrap(paidPDF.uri),
          },
        ],
      )
        .then(async res => {
          var data = JSON.parse(res.data);
          if (data.status) {
            updateState({ isLoading: false });
            Alert.alert('PDF Submit Successfull');
            clearFields();
          }
        })
        .catch(err => {
          console.log(err);
          Alert.alert('Server Error');
          updateState({ isLoading: false });
        });
    }
  };

  const clearFields = () => {
    setFreePDFTitle('');
    setFreePDF(null);
    setPaidPDFTitle('');
    setPaidPDFAmount('');
    setPaidPDF(null);
  };

  const updateState = data => {
    setState(prevState => {
      const newData = { ...prevState, ...data };
      return newData;
    });
  };

  const {
    isLoading,
    selectedTab,
    scheduleClassButtons,
    pdfButtons,
    uploadProgress,
    uploading,
  } = state;

  return (
    <View style={{ flex: 1 }}>
      <MyStatusBar
        backgroundColor={Colors.primaryLight}
        barStyle={'light-content'}
      />
      <MyHeader title={route.params.headerTitle} navigation={navigation} />
      {uploading && vedioUploadProgress()}
      <Loader visible={isLoading} />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <FlatList
          ListHeaderComponent={
            <>
              {scheduleClassButtons && scheduleClassNavigator()}
              {pdfButtons && pdfNavigator()}
              {selectedTab === 'demoClass' && (
                <DemoClass
                  navigation={navigation}
                  providerData={authData}
                  courseId={route?.params?.course_id}
                />
              )}
              {selectedTab === 'liveClass' && (
                <LiveClassForm
                  updateState={updateState}
                  providerData={authData}
                  courseId={route?.params?.course_id}
                  navigation={navigation}
                  uploading={uploading}
                />
              )}
              {selectedTab === 'freePDF' && freePDFForm()}
              {selectedTab === 'paidPDF' && paidPDFForm()}
            </>
          }
        />
      </View>
    </View>
  );

  function vedioUploadProgress() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: Sizes.fixPadding,
        }}>
        <Progress.Bar progress={uploadProgress} width={SCREEN_WIDTH * 0.9} />
      </View>
    );
  }

  function scheduleClassNavigator() {
    return (
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Text style={[Fonts.black16RobotoMedium, { marginBottom: 10 }]}>
          Schedule Live Class
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingVertical: 5,
          }}>
          <LinearGradient
            colors={
              selectedTab == 'demoClass'
                ? [Colors.primaryDark, Colors.primaryLight]
                : [Colors.grayLight, Colors.white]
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            locations={[0.7, 1]}
            style={[styles.button]}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                padding: SCREEN_WIDTH * 0.03,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => handleTabPress('demoClass')}>
              <Text
                style={[
                  selectedTab == 'demoClass'
                    ? Fonts.white16RobotoMedium
                    : Fonts.gray16RobotoMedium,
                  { textAlign: 'center' },
                ]}>
                Demo{'\n'}Class
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={
              selectedTab == 'liveClass'
                ? [Colors.primaryDark, Colors.primaryLight]
                : [Colors.grayLight, Colors.white]
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            locations={[0.7, 1]}
            style={[styles.button]}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                padding: SCREEN_WIDTH * 0.03,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => handleTabPress('liveClass')}>
              <Text
                style={[
                  selectedTab == 'liveClass'
                    ? Fonts.white16RobotoMedium
                    : Fonts.gray16RobotoMedium,
                  { textAlign: 'center' },
                ]}>
                Live{'\n'}Class
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }

  function pdfNavigator() {
    return (
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Text style={[Fonts.black16RobotoMedium, { marginBottom: 10 }]}>PDF</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingVertical: 5,
          }}>
          <LinearGradient
            colors={
              selectedTab == 'freePDF'
                ? [Colors.primaryDark, Colors.primaryLight]
                : [Colors.grayLight, Colors.white]
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            locations={[0.7, 1]}
            style={[styles.button]}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                padding: SCREEN_WIDTH * 0.03,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => handleTabPress('freePDF')}>
              <Text
                style={[
                  selectedTab == 'freePDF'
                    ? Fonts.white16RobotoMedium
                    : Fonts.gray16RobotoMedium,
                  { textAlign: 'center' },
                ]}>
                Free{'\n'}PDF
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={
              selectedTab == 'paidPDF'
                ? [Colors.primaryDark, Colors.primaryLight]
                : [Colors.grayLight, Colors.white]
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            locations={[0.7, 1]}
            style={[styles.button]}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                padding: SCREEN_WIDTH * 0.03,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => handleTabPress('paidPDF')}>
              <Text
                style={[
                  selectedTab == 'paidPDF'
                    ? Fonts.white16RobotoMedium
                    : Fonts.gray16RobotoMedium,
                  { textAlign: 'center' },
                ]}>
                Paid{'\n'}PDF
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }

  function freePDFForm() {
    const renderForm1 = () => {
      return (
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <View style={styles.formcontainer}>
            <Text style={[Fonts.black14InterMedium]}>Name of Topic</Text>
            <TextInput
              onChangeText={e => setFreePDFTitle(e)}
              value={freePDFTitle}
              style={styles.inputbox}
              placeholder="Enter here..."
              placeholderTextColor={Colors.gray}
            />
            <Text style={[Fonts.black14InterMedium, { marginBottom: 10 }]}>
              Attachment (PDF file)
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40%',
                  borderRadius: 20,
                  height: SCREEN_WIDTH * 0.3,
                  elevation: 2,
                  marginBottom: 10,
                }}
                onPress={() => selectPDF('free')}>
                {freePDF == null ? (
                  <Ionicons name={'add'} size={40} color={Colors.gray2} />
                ) : (
                  <Text
                    style={{ ...Fonts.gray14RobotoMedium, textAlign: 'center' }}>
                    Change{'\n'}PDF
                  </Text>
                )}
              </TouchableOpacity>
              {freePDF && (
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40%',
                    borderRadius: 20,
                    height: SCREEN_WIDTH * 0.3,
                    padding: 10,
                    elevation: 2,
                    marginBottom: 10,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{ width: '70%', height: '70%' }}
                    source={require('../../assets/icon/pdfColor.png')}
                  />
                  <Text style={{ ...Fonts.gray12RobotoMedium }} numberOfLines={1}>
                    {freePDF.name}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      );
    };
    const submitButton = () => {
      return (
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            marginTop: 10,
            alignItems: 'center',
            width: SCREEN_WIDTH * 0.9,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primaryDark,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              height: SCREEN_WIDTH * 0.15,
              width: '100%',
              paddingHorizontal: 15,
            }}
            onPress={() => submitFreePDF()}>
            <Text style={Fonts.white16RobotoMedium}>Submit</Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <FlatList
        ListHeaderComponent={
          <>
            {renderForm1()}
            {submitButton()}
          </>
        }
      />
    );
  }

  function paidPDFForm() {
    const renderForm1 = () => {
      return (
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <View style={styles.formcontainer}>
            <Text style={[Fonts.black14InterMedium]}>Name of Topic</Text>
            <TextInput
              value={paidPDFTitle}
              onChangeText={e => setPaidPDFTitle(e)}
              style={styles.inputbox}
              placeholder="Enter here..."
              placeholderTextColor={Colors.gray}
            />
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text style={[Fonts.black14InterMedium, { width: '45%' }]}>
                {' '}
                Price of Course
              </Text>
              <View
                style={[
                  styles.inputbox3,
                  { width: '50%', justifyContent: 'flex-start' },
                ]}>
                <MaterialIcons name={'currency-rupee'} size={20} />
                <View
                  style={{
                    width: 1,
                    backgroundColor: Colors.gray3,
                    height: '50%',
                    marginHorizontal: 10,
                  }}></View>
                <TextInput
                  value={paidPDFAmount}
                  onChangeText={e => setPaidPDFAmount(e)}
                  placeholderTextColor={Colors.gray}
                  inputMode="numeric"
                  placeholder="Amount"
                  style={{ width: '60%', ...Fonts.black14RobotoRegular }}
                />
              </View>
            </View>
            <Text style={[Fonts.black14InterMedium, { marginBottom: 10 }]}>
              Attachment (PDF file)
            </Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40%',
                  borderRadius: 20,
                  height: SCREEN_WIDTH * 0.3,
                  elevation: 2,
                  marginBottom: 10,
                }}
                onPress={() => selectPDF('paid')}>
                {paidPDF == null ? (
                  <Ionicons name={'add'} size={40} color={Colors.gray2} />
                ) : (
                  <Text
                    style={{ ...Fonts.gray14RobotoMedium, textAlign: 'center' }}>
                    Change{'\n'}PDF
                  </Text>
                )}
              </TouchableOpacity>
              {paidPDF && (
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.white,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40%',
                    borderRadius: 20,
                    height: SCREEN_WIDTH * 0.3,
                    padding: 10,
                    elevation: 2,
                    marginBottom: 10,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{ width: '70%', height: '70%' }}
                    source={require('../../assets/icon/pdfColor.png')}
                  />
                  <Text style={{ ...Fonts.gray12RobotoMedium }} numberOfLines={1}>
                    {paidPDF.name}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      );
    };
    const submitButton = () => {
      return (
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            marginTop: 10,
            alignItems: 'center',
            width: SCREEN_WIDTH * 0.9,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primaryDark,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              height: SCREEN_WIDTH * 0.15,
              width: '100%',
              paddingHorizontal: 15,
            }}
            onPress={() => submitPaidPDF()}>
            <Text style={Fonts.white16RobotoMedium}>Submit</Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <FlatList
        ListHeaderComponent={
          <>
            {renderForm1()}
            {submitButton()}
          </>
        }
      />
    );
  }
};

const mapStateToProps = state => ({
  authData: state.authProvider.authData,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(AddCourseDetails);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: SCREEN_WIDTH * 0.05,
    marginTop: 10,
  },
  button: {
    borderRadius: 20,
    borderRadius: SCREEN_WIDTH * 0.04,
    elevation: 3,
    width: '48%',
    height: SCREEN_WIDTH * 0.25,
  },
  formcontainer: {
    backgroundColor: Colors.whiteDark,
    width: '100%',
    paddingHorizontal: 15,
    elevation: 5,
    paddingVertical: 15,
    borderRadius: 10,
  },
  inputbox: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    elevation: 5,
    height: SCREEN_WIDTH * 0.14,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
    ...Fonts.black14RobotoRegular
  },
  inputbox2: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    elevation: 5,
    height: SCREEN_WIDTH * 0.14,
    width: SCREEN_WIDTH * 0.85,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  inputbox3: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    elevation: 5,
    height: SCREEN_WIDTH * 0.14,
    width: '45%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  inputboxmultiline: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    elevation: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});
