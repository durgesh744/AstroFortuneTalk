import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../assets/style';

const TableComponent = ({ heading, tableData }) => {
    return (
        <View style={styles.card}>
            <Text
                style={{
                    color: Colors.primaryDark,
                    fontSize: 16, fontWeight: "600",
                    paddingBottom: 5
                }}
            >
                {heading}
            </Text>

            {tableData.rows.map((row, rowIndex) => (
                <View key={rowIndex} style={{
                    flexDirection: 'row',
                }}>
                    {row.map((cell, cellIndex) => (
                        <Text
                            key={cellIndex}
                            style={{
                                flex: 1,
                                padding: 10,
                                borderWidth: 1,
                                borderColor: Colors.gray3,
                                borderTopWidth: rowIndex === 0 ? 1 : 0,
                                borderBottomWidth: rowIndex === tableData.rows.length - 1 ? 0 : 1,
                                borderLeftWidth: cellIndex === 0 ? 0 : 1,
                                borderRightWidth: cellIndex === row.length - 1 ? 0 : 1,
                                fontSize: 12,
                                color: cellIndex == 1 ? Colors.primaryDark : Colors.black,
                                fontWeight: "600",
                            }}
                        >
                            {cell}
                        </Text>
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginHorizontal: Sizes.fixPadding * 2,
        margin: 10,
        padding: 10,
        backgroundColor: Colors.dullWhite,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default TableComponent;
