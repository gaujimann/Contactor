import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import styles from './styles';

// set up PropTypes !!!
const ContactDetails = ({ contact, dispatch }) => (
  <View style={styles.container}>
    <Image style={styles.contactPhoto} source={{ uri: contact.photo }} />
    <Text style={styles.contactText}>{contact.name}</Text>
    <Text style={styles.contactText}>{contact.phoneNumber}</Text>
  </View>
);

ContactDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (reduxStoreState, ownProps) => ({
  // getting contacct by contactId
  contact: reduxStoreState.find((contact) => contact.id === ownProps.navigation.state.params.id),
});

export default connect(mapStateToProps)(ContactDetails);
