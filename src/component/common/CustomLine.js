import React from 'react'
import { Dimensions, View } from 'react-native'
import { Colors } from '../../assets/style';

const { width, height } = Dimensions.get('screen');

const CustomLine = () => {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: height * 0.01,
                borderBottomWidth: 1,
                borderColor: Colors.gray3,
            }}>
        </View>
    )
}

export default CustomLine
