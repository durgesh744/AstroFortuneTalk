import { SCREEN_WIDTH } from "../../../../config/Screen";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors, Fonts, Sizes } from "../../../../assets/style";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { tabsData } from "../../../../config/data";

const TabsInfo = ({ navigation }) => {
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate(item.navigate_to)}
                style={{
                    width: SCREEN_WIDTH * 0.28,
                    height: SCREEN_WIDTH * 0.22,
                    backgroundColor: Colors.primaryLight,
                    marginBottom: Sizes.fixPadding,
                    marginRight: SCREEN_WIDTH * 0.04,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: Sizes.fixPadding * 2,
                    elevation: 8,
                }}>
                <Image
                    source={item.icon}
                    style={{
                        width: SCREEN_WIDTH * 0.08,
                        height: SCREEN_WIDTH * 0.08,
                        resizeMode: 'contain',
                    }}
                />
                <Text
                    style={{
                        ...Fonts.white14RobotoMedium,
                        marginTop: Sizes.fixPadding * 0.5,
                    }}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };
    return (
        <View
            style={{
                backgroundColor: Colors.primaryDark,
                paddingVertical: SCREEN_WIDTH * 0.04,
                paddingLeft: SCREEN_WIDTH * 0.04,
            }}>
            <FlatList
                data={tabsData}
                renderItem={renderItem}
                numColumns={3}
                keyExtractor={item => item.id}
                columnWrapperStyle={{ justifyContent: 'center' }}
            />
        </View>
    );
}

export default TabsInfo