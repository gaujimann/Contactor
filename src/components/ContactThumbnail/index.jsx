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
      {photo !== '' ? (
        <Image style={styles.contactPhoto} source={{ uri: photo }} />
      ) : (
        <View style={styles.imageAlt}>
          <Text style={{ color: 'white', fontSize: 24 }}>{name[0]}</Text>
        </View>
      )}
      <Text style={styles.contactText}>{name}</Text>
    </View>
  </TouchableOpacity>
);

ContactThumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ContactThumbnail;
