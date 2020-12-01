import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, Text, View, TouchableOpacity,
} from 'react-native';
import styles from './styles';

const ContactThumbnail = ({
  navigation, id, name, photo,
}) => (
  <TouchableOpacity
    activateOpacity={0.8}
    onPress={() => navigation.navigate('ContactDetails', { id, name })}
  >
    <View style={styles.contact}>
      <Image style={styles.contactPhoto} source={{ uri: photo }} />
      <Text style={styles.contactText}>{name}</Text>
    </View>
  </TouchableOpacity>
);

ContactThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ContactThumbnail;
