import { Image } from "react-native";
import { useState } from "react";
import { FlatList } from "react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SCREEN_WIDTH } from "../../../config/Screen";
import { Colors, Fonts, Sizes } from "../../../assets/style";
import { provider_img_url } from "../../../config/Constants";

function TrainingReelsInfo() {
    const on_navigate = item => {
        //   const arr = trainingVedioData.filter(e => e.id != item.id);
        //   const new_arr = [item, ...arr];
        //   navigation.navigate('reels', {data: new_arr});
    };

    const [trainingVedioData, setTrainingVedioData] = useState([
        { id: '1', image: '../../../assets/images/ReelImg.jpeg' },
        { id: '2', image: 'https://yt3.googleusercontent.com/4JmWfgEiUAhyV9id6ys4o9_Fl0TYevULhKZFhDWVGFg_K9vwF0IpEVKepLJDvrbUERkeDAsouQ=s160-c-k-c0x00ffffff-no-rj' },
        { id: '3', image: 'https://yt3.googleusercontent.com/4JmWfgEiUAhyV9id6ys4o9_Fl0TYevULhKZFhDWVGFg_K9vwF0IpEVKepLJDvrbUERkeDAsouQ=s160-c-k-c0x00ffffff-no-rj' },
        // Add more training reel items as needed
    ])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => on_navigate(item)}
                style={{
                    width: SCREEN_WIDTH * 0.4,
                    height: SCREEN_WIDTH * 0.5,
                    borderRadius: Sizes.fixPadding,
                    overflow: 'hidden',
                    marginRight: Sizes.fixPadding * 1.5,
                    borderWidth: 4,
                    borderColor: Colors.primaryLight,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                }}>
                <Image
                    source={{ uri: provider_img_url + item.image }}
                    style={{ width: '100%', height: '100%' }}
                />
            </TouchableOpacity>
        );
    };
    return (
        <View
            style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                paddingVertical: Sizes.fixPadding * 1.5,
                marginTop: Sizes.fixPadding,
                borderColor: Colors.grayLight,
            }}>
            <View
                style={{
                    marginHorizontal: Sizes.fixPadding * 1.5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: Sizes.fixPadding,
                }}>
                <Text style={{ ...Fonts.black16RobotoRegular }}>Training Reels</Text>
                <TouchableOpacity>
                    <Text style={{ ...Fonts.primaryLight14RobotoRegular }}></Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={trainingVedioData}
                horizontal
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingLeft: Sizes.fixPadding * 1.5 }}
            />
        </View>
    );
}

export default TrainingReelsInfo