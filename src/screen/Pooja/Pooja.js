import React from 'react'
import { Colors } from '../../assets/style'
import { FlatList, View } from 'react-native'
import MyHeader from '../../component/MyHeader'
import MyStatusBar from '../../component/MyStatusBar'
import CustomButton from '../../component/CustomButton'

const Pooja = ({ navigation }) => {

    const insideTabs = [
        {
            id: 0,
            name: 'Schedule a Pooja/Spell',
            navigate_to: 'poojaList',
        },
        {
            id: 1,
            name: 'List of Scheduled Pooja/Spell',
            navigate_to: 'scheduledList',
        },
        {
            id: 2,
            name: 'Pooja/Spell History',
            navigate_to: 'poojaHistory',
        },
    ]

    const renderItem = ({ item, index }) => {
        return (
            <CustomButton
                handleSend={() => navigation.navigate(item.navigate_to)}
                btnName={item.name}
            />
        )
    }

    return (
        <View>
            <MyStatusBar
                backgroundColor={Colors.primaryDark}
                barStyle={'light-content'}
            />
            <MyHeader navigation={navigation} title={"Pooja"} />
            <View
                style={{
                    paddingTop: 10
                }}
            >
                <FlatList
                    data={insideTabs}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Pooja
