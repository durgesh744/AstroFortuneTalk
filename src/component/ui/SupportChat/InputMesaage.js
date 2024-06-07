import BottomModal from './BottomModal';
import {Divider, Input} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {Colors, Fonts, Sizes} from '../../../assets/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { actions } from '../../../config/Data';

const audioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.1);

const InputMesaage = ({
  add_message,
  get_profile_pick,
}) => {
  const [message, setMessage] = useState('');
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const hideMenu = () => {
    setIsMenuVisible(false);
  };

  const handleMenuOptionSelect = (option) => {
    console.log(`Selected option: ${option}`);
    hideMenu();
  };

  useEffect(() => {
    return () => {
      audioRecorderPlayer.removeRecordBackListener();
    };
  }, []);

  return (
    <View>
      <Input
        value={message}
        placeholder={'Enter message...'}
        placeholderTextColor={Colors.gray}
        inputStyle={{
          ...Fonts.black14InterMedium,
          paddingVertical: Sizes.fixPadding,
        }}
        onChangeText={setMessage}
        inputContainerStyle={{borderBottomWidth: 0, height: 45, zIndex: -1}}
        containerStyle={{
          backgroundColor: Colors.white,
          marginTop: Sizes.fixPadding,
          height: 55,
          paddingBottom: Sizes.fixPadding,
        }}
        leftIcon={
          <View style={[styles.row]}>
            <TouchableOpacity 
              onPress={() => get_profile_pick(actions[1].type, actions[1].options)}
              style={{transform: [{rotate: '0deg'}]}}>
              <Ionicons name="attach" color={Colors.blackLight} size={28} />
            </TouchableOpacity>
            <Divider
              orientation="vertical"
              color={Colors.gray}
              style={{
                height: '100%',
                marginHorizontal: Sizes.fixPadding * 0.5,
              }}
            />
           
          </View>
        }
        rightIcon={
          <TouchableOpacity
            disabled={message.length == 0 || message.trim() === ''}
            onPress={() => {
              add_message({image: null,type: 'text',message: message});
              setMessage('');
            }}
            style={{
              paddingHorizontal: Sizes.fixPadding * 2,
              paddingVertical: Sizes.fixPadding * 0.7,
              borderRadius: 1000,
              backgroundColor: Colors.primaryDark,
            }}>
            <Text style={{...Fonts.white14RobotoMedium}}>Send</Text>
          </TouchableOpacity>
        }
      />
      <BottomModal
        isVisible={isMenuVisible}
        onClose={hideMenu}
        onSelectOption={handleMenuOptionSelect}
      />
    </View>
  );
};

export default InputMesaage;

const styles = StyleSheet.create({
  row: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.grayLight,
    borderTopLeftRadius: Sizes.fixPadding * 4,
    elevation: 8,
  },
});
