import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts } from '../../../../assets/style';

const { width, height } = Dimensions.get('window');

const AstriInfo = ({providerData}) => {
    return (
        <View
            style={{
                backgroundColor: Colors.white,
                borderBottomWidth: 1,
                borderBottomColor: Colors.grayLight,
            }}>
            <View style={{ flexDirection: 'row', backgroundColor: Colors }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('profile')}
                    style={{
                        width: width * 0.3,
                        justifyContent: 'center',
                        borderBottomRadius: 0.6,
                        alignItems: 'flex-end',
                        borderRadius: 100,
                        elevation: 10,

                        shadowColor: Colors.blackLight,
                        height: height * 0.08,
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
                                marginEnd: width * 0.07,
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
                                marginEnd: width * 0.07,
                            }}
                        />
                    )}
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: width * 0.8,
                        backgroundColor: Colors.white,
                        left: -40,
                        padding: 15,
                        height: height * 0.08,
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
                </View>
            </View>
        </View>
    );
}

export default AstriInfo