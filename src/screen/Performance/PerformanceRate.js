import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Sizes } from '../../assets/style';
import { ProgressBar } from 'react-native-paper';

const PerformanceRate = ({ heading }) => {
    return (
        <>
            <View style={styles.card}>
                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            color: Colors.primaryDark,
                            fontSize: 16, fontWeight: "600",
                            paddingBottom: Sizes.fixPadding * 2
                        }}
                    >
                        {heading}
                    </Text>
                    <LinearGradient
                        colors={["#CF0000", "#FFD600", "#07B457"]}
                        style={{ height: 15, borderRadius: 20, }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                    </LinearGradient>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                        <Text> 0.0 </Text>
                        <Text>10.0</Text>
                        <Text>15.0</Text>
                        <Text>100.0</Text>
                    </View>
                </View>

                <View
                    style={{
                        backgroundColor: Colors.white,
                        height: 5,
                    }} />

                <View style={{ padding: 10 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            color: Colors.black,
                            fontWeight: "600",
                            paddingBottom: 10,
                        }}
                    >Your score</Text>
                    <ProgressBar
                        progress={0.8}
                        color={Colors.red}
                        style={{
                            height: 15,
                            backgroundColor: Colors.white,
                            borderRadius: 20,
                        }}
                    />

                    <Text
                        style={{
                            paddingTop: 10,
                            fontWeight: "600",
                            color: Colors.gray2
                        }}
                    >
                        PO retention means that if you talk to 100 PO
                        customers and 32 out of those customers do a
                        paid transaction on Astrotalk, then your PO
                        retention is 32%. For PO retention, it doesn't
                        matter if the customer comes back to you or
                        not but the purpose of PO is to make the
                        customer a paid user. It can change (increase/decrease)
                        even if you did not work on the previous day
                        because 90th
                    </Text>

                    <Text style={{
                        fontSize: 16, 
                        fontWeight: "600", 
                        color: Colors.gray2,
                        paddingVertical:10
                    }} >Rank: N/A</Text>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    card: {
        marginHorizontal: Sizes.fixPadding * 2,
        margin: 10,
        backgroundColor: Colors.dullWhite,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
    },
});

export default PerformanceRate
