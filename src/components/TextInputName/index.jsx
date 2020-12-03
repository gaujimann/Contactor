import React from 'react';
import { TextInput, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from './styles';

const NameTextInput = ({
  value, setValue, placeHolder, keyboardType, search, maxLength,
}) => (
  <View style={styles.view}>
    <TextInput
      placeholder={placeHolder}
      placeholderTextColor="darkgray"
      style={[styles.input, search ? { paddingLeft: 32 } : {}]}
      onChangeText={setValue}
      value={value}
      keyboardType={keyboardType}
      maxLength={maxLength}
    />
    {search ? <EvilIcons name="search" style={styles.icon} /> : <></>}
  </View>
);

NameTextInput.defaultProps = {
  placeHolder: '',
  keyboardType: 'default',
  search: undefined,
  value: undefined,
  maxLength: 50,
};

NameTextInput.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  search: PropTypes.string,
  placeHolder: PropTypes.string,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
};

export default NameTextInput;
