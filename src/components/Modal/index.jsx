import React from 'react';
import PropType from 'prop-types';
import NativeModal from 'react-native-modal';
import { View, Text } from 'react-native';
import styles from './styles';

const Modal = ({
 isOpen, closeModal, title, children
}) => (
  <NativeModal
    isVisible={isOpen}
    hasbackdrop
    onBackButtonpress={closeModal}
    onSwipeComplete={closeModal}
    swipeDirection={['up', 'down']}
    style={styles.modal}
  >
    <View style={styles.body}>
      <Text>{ title }</Text>
      { children }
    </View>
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
