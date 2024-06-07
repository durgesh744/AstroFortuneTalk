import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Colors, Fonts, Sizes } from '../../assets/style';

const Time = () => {
  const [minutes, setMinutes] = useState(0);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return (
      String(minutes).padStart(2, '0') +
      ':' +
      String(remainingSeconds).padStart(2, '0')
    );
  };

  return (
    <View
      style={[
        {
          justifyContent: 'center',
          marginVertical: Sizes.fixPadding * 2,
          backgroundColor: 'transparent',
          alignItems: 'center',
        },
      ]}>
      <View
        style={{
          backgroundColor: Colors.primaryLight,
          width: '30%',
          paddingVertical: Sizes.fixPadding * 0.5,
          borderRadius: 1000,
        }}>
        <Text style={{ ...Fonts.white16RobotoMedium, textAlign: 'center' }}>
          {formatTime(minutes)}
        </Text>
      </View>
      <Text
        style={{
          ...Fonts.gray16RobotoMedium,
          textAlign: 'center',
          marginVertical: 10,
        }}>
        Chat in progress
      </Text>
    </View>
  );
};

export default Time;
