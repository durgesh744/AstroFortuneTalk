import React from 'react';
import { View, Image, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH } from '../../config/Screen';
import { Colors, Sizes } from '../../assets/style';

const TabItem = ({ text, tab, handleSet }) => (
  <TouchableOpacity
    onPress={() => handleSet(tab)}
  >
    <ImageBackground
      source={require('../../assets/images/schedule_pooja.png')}
      style={styles.imageBackground}
      resizeMode="contain"
    >
      <Image
        source={require("../../assets/icon/history_icon.png")}
        style={styles.icon}
      />
      <Text style={styles.text}>{text}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const CourseTabItem = ({ setActiveTab }) => {
  
  const handleSet = (tab) => {
    setActiveTab(tab)
  }

  return (
    <View style={styles.container}>
      <TabItem text="Demo Class" tab={0} handleSet={handleSet} />
      <TabItem text="Live Class" tab={1} handleSet={handleSet} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  imageBackground: {
    width: SCREEN_WIDTH * 0.5,
    height: 60,
    position: 'relative',
    top: -Sizes.fixPadding * 2,
    zIndex: -1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Sizes.fixPadding * 1.5,
    gap: 5,
  },
  icon: {
    width: SCREEN_WIDTH * 0.05,
    height: 20,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default CourseTabItem;
