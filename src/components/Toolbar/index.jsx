import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import NameTextInput from '../TextInputName';
import styles from './styles';

const Toolbar = ({ onAdd }) => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.toolbar}>
      <TouchableOpacity style={styles.toolbarAction}>
        <NameTextInput value={value} setValue={setValue} placeHolder="Search" />
      </TouchableOpacity>
      <TouchableOpacity activateOpacity={0.8} style={styles.toolbarAction} onPress={onAdd}>
        <AntDesign name="plus" style={styles.toolbarPlus} />
      </TouchableOpacity>
    </View>
  );
};

export default Toolbar;
