import { Dimensions, SafeAreaView } from "react-native";
import { Colors, Sizes } from "../../../../assets/style";
import { SCREEN_WIDTH } from "../../../../config/Screen";
import Carousel from 'react-native-reanimated-carousel';

const width = Dimensions.get('window').width;


const HomeBannerInfo = ({ bannerData }) => {
    const baseOptions = {
        vertical: false,
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * 0.4,
    };

    const renderItem = ({ index }) => {
        return (
            <View
                key={index}
                style={{
                    width: SCREEN_WIDTH * 0.95,
                    height: 140,
                    backgroundColor: Colors.whiteColor,
                    borderRadius: Sizes.fixPadding,
                    padding: Sizes.fixPadding * 0.5,
                }}>
                <Image
                    source={require("../../../../assets/images/home_banner.png")}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                        marginHorizontal: Sizes.fixPadding,
                        borderRadius: Sizes.fixPadding * 2,
                    }}
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, height: 158 }}>
           <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

export default HomeBannerInfo
