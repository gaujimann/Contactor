import React from 'react';
import { TextInput, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const NameTextInput = ({
  value, setValue, placeHolder, keyboardType, search,
}) => (
  <View style={styles.view}>
    <TextInput
      placeholder={placeHolder}
      placeholderTextColor="darkgray"
      style={styles.input}
      onChangeText={setValue}
      value={value}
      keyboardType={keyboardType}
    />
    {search ? <EvilIcons name="search" style={styles.icon} /> : <></>}
  </View>
);

NameTextInput.defaultProps = {
  placeHolder: '',
  keyboardType: '',
};

NameTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  keyboardType: PropTypes.string,
};

export default NameTextInput;
