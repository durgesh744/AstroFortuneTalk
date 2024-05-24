import { Divider } from '@rneui/themed';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts, Sizes } from '../../../../assets/style';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../config/Screen';

const AstriInfo = ({ providerData }) => {
    return (
        <View
            style={{
                backgroundColor: Colors.white,
                borderBottomWidth: 0.8,
                borderColor: Colors.blackLight + '60',
            }}>
            <View style={{ flexDirection: 'row', backgroundColor: Colors }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('profile')}
                    style={{
                        width: SCREEN_WIDTH * 0.3,
                        justifyContent: 'center',
                        borderBottomRadius: 0.6,
                        alignItems: 'flex-end',
                        borderRadius: 100,
                        elevation: 10,

                        shadowColor: Colors.blackLight,
                        height: SCREEN_HEIGHT * 0.08,
                        backgroundColor: Colors.white,
                        left: -40,
                        bottom: 0,
                        alignSelf: 'center',
                    }}>
                    {providerData?.img_url ? (
                        <Image
                            source={{ uri: img_url_2 + providerData?.img_url }}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 25,
                                marginEnd: SCREEN_WIDTH * 0.07,
                            }}
                        />
                    ) : (
                        <Image
                            source={require('../../../../assets/images/person.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 25,
                                marginEnd: SCREEN_WIDTH * 0.07,
                            }}
                        />
                    )}
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: SCREEN_WIDTH * 0.8,
                        backgroundColor: Colors.white,
                        left: -40,
                        padding: 15,
                        height: SCREEN_HEIGHT * 0.08,
                        marginLeft: 10,
                    }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text
                            style={{
                                ...Fonts.grayA14RobotoMedium,
                            }}>
                            {/* {providerData?.owner_name} */}
                            Durgesh
                        </Text>
                        <Text style={{ ...Fonts.grayA14RobotoMedium }}>
                            ID-
                            {/* {providerData?.unique_id} */}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Divider
                            orientation="vertical"
                            style={{ marginHorizontal: Sizes.fixPadding }}
                            width={1}
                            color={Colors.grayLight}
                        />
                        <Image
                            source={require('../../../../assets/icon/search.png')}
                            style={{ alignSelf: 'center' }}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default AstriInfo