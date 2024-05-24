import { useState } from "react";
import { Text, View } from "react-native";
import { Colors, Sizes } from "../../../../assets/style";
import { SCREEN_WIDTH } from "../../../../config/Screen";
import LinearGradient from 'react-native-linear-gradient';
import CustomSwitch from '../../../common/CustomSwitch';

const Offer = () => {
    const [free , setFree] = useState(true)
    return (
        <View
            style={{
                padding: 10,
                backgroundColor: Colors.white,
                marginTop: 2,
            }}>
            <Text
                style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 16,
                    color: Colors.black,
                }}>
                Marketing offers
            </Text>

            <LinearGradient
                colors={["#F9F1FF", "#fff"]}
                style={{
                    padding: 15,
                    backgroundColor: Colors.primaryLight,
                    borderRadius: 20,
                    marginVertical: Sizes.fixPadding,
                    elevation: 3,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Roboto-Medium',
                        fontSize: 14,
                        color: Colors.primaryLight,
                    }}>
                    M0@0-Free Users
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: SCREEN_WIDTH * 0.7 }}>
                        <Text
                            style={{
                                fontFamily: 'Roboto-Medium',
                                fontSize: 12,
                                color: Colors.grayA,
                            }}>
                            User gets first session free.Asrtrologer is Also not paid
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Roboto-Medium',
                                fontSize: 12,
                                color: Colors.grayA,
                            }}>
                            Indian user with high spending capacity spends 5x more than
                            other indian users.
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Roboto-Medium',
                                fontSize: 12,
                                color: Colors.grayA,
                            }}>
                            Astrologers get opportunity to serve them better & convert to
                            paid
                        </Text>
                    </View>
                    <CustomSwitch active={free} />
                </View>
            </LinearGradient>
        </View>
    );
}

export default Offer