import { Text, TouchableOpacity, View } from "react-native";
import { Colors, Fonts, Sizes } from "../../../../assets/style";
import { Switch } from 'react-native-switch';
import { useState } from "react";

const ChatCallStatusInfo = () => {
    const [chatStatus, setChatStatus] = useState()
    const [callStatus, setCallStatus] = useState()
    const change_chat_status = () => {

    }

    const showChatDate = () => {

    }

    const change_call_status = () => {

    }

    const showCallDate = () => {

    }

    return (
        <View
            style={{
                marginHorizontal: Sizes.fixPadding * 1.5,
                marginBottom: Sizes.fixPadding * 1.5,
                backgroundColor: Colors.grayLight,
                borderRadius: Sizes.fixPadding,
            }}>
            <View
                style={{
                    flex: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: Sizes.fixPadding,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.blackLight + '50',
                }}>
                <View style={{ flex: 0.3 }}>
                    <Text style={{ ...Fonts.primaryLight14RobotoMedium }}>Type</Text>
                </View>
                <View
                    style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ ...Fonts.primaryLight14RobotoMedium }}>Status</Text>
                </View>
                <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                    <Text style={{ ...Fonts.primaryLight14RobotoMedium }}>
                        Next Online Time
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flex: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: Sizes.fixPadding * 0.5,
                    paddingHorizontal: Sizes.fixPadding,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.blackLight + '50',
                }}>
                <View style={{ flex: 0.3 }}>
                    <Text
                        style={{ ...Fonts.black12RobotoRegular, color: Colors.blackLight }}>
                        CHAT
                    </Text>
                    <Text
                        style={{ ...Fonts.gray11RobotoRegular, color: Colors.blackLight }}>
                        India:
                    </Text>
                </View>
                <View
                    style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <Switch
                        value={chatStatus}
                        renderActiveText={false}
                        renderInActiveText={false}
                        circleBorderWidth={4}
                        circleSize={20}
                        onValueChange={change_chat_status}
                        circleBorderActiveColor={Colors.primaryLight}
                        backgroundActive={Colors.primaryLight}
                        backgroundInactive={Colors.white}
                        circleBorderInactiveColor={Colors.grayLight}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => showChatDate()}
                    style={{ flex: 0.5, alignItems: 'flex-end' }}>
                    <Text
                        style={{ ...Fonts.black12RobotoRegular, color: Colors.blackLight }}>
                        chat
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flex: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: Sizes.fixPadding * 0.5,
                    paddingHorizontal: Sizes.fixPadding,
                }}>
                <View style={{ flex: 0.3 }}>
                    <Text
                        style={{ ...Fonts.black12RobotoRegular, color: Colors.blackLight }}>
                        CALL
                    </Text>
                    <Text
                        style={{ ...Fonts.gray11RobotoRegular, color: Colors.blackLight }}>
                        India
                    </Text>
                </View>
                <View
                    style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <Switch
                        value={callStatus}
                        renderActiveText={false}
                        renderInActiveText={false}
                        circleBorderWidth={4}
                        circleSize={20}
                        onValueChange={change_call_status}
                        circleBorderActiveColor={Colors.primaryLight}
                        backgroundActive={Colors.primaryLight}
                        backgroundInactive={Colors.white}
                        circleBorderInactiveColor={Colors.grayLight}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => showCallDate()}
                    style={{ flex: 0.5, alignItems: 'flex-end' }}>
                    <Text
                        style={{ ...Fonts.black12RobotoRegular, color: Colors.blackLight }}>
                         durgesh
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ChatCallStatusInfo