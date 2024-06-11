import React from 'react'
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { navigate } from '../../utils/navigationServices';
import { Colors, Fonts, Sizes } from '../../assets/style';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Screen';
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native'

const HistoryInfo = ({ CallHistoryData, get_kundli_details, viewChatActive }) => {
    const renderItem = ({ item }) => (
        <View
            style={{
                marginHorizontal: 15,
                marginBottom: 10,
                paddingTop: Sizes.fixPadding * 1.5
            }}>
            <View
                style={{
                    borderRadius: 20,
                    flex: 0,
                    backgroundColor: Colors.dullWhite,
                    padding: 15,
                    elevation: 5,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingRight: 15,
                        width: SCREEN_WIDTH * 0.9,
                    }}>
                    <View>
                        <Text
                            style={{
                                fontWeight: '400',
                                ...Fonts.black16RobotoMedium,
                            }}>
                            New ({item?.country}) {item?.moa == '1' && <Text style={{ color: Colors.primaryLight }}>MO@0</Text>}
                        </Text>
                        <Text
                            style={{
                                fontWeight: '400',
                                ...Fonts.black16RobotoMedium,
                            }}>
                            Order id: {item.order_id}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons
                            name="copy-outline"
                            size={26}
                            color={Colors.Dark_grayish_red}
                            style={{ marginHorizontal: 15 }}
                        />
                        <TouchableOpacity
                            onPress={() => get_kundli_details(item?.customer_id)}
                            style={{
                                borderRadius: 30,
                                backgroundColor: Colors.gray_light,
                                paddingHorizontal: Sizes.fixPadding * 1.5,
                                paddingVertical: 3,
                            }}>
                            <Text style={{ ...Fonts.white14RobotoMedium }}>Open Kundli</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        justifyContent: 'space-between',
                    }}>
                    <View>
                        <Text style={{ ...Fonts.gray14RobotoMedium }}>
                            Name-{item?.username}
                        </Text>
                        <Text style={{ ...Fonts.gray14RobotoMedium }}>
                            Gender-{item.gender}
                        </Text>
                        <Text style={{ ...Fonts.gray14RobotoMedium }}>
                            Birth Date-{item.date_of_birth}
                        </Text>
                        <Text style={{ ...Fonts.gray14RobotoMedium }}>
                            Birth Time-{item.time_of_birth}
                        </Text>
                        <Text style={{ ...Fonts.gray14RobotoMedium }}>
                            Birth Place-{item.place_of_birth}
                        </Text>
                        <Text style={{ ...Fonts.gray14RobotoMedium }}>
                            Current Address-{item.current_address}
                        </Text>
                        <Text style={{ ...Fonts.gray14RobotoMedium }}>
                            Problem Area-{item.problem}
                        </Text>
                        <Text
                            style={{
                                ...Fonts.gray14RobotoMedium,
                                marginTop: 20,
                                color: Colors.gray3,
                            }}>
                            Order Time-
                            {moment(item.created_datetime).format('DD MMM YYYY, hh:mm A')}
                        </Text>
                        <Text style={{ ...Fonts.gray14RobotoMedium }}>
                            Duration - {item.duration}
                        </Text>
                        <Text style={{ ...Fonts.gray14RobotoMedium }}>
                            Rate - {item.rate}
                            {'/min'}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    ...Fonts.black14InterMedium,
                                }}>
                                Status -
                            </Text>
                            <Text
                                style={{
                                    ...Fonts.gray14RobotoMedium,
                                    color: Colors.green,
                                }}>
                                {' '}
                                Completed
                            </Text>
                        </View>
                    </View>
                    <View>
                        <ImageBackground
                            source={require('../../assets/images/back.png')}
                            resizeMode="contain"
                            style={{
                                width: SCREEN_WIDTH * 0.3,
                                height: 70,
                                justifyContent: 'center',
                                alignItems: 'center',
                                right: -20,
                                position: 'absolute',
                                alignSelf: 'flex-start',
                                top: -15,
                            }}>
                            <Text
                                style={{
                                    ...Fonts.white14RobotoMedium,
                                    textAlign: 'center',
                                    bottom: 6,
                                    fontWeight: '700',
                                }}>
                                {' '}
                                Rs.{parseFloat(item.deductAmt).toFixed(2)}
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SCREEN_HEIGHT * 0.03,
                        justifyContent: 'space-between',
                    }}>

                    {viewChatActive &&
                        <Text
                            onPress={() =>
                                navigate('Remedy', {
                                    customer_id: item?.user_id,
                                    screen_type: 'not_during_chat'
                                })
                            }
                            style={{ ...Fonts.primaryLight14RobotoMedium, textDecorationLine: 'underline' }}>
                            View Chat
                        </Text>
                    }
                    <Text
                        onPress={() =>
                            navigate('Remedy', {
                                customer_id: item?.user_id,
                                screen_type: 'not_during_chat'
                            })
                        }
                        style={{ ...Fonts.primaryLight14RobotoMedium, textDecorationLine: 'underline' }}>
                        Suggest Remedy
                    </Text>
                    <Text style={{ ...Fonts.primaryLight14RobotoMedium, textDecorationLine: 'underline' }}>Refund Amount</Text>
                </View>
            </View>
        </View>
    );
    return (
        <View>
            <FlatList
                data={CallHistoryData}
                renderItem={renderItem}
                contentContainerStyle={{ paddingVertical: 15 }}
            />
        </View>
    );
}


export default HistoryInfo
