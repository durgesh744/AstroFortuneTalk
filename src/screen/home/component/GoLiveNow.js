import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Sizes, Fonts } from '../../../assets/style';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GoLiveNow = () => {
    const go_live_now = () => {

    }
    return (
        <View
            style={{
                backgroundColor: Colors.white,
                marginTop: 2,
                paddingTop: 10,
                paddingBottom: 15
            }}>
            <TouchableOpacity
                onPress={go_live_now}
                style={{
                    marginHorizontal: Sizes.fixPadding,
                    borderRadius: Sizes.fixPadding,

                }}>
                <LinearGradient
                    colors={[
                        'rgba(255,255,255,0)',
                        Colors.primaryLight,
                        Colors.primaryDark,
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    locations={[0, 0.7, 1]}
                    style={[
                        styles.row,
                        {
                            paddingHorizontal: Sizes.fixPadding,
                            borderRadius: Sizes.fixPadding,
                            paddingVertical: Sizes.fixPadding - 3,
                        },
                    ]}>
                    <Image
                        source={require('../../../assets/images/live_icon.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <Text
                        style={{
                            ...Fonts.primaryDark18RobotoMedium,
                            marginLeft: Sizes.fixPadding,
                        }}>
                        Go Live Now!!
                    </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <AntDesign name="right" color={Colors.white} size={24} />
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

export default GoLiveNow

const styles = StyleSheet.create({
    row: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
});