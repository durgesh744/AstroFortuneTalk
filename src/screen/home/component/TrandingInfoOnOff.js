import { useState } from "react";
import { Text, View } from "react-native";
import { Switch } from 'react-native-switch';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts, Sizes } from "../../../assets/style";

const TrandingInfoOnOf = () => {
    const [chatTrendingStatus, setChatTrendingStatus] = useState()
    const [callTrendingStatus, setCallTrendingStatus] = useState()
    const treding_chat_status_change = () => {
        // if (chatTrendingStatus) {
        //     update_trending_status('1', '0');
        // } else {
        //     update_trending_status('1', '1');
        // }
    };

    const trending_call_status_change = () => {
        // if (callTrendingStatus) {
        //     update_trending_status('0', '0');
        // } else {
        //     update_trending_status('0', '1');
        // }
    };
    return (
        <View
            style={{
                borderBottomWidth: 0.9,
                borderColor: Colors.grayLight,
                backgroundColor: Colors.white,
                marginTop: 2,
                paddingVertical:10
            }}>
            <Text
                style={{
                    ...Fonts.black16RobotoRegular,
                    marginHorizontal: Sizes.fixPadding * 1.5,
                    marginBottom: Sizes.fixPadding,
                }}>
                Trending
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: Sizes.fixPadding * 1.5,
                    backgroundColor: Colors.white,
                    elevation: 5,
                    shadowColor: Colors.gray,
                    marginHorizontal: Sizes.fixPadding * 2.0,
                    borderRadius: Sizes.fixPadding,
                    marginBottom: Sizes.fixPadding * 1.5,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                    <Ionicons name="call" size={24} color={Colors.primaryLight} />
                    <Text
                        style={{
                            ...Fonts.primaryDark16RobotoMedium,
                            marginLeft: Sizes.fixPadding,
                        }}>
                        On Call
                    </Text>
                </View>

                <View
                >
                    <Switch
                        value={callTrendingStatus}
                        renderActiveText={false}
                        renderInActiveText={false}
                        circleBorderWidth={4}
                        circleSize={20}
                        onValueChange={() => trending_call_status_change()}
                        circleBorderActiveColor={Colors.primaryLight}
                        backgroundActive={Colors.primaryLight}
                        backgroundInactive={Colors.gray}
                        circleBorderInactiveColor={Colors.grayLight}
                    />
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: Sizes.fixPadding * 1.5,
                    backgroundColor: Colors.white,
                    elevation: 5,
                    shadowColor: Colors.blackLight,
                    marginHorizontal: Sizes.fixPadding * 2.0,
                    borderRadius: Sizes.fixPadding,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                    <Ionicons
                        name="chatbubble-ellipses-outline"
                        size={24}
                        color={Colors.primaryLight}
                    />
                    <Text
                        style={{
                            ...Fonts.primaryDark16RobotoMedium,
                            marginLeft: Sizes.fixPadding,
                        }}>
                        On Chat
                    </Text>
                </View>

                <View
                >
                    <Switch
                        value={chatTrendingStatus}
                        renderActiveText={false}
                        renderInActiveText={false}
                        circleBorderWidth={4}
                        circleSize={20}
                        onValueChange={() => treding_chat_status_change()}
                        circleBorderActiveColor={Colors.primaryLight}
                        backgroundActive={Colors.primaryLight}
                        backgroundInactive={Colors.gray}
                        circleBorderInactiveColor={Colors.grayLight}
                    />
                </View>
            </View>
        </View>
    );
}

export default TrandingInfoOnOf