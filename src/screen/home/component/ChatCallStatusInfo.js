import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomSwitch from "../../../component/common/CustomSwitch";
import { Colors, Fonts, Sizes } from "../../../assets/style";

const ChatCallStatusInfo = () => {
    const [chatStatus, setChatStatus] = useState(false)
    const [callStatus, setCallStatus] = useState(false)

    const change_chat_status = () => {
        setChatStatus(!chatStatus)
    }

    const change_call_status = () => {
        setCallStatus(!callStatus)
    }

    return (
        <View style={{
            backgroundColor: Colors.white,
            marginTop: 2,
            paddingTop: 10
        }}>
            <View
                style={{
                    marginHorizontal: Sizes.fixPadding * 1.5,
                    marginBottom: Sizes.fixPadding * 1.5,
                    backgroundColor: Colors.grayLight,
                    borderRadius: Sizes.fixPadding,
                    shadowColor: Colors.blackLight,
                    elevation: 5,
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
                            Price
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
                    <CustomSwitch active={chatStatus} change_status={change_chat_status} />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => showChatDate()}
                        style={{ flex: 0.5, alignItems: 'flex-end' }}>
                        <Text
                            style={{ ...Fonts.black12RobotoRegular, color: Colors.blackLight }}>
                            30/min
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
                    <CustomSwitch active={callStatus} change_status={change_call_status} />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => showCallDate()}
                        style={{ flex: 0.5, alignItems: 'flex-end' }}>
                        <Text
                            style={{ ...Fonts.black12RobotoRegular, color: Colors.blackLight }}>
                            30/min
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ChatCallStatusInfo