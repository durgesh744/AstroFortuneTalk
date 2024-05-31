import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Alert,
    ScrollView,
} from 'react-native';
import React, { createRef, useState, useEffect } from 'react';
import { Colors, Fonts, Sizes } from '../../assets/style';
import LinearGradient from 'react-native-linear-gradient';
import { Divider, Input } from '@rneui/themed';
import {
    api_base_url,
    astrologer_login,
} from '../../config/Constants';
import axios from 'axios';
import Loader from '../../component/common/Loader';
import MyStatusBar from '../../component/common/MyStatusBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Screen';
import messaging from '@react-native-firebase/messaging';

const Login = ({ navigation, dispatch }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [fcmToken, setFcmToken] = useState('testok');

    useEffect(() => {
        get_token();
    }, []);

    const get_token = async () => {
        let fcm_token = await messaging().getToken();
        console.log(fcm_token)
        setFcmToken(fcm_token);
    };

    const email_validation = e => {
        let email = e;
        let filter =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(email.value)) {
            // Yay! valid
            return true;
        } else {
            return false;
        }
    };

    const validation = () => {
        if (email.length == 0) {
            Alert.alert('Please enter your email');
            return false;
        } else if (email_validation(email)) {
            Alert.alert('Please enter correct email address.');
            return false;
        } else if (password.length == 0) {
            Alert.alert('Please enter your password.');
        } else {
            return true;
        }
    };

    const login = async () => {
        setIsLoading(true);
        await axios({
            method: 'post',
            url: api_base_url + astrologer_login,
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                email: email,
                password: password,
                fcmToken: fcmToken
            },
        })
            .then(async res => {
                if (res.data.success) {
                    await AsyncStorage.setItem('userData', JSON.stringify(res.data.data));
                    setIsLoading(false);
                    navigation.navigate("Home");
                } else {
                    setIsLoading(false);
                    Alert.alert('Plese check your email and password.');
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
            <Loader visible={isLoading} />
            <LinearGradient
                colors={[Colors.primaryLight, Colors.primaryDark]}
                style={{ flex: 1 }}>
                {imageInfo()}
                <ScrollView style={styles.bottomContainer}>
                    <View style={{ flex: 1, marginTop: SCREEN_HEIGHT * 0.04 }}>
                        {topTitleInfo()}
                        {emailInput()}
                        {passwordInput()}
                        {termsPrivacyInfo()}
                        {submiteButtonInfo()}
                        {bottomViewInfo()}
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    );

    function bottomViewInfo() {
        return (
            <View
                style={{
                    flex: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginBottom: Sizes.fixPadding,
                }}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/icon/Pure.png')}
                        style={{ width: 25, height: 25 }}
                    />
                    <Text style={{ ...Fonts.grayLightRobotoRegular, textAlign: 'center' }}>
                        100%{'\n'}Safety Surety
                    </Text>
                </View>
                <Divider orientation="vertical" />
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/icon/private.png')}
                        style={{ width: 25, height: 25 }}
                    />
                    <Text style={{ ...Fonts.grayLightRobotoRegular, textAlign: 'center' }}>
                        100%{'\n'}Private
                    </Text>
                </View>
            </View>
        );
    }

    function submiteButtonInfo() {
        return (
            <TouchableOpacity
                onPress={() => (validation() ? login() : null)}
                style={{
                    width: '70%',
                    marginVertical: Sizes.fixPadding * 2,
                    alignSelf: 'center',
                    marginBottom: Sizes.fixPadding * 7.0,
                }}>
                <LinearGradient
                    colors={[Colors.primaryLight, Colors.primaryDark]}
                    style={{
                        width: '100%',
                        paddingVertical: Sizes.fixPadding,
                        borderRadius: Sizes.fixPadding * 1.5,
                    }}>
                    <Text style={{ ...Fonts.white18RobotBold, textAlign: 'center' }}>
                        Sign in
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    function termsPrivacyInfo() {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                <Text
                    style={{
                        ...Fonts.gray14RobotoMedium,
                        textAlign: 'right',
                        right: SCREEN_WIDTH * 0.1,
                        marginVertical: Sizes.fixPadding,
                    }}>
                    Forgot password
                </Text>
            </TouchableOpacity>
        );
    }

    function emailInput() {
        const emailinputRef = createRef();
        return (
            <Input
                ref={emailinputRef}
                placeholder="Email ID"
                value={email}
                keyboardType="email-address"
                onChangeText={setEmail}
                inputContainerStyle={[
                    styles.inputContainer,
                    { marginTop: Sizes.fixPadding * 2 },
                ]}
                inputStyle={{ ...Fonts.black16RobotoRegular }}
            />
        );
    }

    function passwordInput() {
        const passinputRef = createRef();
        return (
            <Input
                secureTextEntry={true}
                ref={passinputRef}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                inputContainerStyle={styles.inputContainer}
                inputStyle={{ ...Fonts.black16RobotoRegular }}
            />
        );
    }

    function topTitleInfo() {
        return (
            <Text
                style={{
                    ...Fonts.primaryDark16RobotoMedium,
                    fontSize: 20,
                    textAlign: 'center',
                    marginBottom: 10,
                }}>
                Get Started With Fortune Talk!
            </Text>
        );
    }

    function imageInfo() {
        return (
            <View style={{ flex: 0.3, justifyContent: 'center' }}>
                <Image
                    source={require('../../assets/images/user.png')}
                    style={{
                        width: '40%',
                        height: '100%',
                        resizeMode: 'contain',
                        alignSelf: 'center',
                        marginTop: SCREEN_HEIGHT * 0.1,
                    }}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    bottomContainer: {
        flex: 0.8,
        backgroundColor: Colors.white,
        borderTopLeftRadius: Sizes.fixPadding * 7,
        paddingTop: Sizes.fixPadding * 2,
        marginTop: SCREEN_HEIGHT * 0.09,
    },
    inputContainer: {
        marginHorizontal: Sizes.fixPadding * 3,
        borderWidth: 1,
        borderColor: Colors.grayLight,
        borderRadius: Sizes.fixPadding * 2,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: 0,
    },
    flagContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: Sizes.fixPadding * 0.8,
        borderRightWidth: 1,
        borderColor: Colors.grayLight,
    },
    socialButton: {
        flex: 0,
        width: '45%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding * 0.8,
        borderRadius: Sizes.fixPadding,
    },
});


export default Login