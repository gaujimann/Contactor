import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, Text, View, TouchableOpacity,
} from 'react-native';
import styles from './styles';

const ContactThumbnail = ({
  id, name, photo, phoneNumber,
}) => (
  <TouchableOpacity activateOpacity={0.8}>
    <View style={styles.contact}>
      <Image style={styles.contactPhoto} source={{ uri: photo }} />
      <Text style={styles.contactText}>{name}</Text>
    </View>
  </TouchableOpacity>
);

ContactThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

export default ContactThumbnail;
