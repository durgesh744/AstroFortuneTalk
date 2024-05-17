import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors } from '../../assets/style';

const CustomDropdown = ({ data, value, setValue }) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={styles.itemTextStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Options' : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    );
};

export default CustomDropdown;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        borderRadius: 8,
    },
    dropdown: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        color:Colors.Dark_grayish_red,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color: Colors.Dark_grayish_red 
    },
    placeholderStyle: {
        fontSize: 16,
        color: Colors.Dark_grayish_red 
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    itemTextStyle: {
        fontSize: 16,
        color: Colors.Dark_grayish_red 
    },
});