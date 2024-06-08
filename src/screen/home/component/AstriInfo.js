import { connect } from 'react-redux';
import { Colors, Fonts } from '../../../assets/style';
import { navigate } from '../../../utils/navigationServices';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../config/Screen';

const AstriInfo = ({ authData }) => {
    return (
        <View
            style={{
                backgroundColor: Colors.white,
                borderBottomWidth: 0.8,
                borderColor: Colors.blackLight + '60',
                elevation:10,
            }}>
            <View style={{ flexDirection: 'row', backgroundColor: Colors }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigate('profile')}
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
                    {authData?.profileImage ? (
                        <Image
                            source={{ uri: authData.astrologer.profileImage }}
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
                            {authData.astrologer.displayName}
                        </Text>
                        <Text style={{ ...Fonts.grayA14RobotoMedium }}>
                            ID-{authData.astrologer.astroUniqueId}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = state => ({
    authData: state.authProvider.authData,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(AstriInfo);
