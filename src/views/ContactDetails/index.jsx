import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';

const ContactDetails = ({ contact, dispatch }) => (
  <View>
    <Toolbar />
    <Text style={{ color: 'white' }}>{contact.name}</Text>
  </View>
);

ContactDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (reduxStoreState, ownProps) => ({
  contact: reduxStoreState.find((contact) => contact.id === ownProps.navigation.state.params.id),
});

export default connect(mapStateToProps)(ContactDetails);
