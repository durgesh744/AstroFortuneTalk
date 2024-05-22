import { Dimensions, Text, View } from "react-native";
import { Colors, Sizes } from "../../../../assets/style";
import { Switch } from 'react-native-switch';

const { width, height } = Dimensions.get('screen');

const Offer = () => {
    return (
        <View style={{ padding: 10 }}>
            <Text
                style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 16,
                    color: Colors.black,
                }}>
                Marketing offers
            </Text>

            <View
                style={{
                    padding: 15,
                    backgroundColor: '#FEFDFF',
                    borderRadius: 20,
                    marginVertical: Sizes.fixPadding,
                }}>
                <Text
                    style={{
                        fontFamily: 'Roboto-Medium',
                        fontSize: 14,
                        color: Colors.primaryLight,
                    }}>
                    M0@0-Free Users
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: width * 0.7 }}>
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
                    <View>
                        <Switch
                            renderActiveText={false}
                            renderInActiveText={false}
                            circleBorderWidth={4}
                            circleSize={20}
                            circleBorderActiveColor={Colors.primaryLight}
                            backgroundActive={Colors.primaryLight}
                            backgroundInactive={Colors.white}
                            circleBorderInactiveColor={Colors.grayLight}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Offer