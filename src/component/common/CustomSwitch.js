import React from 'react'
import { View } from 'react-native'
import { Switch } from 'react-native-switch';
import { Colors } from '../../assets/style';

const CustomSwitch = ({active, change_status}) => {
    return (
        <View
            style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
            <Switch
                value={active}
                renderActiveText={false}
                renderInActiveText={false}
                circleBorderWidth={4}
                circleSize={20}
                onValueChange={change_status}
                circleBorderActiveColor={Colors.primaryLight}
                backgroundActive={Colors.primaryLight}
                backgroundInactive={Colors.grayDark}
                circleBorderInactiveColor={Colors.grayDark}
            />
        </View>
    )
}

export default CustomSwitch
