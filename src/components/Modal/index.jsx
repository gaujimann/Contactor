import React from 'react';
import PropType from 'prop-types';
import NativeModal from 'react-native-modal';
import {
  View, Text, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import styles from './styles';

const Modal = ({
  isOpen, closeModal, title, children,
}) => (
  <NativeModal
    isVisible={isOpen}
    hasbackdrop
    onBackButtonpress={closeModal}
    onSwipeComplete={closeModal}
    swipeDirection={['up', 'down']}
    style={styles.modal}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.body}>
        <Text>{title}</Text>
        {children}
      </View>
    </TouchableWithoutFeedback>
  </NativeModal>
);

Modal.propTypes = {
  isOpen: PropType.bool.isRequired,
  closeModal: PropType.func.isRequired,
  title: PropType.string,
  children: PropType.node.isRequired,
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
