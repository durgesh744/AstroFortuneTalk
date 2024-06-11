import { Colors, Sizes } from '../../../assets/style';
import { navigate } from '../../../utils/navigationServices';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

const ScheduleCourse = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        marginTop: 2,
        paddingTop: 10,
        paddingBottom: 15
      }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate('courseList')}
        style={{
          width: '90%',
          borderRadius: Sizes.fixPadding,
          marginVertical: Sizes.fixPadding * 1.5,
          overflow: 'hidden',
          backgroundColor: 'red',
          height: 70,
          alignSelf: 'center',
          elevation: 5,
          backgroundColor: Colors.white
        }}>
        <ImageBackground
          source={require('../../../assets/images/homedownbanner.png')}
          resizeMode="cover"
          style={{ height: '100%', width: '100%', justifyContent: 'center' }}>

        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

export default ScheduleCourse