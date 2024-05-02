import Stars from 'react-native-stars';
import { Image, StyleSheet, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors, Sizes, Fonts } from '../../../assets/style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SendView = () => {
    const submit_rating = () => {

    }
    return (
        <View
            style={{
                paddingTop: Sizes.fixPadding * 2.8,
                paddingHorizontal: Sizes.fixPadding * 2,
                backgroundColor: Colors.white,
            }}>
            <View
                style={{
                    backgroundColor: Colors.gray4,
                    borderRadius: 45,
                    elevation: 8,
                    shadowColor: Colors.blackLight,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: Sizes.fixPadding * 2.0,
                    left: 20,
                    width: '90%',
                }}>
                <Text
                    style={{
                        ...Fonts.black16RobotoMedium,
                        fontWeight: '400',
                        marginBottom: '3%',
                        fontSize: 17,
                    }}>
                    Feedback
                </Text>
                <View style={{ marginBottom: '5%' }}>
                    <Stars
                        disabled={false}
                        default={3}
                        count={5}
                        half={true}
                        starSize={200}
                        update={val => updateState({ rating: val })}
                        fullStar={
                            <MaterialIcons
                                size={30}
                                name={'star-rate'}
                                style={[styles.myStarStyle]}
                                color={Colors.rating_clr}
                            />
                        }
                        emptyStar={
                            <MaterialIcons
                                size={30}
                                name={'star-rate'}
                                color={Colors.gray3}
                                style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                            />
                        }
                        halfStar={
                            <Icon
                                size={30}
                                name={'star-half'}
                                color={Colors.rating_clr}
                            />
                        }
                    />
                </View>
                <Text
                    style={{
                        ...Fonts.gray12RobotoMedium,
                        fontWeight: '600',
                        textAlign: 'center',
                        marginBottom: '10%',
                        fontSize: 13,
                    }}>
                    Please share your honest feedback to help us improve
                </Text>
            </View>

            <View >
                <TextInput
                    placeholder="Type here..."
                    placeholderTextColor={Colors.gray3}
                    multiline
                    onChangeText={text => updateState({ comments: text })}
                    style={styles.txtInput}
                >
                    {/* {comments} */}
                    Your are Added Your comments here
                </TextInput>
            </View>
            <LinearGradient
                colors={[Colors.primaryLight, Colors.primaryDark]}
                style={{
                    borderRadius: 1000,
                    height: 60,
                    width: 60,
                    top: -60,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <TouchableOpacity activeOpacity={0.8} onPress={submit_rating}>
                    <Image
                        source={require('../../../assets/images/send.png')}
                        style={{ width: 40, height: 40 }}
                    />
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

export default SendView

const styles = StyleSheet.create({
    myStarStyle: {
        color: Colors.rating_clr,
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: Colors.gray3,
    },
    txtInput: {
        padding: 10,
        backgroundColor: Colors.white,
        top: -30,
        borderRadius: 20,
        borderColor: Colors.black,
        elevation: 10,
        shadowColor: Colors.black,
        height: 160,
        ...Fonts.black14RobotoRegular,
        textAlignVertical: 'top'
    },
});