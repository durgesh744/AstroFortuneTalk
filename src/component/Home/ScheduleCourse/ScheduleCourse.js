import { ImageBackground, TouchableOpacity } from 'react-native';
import { Sizes } from '../../../assets/style';


const ScheduleCourse =({navigation})=> {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={()=>navigation.navigate('courseList')}
        style={{
          borderRadius: Sizes.fixPadding,
          width: '90%',
          marginVertical: Sizes.fixPadding * 1.5,
          overflow: 'hidden',
          backgroundColor: 'red',
          height: 70,
          alignSelf: 'center',
        }}>
        <ImageBackground
          source={require('../../../assets/images/homedownbanner.png')}
          resizeMode="cover"
          style={{height: '100%', width: '100%', justifyContent: 'center'}}>
        
        </ImageBackground>
      </TouchableOpacity>
      // </View>
    );
  }

  export default ScheduleCourse