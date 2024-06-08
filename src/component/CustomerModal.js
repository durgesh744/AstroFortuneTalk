import React from 'react';
import { SCREEN_WIDTH } from '../config/Screen';
import { Colors, Sizes } from '../assets/style';
import { View, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const CustomerModal = ({
  customerModalVisible,
  setCustomerModalVisible,
  children
}) => {
  return (
    <Modal
      visible={customerModalVisible}
      transparent
      onRequestClose={() => setCustomerModalVisible(false)}
    >
      <TouchableWithoutFeedback onPress={() => setCustomerModalVisible(false)}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomerModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.black + '10',
    justifyContent: 'center',
    alignItems: 'center',
    top: 70,
  },
  container: {
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: Colors.white,
    borderRadius: 15,
    paddingHorizontal: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding * 1,
    elevation: 5,
  }
});
