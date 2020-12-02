import React from 'react';
import { TextInput, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const NameTextInput = ({
  value, setValue, placeHolder, keyboardType,
}) => (
  <View style={styles.view}>
    <Image source={require('../../../assets/icon.png')} style={styles.image} />
    <TextInput
      placeholder={placeHolder}
      placeholderTextColor="darkgray"
      style={styles.input}
      onChangeText={setValue}
      value={value}
      keyboardType={keyboardType}
    />
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
