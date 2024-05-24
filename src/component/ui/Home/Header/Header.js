import { View, Image, Text } from 'react-native';
import { Colors, Sizes, Fonts } from '../../../../assets/style';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: Sizes.fixPadding * 1.5,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grayLight,
        height: '5.5%',
        width: '100%',
      }}>
      <Image
        source={require('../../../../assets/images/logo2.png')}
        style={{ width: 25, height: 25, borderRadius: 100 }}
      />
      <Text
        style={{
          ...Fonts.primaryLight18RighteousRegular,
          marginLeft: Sizes.fixPadding,
        }}>
        FortuneTalk
      </Text>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <View style={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
          <FontAwesome name='bell-o' size={20} color={Colors.black} />
          <TouchableOpacity
            style={{
              paddingVertical: Sizes.fixPadding * 0.5,
              marginLeft: Sizes.fixPadding,
            }}>
            <Image
              source={require('../../../../assets/icon/translate.png')}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Header