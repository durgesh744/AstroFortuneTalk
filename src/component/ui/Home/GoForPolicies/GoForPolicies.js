import { Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../../../assets/style';
import { View } from 'react-native';

const { width, height } = Dimensions.get('screen');

const GoForPolicies = ({ navigation }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('privacy')}
            style={{
                padding: 18,
                borderBottomWidth: 0.8,
                borderColor: Colors.blackLight + '60',
            }}>
            <View
                style={{
                    backgroundColor: Colors.primaryDark,
                    height: height * 0.1,
                    borderRadius: 15,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: width * 0.9,
                        alignContent: 'center',
                        padding: 15,
                    }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Image
                            source={require('../../../../assets/icon/danger.png')}
                            resizeMode="contain"
                            style={{
                                width: 26,
                                height: 26,
                                borderRadius: 25,
                                alignSelf: 'center',
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text
                            style={{
                                fontFamily: 'Roboto-Medium',
                                color: Colors.white,
                                fontSize: 16,
                            }}>
                            Important Policies
                        </Text>
                        <Text
                            style={{
                                fontFamily: 'Roboto-Medium',
                                color: Colors.white,
                                fontSize: 16,
                            }}>
                            (Please Read all the Policies )
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Image source={require('../../../../assets/icon/BottomArrow.png')} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default GoForPolicies