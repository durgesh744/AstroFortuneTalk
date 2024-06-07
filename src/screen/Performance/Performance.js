import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Sizes } from '../../assets/style'
import Loader from '../../component/common/Loader'
import MyStatusBar from '../../component/common/MyStatusBar'
import MyHeader from '../../component/common/MyHeader'
import { FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import TableComponent from './PerformaceTable'
import { Divider } from 'react-native-paper'
import PerformanceRate from './PerformanceRate'
import CustomButton from '../../component/common/CustomButton'

const Performance = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)

    const tableData = {
        rows: [
            ['Busy Time (in mins)', 256.17, 'N/A', "N/A"],
            ['Online Time (in mins)', 256.17, 'N/A', "N/A"],
        ],
    };

    const otherPerformanceData = {
        rows: [
            ['Total no of followers', 432, 'N/A', "N/A"],
        ],
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.white,
        }} >
            <MyStatusBar
                backgroundColor={Colors.primaryDark}
                barStyle={'light-content'}
            />
            <Loader visible={isLoading} />
            <MyHeader navigation={navigation} title={"Performance Dashboard"} />
            <FlatList
                scrollEnabled={true}
                ListHeaderComponent={
                    <>
                        {Score()}
                        <TableComponent tableData={tableData} heading={"Chat"} />
                        <TableComponent tableData={tableData} heading={"Call"} />
                        <TableComponent tableData={tableData} heading={"Live Events Call"} />
                        <TableComponent tableData={tableData} heading={"Video Call"} />
                        {otherPerformance()}
                        <TableComponent tableData={otherPerformanceData} heading={"This Month Earnings"} />
                        <TableComponent tableData={otherPerformanceData} heading={"Live Events"} />
                        <TableComponent tableData={otherPerformanceData} heading={"Followers"} />

                        <TableComponent tableData={tableData} heading={"Chat"} />
                        <TableComponent tableData={tableData} heading={"Call"} />
                        <TableComponent tableData={tableData} heading={"Live Events Call"} />
                        <TableComponent tableData={tableData} heading={"Video Call"} />

                        <PerformanceRate heading={"PO retention %"} />
                        <PerformanceRate heading={"PO retention %"} />
                        <PerformanceRate heading={"PO retention %"} />
                        <PerformanceRate heading={"PO retention %"} />
                        <PerformanceRate heading={"PO retention %"} />
                        {availability()}
                        <PerformanceRate heading={"PO retention %"} />
                    </>
                }
            />
        </View>
    )

    function availability() {
        return (
            <View
                style={{
                    marginHorizontal: Sizes.fixPadding * 2,
                    marginVertical: Sizes.fixPadding * 2,
                }} >
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: Colors.primaryDark,
                        borderStyle: "dotted",
                        borderRadius: 10
                    }}>

                    <Text style={{
                        textAlign: "center",
                        paddingTop: Sizes.fixPadding * 1,
                        fontSize: 18,
                        color: Colors.black,
                        fontWeight: "600"
                    }}>Performance Dashboard</Text>
                    <View style={{
                        marginHorizontal: Sizes.fixPadding * 5,
                        paddingVertical: Sizes.fixPadding * 2
                    }} >
                        <CustomButton btnName={"Last 30 days availability"} />
                    </View>

                    <View 
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: Sizes.fixPadding * 2,
                        paddingBottom: Sizes.fixPadding * 1,

                    }} >
                        <View 
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",
                            gap:5,
                        }} >
                            <View style={[styles.square, { backgroundColor: 'red', }]} />
                            <Text style={{color:Colors.black, fontWeight:"600"}}>Poor</Text>
                        </View>
                        <View
                         style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",
                            gap:5,
                        }} >
                            <View style={[styles.square, { backgroundColor: 'yellow', }]} />
                            <Text style={{color:Colors.black, fontWeight:"600"}} >Average</Text>
                        </View>
                        <View 
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",
                            gap:5,
                        }} >
                            <View style={[styles.square, { backgroundColor: 'green', }]} />
                            <Text style={{color:Colors.black, fontWeight:"600"}}>Excellent</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    function otherPerformance() {
        return (
            <View style={{ paddingTop: Sizes.fixPadding * 0.5 }}>
                <Divider />
                <View
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: Sizes.fixPadding * 2,
                        paddingTop: Sizes.fixPadding * 1.5
                    }}>
                    <Text
                        style={{
                            color: Colors.primaryDark,
                            fontSize: 14, fontWeight: "600",
                            paddingBottom: 5
                        }}
                    >
                        Other Performance
                    </Text>
                    <Text
                        style={{
                            color: Colors.primaryDark,
                            fontSize: 14, fontWeight: "600",
                            paddingBottom: 5
                        }}
                    >
                        Rank
                    </Text>
                    <Text
                        style={{
                            color: Colors.primaryDark,
                            fontSize: 14, fontWeight: "600",
                            paddingBottom: 5
                        }}
                    >
                        Score
                    </Text>
                </View>
            </View>
        )
    }

    function Score() {
        return (
            <LinearGradient
                colors={[Colors.primaryLight, Colors.primaryDark]}
                style={{
                    height: 120,
                    marginVertical: Sizes.fixPadding * 1,
                    marginHorizontal: Sizes.fixPadding * 2,
                    elevation: 5,
                    borderRadius: Sizes.fixPadding * 1
                }}
            >
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: Sizes.fixPadding * 2,
                        paddingVertical: Sizes.fixPadding * 1,
                    }}>
                    <Text
                        style={{
                            color: Colors.white,
                            fontWeight: "600",
                            fontSize: 16
                        }}>
                        Impact of Score
                    </Text>
                    <Text
                        style={{
                            color: Colors.white,
                            fontWeight: "600",
                            fontSize: 14
                        }}>
                        We provide maximum opportunities to astrologers who are scoring excellent in every Field
                    </Text>

                    <View
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            flexDirection: "row"
                        }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: Colors.white,
                                width: "30%",
                                alignItems: "center",
                                elevation: 5,
                                borderRadius: 10,
                                paddingVertical: 2,
                            }}
                        >
                            <Text style={{ color: Colors.primaryDark }} >Know more</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    square: {
        width: 25,
        height: 25,
        borderRadius: 3,
        elevation: 2
    },
});

export default Performance
