import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Colors, Fonts, Sizes } from '../../assets/style'
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({ handleSend, btnName }) => {
    return (
        <TouchableOpacity
            onPress={() => handleSend()}
            style={{
                width: '70%',
                marginVertical: Sizes.fixPadding * 0.5,
                alignSelf: 'center',
            }}>
            <LinearGradient
                colors={[Colors.primaryLight, Colors.primaryDark]}
                style={{
                    width: '100%',
                    paddingVertical: Sizes.fixPadding,
                    borderRadius: Sizes.fixPadding * 1.5,
                }}>
                <Text style={{ ...Fonts.white18RobotBold, textAlign: 'center', fontSize: 16 }}>
                    {btnName}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CustomButton
