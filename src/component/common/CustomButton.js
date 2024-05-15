import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts } from '../../assets/style'

const { width, height } = Dimensions.get('screen');

const CustomButton = ({ handleSend, btnName }) => {
    return (
        <View
            style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
            <TouchableOpacity
                onPress={() => handleSend()}
                style={{
                    backgroundColor: Colors.primaryDark,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30,
                    height: width * 0.13,
                    width: '70%',
                    paddingHorizontal: 15,
                }}>
                <Text style={Fonts.white16RobotoMedium}>{btnName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton
