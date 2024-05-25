import React from 'react'
import { FlatList, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../assets/style'
import MyHeader from '../../component/common/MyHeader'
import MyStatusBar from '../../component/common/MyStatusBar'
import LinearGradient from 'react-native-linear-gradient'

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
            navigate_to: 'poojaList',
        },
        {
            id: 2,
            name: 'Pooja/Spell History',
            navigate_to: 'poojaList',
        },
    ]

    const renderItem = ({ item, index }) => {
        return (
            <LinearGradient
                key={index}
                colors={[Colors.primaryLight, Colors.primaryDark]}
                style={{
                    padding: 10,
                    borderRadius: 10,
                    marginTop: 10,
                    marginHorizontal: 30
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.navigate_to)}
                >
                    <Text style={{ color: Colors.white, textAlign: "center" }} > {item.name}</Text>
                </TouchableOpacity>
            </LinearGradient>
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
