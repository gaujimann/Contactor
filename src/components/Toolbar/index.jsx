import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import NameTextInput from '../TextInputName';
import styles from './styles';

const Toolbar = ({
  onPress, icon, text, search,
}) => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.toolbar}>
      {search ? (
        <TouchableOpacity style={styles.toolbarAction}>
          <NameTextInput value={value} setValue={setValue} placeHolder={search} search />
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <TouchableOpacity activateOpacity={0.8} style={styles.toolbarAction} onPress={onPress}>
        {icon ? (
          <AntDesign name={icon} style={styles.toolbarPlus} />
        ) : (
          <Text style={styles.toolbarPlus}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

Toolbar.defaultProps = {
  icon: undefined,
  text: undefined,
  search: false,
};

Toolbar.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string,
  search: PropTypes.bool,
};

export default Toolbar;
