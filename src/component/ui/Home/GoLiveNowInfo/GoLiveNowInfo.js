import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Sizes, Fonts } from '../../../../assets/style';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GoLiveNowInfo = () => {
    const go_live_now = () => {

    }
    return (
        <TouchableOpacity
            onPress={go_live_now}
            style={{
                backgroundColor: Colors.white,
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
    );
}

export default GoLiveNowInfo

const styles = StyleSheet.create({
    row: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
});