import React, { useState } from 'react';
import { Colors } from '../../../assets/style';
import CustomerModal from '../../common/CustomerModal';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const AmountInfo = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <TouchableOpacity
                onPress={() => setOpen(true)}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderColor: Colors.primaryLight,
                    paddingVertical: 7,
                    paddingHorizontal: 20,
                    borderRadius: 50,
                    borderWidth: 2,
                    marginHorizontal: 20,
                    marginTop: 20,
                }}>
                <View>
                    <Text style={styles.amountTxt}>Available Amount</Text>
                    <Text style={styles.amount}>₹ 0</Text>
                </View>
                <View>
                    <Text style={styles.amountTxt}>Available Amount</Text>
                    <Text style={styles.amount}>₹ 0</Text>
                </View>

                <FontAwesome6 name='angle-down' size={20} color={Colors.primaryDark} />

            </TouchableOpacity>

            <CustomerModal customerModalVisible={open} setCustomerModalVisible={setOpen}>
                <View
                    style={{
                        paddingBottom: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: Colors.primaryDark,
                            fontSize: 15,
                            fontWeight: '600',
                        }}>
                        Earning Breakup
                    </Text>
                    <TouchableOpacity
                        onPress={() => setOpen(false)}
                        style={{
                            alignItems: "flex-end"
                        }}
                    >
                        <AntDesign size={20} color={Colors.black} name='close' />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: Colors.grayLight,
                        borderRadius: 15,
                        padding: 10,
                    }}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text style={{ color: Colors.black, fontWeight: "600" }} >Available Balance</Text>
                        <Text style={{ color: Colors.primaryDark }} >₹ 0</Text>
                    </View>
                    <Text style={{ color: Colors.black }}>PG Charge:</Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: "flex-start",
                            paddingVertical: 2,
                        }}>
                        <Text style={{ flex: 1, fontSize: 11 }}>2.5% charge deducted by Payment Gateways for accepting online payments</Text>
                        <Text style={{ flexShrink: 1, color: Colors.black }}>₹ - 0</Text>
                    </View>
                </View>

                <View
                    style={{
                        backgroundColor: Colors.grayLight,
                        borderRadius: 15,
                        padding: 10,
                        marginTop: 5
                    }}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text style={{ color: Colors.black, fontWeight: "600" }} >Sub Total</Text>
                        <Text style={{ color: Colors.primaryDark }} >₹ 0</Text>
                    </View>
                    <Text style={{ color: Colors.black }}>TDS:</Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: "flex-start",
                            paddingVertical: 2,
                        }}>
                        <Text style={{ flex: 1, fontSize: 11 }}>10% of subtotal. Tax deducted as per government regulations</Text>
                        <Text style={{ flexShrink: 1, color: Colors.black }}>₹ - 0</Text>
                    </View>

                    <Text style={{ color: Colors.black }}>GST:</Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: "flex-start",
                            paddingVertical: 2,
                        }}>
                        <Text style={{ flex: 1, fontSize: 11 }}>GST certificate mandatory for astrologers who earn more than INR 20 lacs per year</Text>
                        <Text style={{ flexShrink: 1, color: Colors.black }}>₹ - 0</Text>
                    </View>
                </View>

                <View
                    style={{
                        backgroundColor: "#F2FFF8",
                        borderRadius: 15,
                        padding: 8,
                        marginTop: 5,
                        borderWidth: 3,
                        borderColor: Colors.greenDark
                    }}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text style={{ color: Colors.greenDark, fontWeight: "600" }} >Payable Amount</Text>
                        <Text style={{ color: Colors.greenDark, fontWeight: "600" }} >₹ 0</Text>
                    </View>
                    <Text style={{ fontSize: 11 }}>Final Amount that gets transferred to your bank account on payout date </Text>
                </View>
            </CustomerModal>
        </>
    );
};

const styles = StyleSheet.create({
    amountTxt: {
        color: Colors.primaryDark,
        fontWeight: '700',
    },
    amount: {
        color: Colors.black,
        fontWeight: '700',
    },
});

export default AmountInfo;
