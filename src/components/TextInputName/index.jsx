import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const NameTextInput = ({
  value, setValue, placeHolder, keyboardType,
}) => (
  <TextInput
    placeholder={placeHolder}
    placeholderTextColor="darkgray"
    style={styles.input}
    onChangeText={setValue}
    value={value}
    keyboardType={keyboardType}
  />
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
