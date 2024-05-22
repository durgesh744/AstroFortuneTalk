import React from 'react'
import { View } from 'react-native'
import { Colors } from '../../assets/style';
import { SCREEN_HEIGHT } from '../../config/Screen';

const CustomLine = () => {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: SCREEN_HEIGHT * 0.01,
                borderBottomWidth: 1,
                borderColor: Colors.gray3,
            }}>
        </View>
    )
}

export default CustomLine
