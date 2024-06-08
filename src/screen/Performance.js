import {
    Text,
    FlatList,
    View,
    TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors, Fonts, Sizes } from '../assets/style';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MyStatusBar from '../component/MyStatusBar';
import Loader from '../component/Loader';
import MyHeader from '../component/MyHeader';
import Doublecont from '../component/ui/Performance/Doublecont';
import Singlecont from '../component/ui/Performance/Singlecont';
import Performancecont from '../component/ui/Performance/Performancecont';

const Performance = ({ navigation, providerData }) => {
    const [performanceData, setPerformanceData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        get_performance();
    }, []);

    const get_performance = async () => {

    };

    return (
        <View style={{ flex: 1, backgroundColor:Colors.white}}>
            <MyStatusBar
                backgroundColor={Colors.primaryLight}
                barStyle={'light-content'}
            />
            <Loader visible={isLoading} />
            <MyHeader title="Performance" navigation={navigation} />
            <View style={{ flex: 1, marginTop: Sizes.fixPadding * 1.5 }}>
                <FlatList
                    ListHeaderComponent={
                        <>
                            {impactscore()}
                            <Doublecont
                                title="Chat"
                                value1={225.17}
                                value2={225.17}
                            />
                            <Doublecont
                                title="Call"
                                value1={performanceData && performanceData.call_busy_duration}
                                value2={performanceData && performanceData.call_earn_amount}
                            />
                            <Doublecont
                                title="Live Event Call"
                                value1={performanceData && performanceData.chat_busy_duration}
                                value2={performanceData && performanceData.chat_earn_amount}
                            />
                            <Doublecont
                                title="Video Call"
                                value1={performanceData && performanceData.chat_busy_duration}
                                value2={performanceData && performanceData.chat_earn_amount}
                            />
                            {headerborder()}
                            <Singlecont
                                title="This Month Earning"
                                value1={performanceData && performanceData.chat_busy_duration}
                            />
                            <Singlecont
                                title="Live Events"
                                value1={performanceData && performanceData.chat_busy_duration}
                            />
                            <Singlecont
                                title="Followers"
                                value1={performanceData && performanceData.query_fol_count}
                            />
                            {border1()}
                            <Doublecont
                                title="Chat"
                                value1={performanceData && performanceData.chat_busy_duration}
                                value2={performanceData && performanceData.chat_earn_amount}
                            />
                            <Doublecont
                                title="Call"
                                value1={performanceData && performanceData.chat_busy_duration}
                                value2={performanceData && performanceData.chat_earn_amount}
                            />
                            <Doublecont
                                title="Live Event Call"
                                value1={performanceData && performanceData.chat_busy_duration}
                                value2={performanceData && performanceData.chat_earn_amount}
                            />
                            <Doublecont
                                title="Video Call"
                                value1={performanceData && performanceData.chat_busy_duration}
                                value2={performanceData && performanceData.chat_earn_amount}
                            />
                            {border2()}
                            <Performancecont
                                title="PO retention %"
                                performanceData={performanceData}
                            />
                            <Performancecont
                                title="PO Served Properly Percentage"
                                performanceData={performanceData}
                            />
                            <Performancecont
                                title="Average Availability for Chat (hours)"
                                performanceData={performanceData}
                            />
                            <Performancecont
                                title="Average Availability for Call (hours)"
                                performanceData={performanceData}
                            />
                            <Performancecont
                                title="Average rating call"
                                performanceData={performanceData}
                            />
                            <Performancecont
                                title="Customer satisfaction"
                                performanceData={performanceData}
                            />
                            {performancedashboard()}
                            <Performancecont
                                title="Average rating chat"
                                performanceData={performanceData}
                            />
                        </>
                    }
                />
            </View>
        </View>
    );

    function impactscore() {
        return (
            <View
                style={{
                    marginHorizontal: 15,
                    marginBottom: 10,
                    marginTop: 10,
                }}>
                <LinearGradient
                    colors={[Colors.primaryLight, Colors.primaryDark]}
                    style={{
                        borderRadius: 20,
                        flex: 0,
                        backgroundColor: Colors.dullWhite,
                        borderRadius: 10,
                        padding: 15,
                        elevation: 5,
                        width: '100%',
                        height: 140,
                    }}>
                    <Text
                        style={{
                            ...Fonts.primaryLight15RobotoMedium,
                            fontSize: 20,
                            color: Colors.white,
                        }}>
                        Impact of Score
                    </Text>
                    <Text
                        style={{
                            ...Fonts.primaryLight15RobotoMedium,
                            fontSize: 16,
                            color: Colors.white,
                        }}>
                        We provide maximum opportunities to astrologers who are scoring
                        excellent in every Field
                    </Text>
                    <TouchableOpacity
                        style={{
                            height: 25,
                            padding: 1,
                            width: 100,
                            marginTop: -10,
                            borderRadius: 20,
                            backgroundColor: Colors.white,
                            marginLeft: 200,
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                ...Fonts.primaryLight15RobotoMedium,
                                fontSize: 15,
                                color: Colors.primaryDark,
                            }}>
                            Know more
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }

    function headerborder() {
        return (
            <View
                style={{
                    borderTopWidth: 2,
                    borderColor: Colors.gray_back,
                    width: 330,
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    marginTop: 10,
                }}>
                <Text
                    style={{
                        marginTop: 10,
                        ...Fonts.primaryLight15RobotoMedium,
                        fontSize: 17.5,
                        color: Colors.primaryDark,
                    }}>
                    Other Performance
                </Text>
                <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 65 }}>
                    <Text
                        style={{
                            ...Fonts.primaryLight15RobotoMedium,
                            fontSize: 17.5,
                            color: Colors.primaryDark,
                        }}>
                        Rank
                    </Text>
                    <Text
                        style={{
                            marginLeft: 25,
                            ...Fonts.primaryLight15RobotoMedium,
                            fontSize: 17.5,
                            color: Colors.primaryDark,
                        }}>
                        Score
                    </Text>
                </View>
            </View>
        );
    }

    function border1() {
        return (
            <View
                style={{
                    borderTopWidth: 2,
                    borderColor: Colors.gray_back,
                    width: 330,
                    marginHorizontal: 15,
                    marginVertical: 10,
                    flexDirection: 'row',
                }}></View>
        );
    }

    function border2() {
        return (
            <View
                style={{
                    borderTopWidth: 2,
                    borderColor: Colors.gray_back,
                    width: 360,
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10,
                }}></View>
        );
    }

    function performancedashboard() {
        return (
            <View
                style={{
                    marginHorizontal: 15,
                    marginVertical: 15,
                }}>
                <View
                    style={{
                        borderStyle: 'dashed',
                        borderWidth: 1.5,
                        borderColor: Colors.primarymidLight,
                        borderRadius: 20,
                        flex: 0,
                        borderRadius: 10,
                        height: 180,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 15,
                            marginVertical: 20,
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                marginLeft: 50,
                                fontWeight: 'bold',
                                fontSize: 20,
                                color: Colors.black,
                            }}>
                            Performance Dashboard
                        </Text>
                        <Feather name="info" color={Colors.gray} size={20} />
                    </View>
                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <LinearGradient
                            colors={[Colors.primaryLight, Colors.primaryDark]}
                            style={{
                                borderRadius: 25,
                                height: 40,
                                width: 250,
                                marginBottom: 20,
                            }}>
                            <Text
                                style={{
                                    ...Fonts.white14RobotoMedium,
                                    textAlign: 'center',
                                    fontSize: 17.5,
                                    paddingVertical: 6.5,
                                }}>
                                Last 30 days availability
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 15,
                        }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    height: 25,
                                    width: 25,
                                    backgroundColor: Colors.red,
                                    borderRadius: 5,
                                }}
                            />
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: Colors.black,
                                    fontSize: 15,
                                    marginLeft: 5,
                                }}>
                                Poor
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    height: 25,
                                    width: 25,
                                    backgroundColor: Colors.yellow,
                                    borderRadius: 5,
                                }}
                            />
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: Colors.black,
                                    fontSize: 15,
                                    marginLeft: 5,
                                }}>
                                Average
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    height: 25,
                                    width: 25,
                                    backgroundColor: Colors.greenDark,
                                    borderRadius: 5,
                                }}
                            />
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: Colors.black,
                                    fontSize: 15,
                                    marginLeft: 5,
                                }}>
                                Excellent
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
};

const mapStateToProps = state => ({
    authData: state.authProvider.authData,
});

export default connect(mapStateToProps)(Performance);
