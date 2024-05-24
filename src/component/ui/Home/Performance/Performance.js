import { ImageBackground, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Sizes } from '../../../../assets/style';

const Performance = ({ navigation }) => {
    return (
        <View
            style={{
                paddingVertical: Sizes.fixPadding,
                width: '100%',
                height: 130,
                paddingHorizontal: Sizes.fixPadding,
                backgroundColor: Colors.white,
                marginTop: 10,
            }}>
            <View style={{ borderRadius: Sizes.fixPadding, overflow: 'hidden' }}>
                <ImageBackground
                    source={require('../../../../assets/images/performance.png')}
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                    resizeMode="cover">
                    <LinearGradient
                        colors={['rgba(255,255,255,0)', Colors.primaryDark]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0.8, 1]}
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            padding: Sizes.fixPadding,
                        }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('performance')}>
                            <AntDesign name="right" size={26} color={Colors.white} />
                        </TouchableOpacity>
                    </LinearGradient>
                </ImageBackground>
            </View>
        </View>
    );
}

export default Performance