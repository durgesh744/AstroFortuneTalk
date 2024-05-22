import { Colors, Sizes, Fonts } from '../../../assets/style';
import {  View, Image, Text } from 'react-native';

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
        source={require('../../../assets/images/logo2.png')}
        style={{ width: 25, height: 25, borderRadius: 100 }}
      />
      <Text
        style={{
          ...Fonts.primaryLight18RighteousRegular,
          marginLeft: Sizes.fixPadding,
        }}>
        FortuneTalk
      </Text>
    </View>
  );
}

export default Header