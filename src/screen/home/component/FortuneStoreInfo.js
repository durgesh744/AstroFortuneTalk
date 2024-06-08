import { Image, TouchableOpacity, View } from 'react-native';
import { Colors, Sizes } from '../../../../assets/style';
import { SCREEN_WIDTH } from '../../../../config/Screen';

const FortuneStoreInfo = ({ navigation }) => {
  return (
    <View style={{
      elevation: 5,
      shadowColor: Colors.gray,
      backgroundColor: Colors.white,
      paddingTop: 10,
      paddingBottom: 5
    }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('poojaList')}
        style={{
          borderRadius: Sizes.fixPadding,
          width: '90%',
          marginBottom: Sizes.fixPadding * 1.5,
          overflow: 'hidden',
          height: SCREEN_WIDTH * 0.159,
          alignSelf: 'center',
          elevation: 5,
          backgroundColor: Colors.white
        }}>
        <Image
          source={require('../../../../assets/images/fortune_store.png')}
          resizeMode="contain"
          style={{ height: '100%', width: '100%', justifyContent: 'center' }} />
      </TouchableOpacity>
    </View>
  );
}

export default FortuneStoreInfo