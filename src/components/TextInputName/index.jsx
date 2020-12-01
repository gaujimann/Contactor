import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const NameTextInput = ({ value, setValue, placeHolder }) => (
  <TextInput
    placeholder={placeHolder}
    placeholderTextColor="white"
    style={styles.input}
    onChangeText={setValue}
    value={value}
  />
);

NameTextInput.defaultProps = {
  placeHolder: '',
};

NameTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
};

export default NameTextInput;
