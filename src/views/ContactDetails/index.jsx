import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Toolbar';
import styles from './styles';
import EditModal from '../../components/EditModal';

// set up PropTypes !!!
const ContactDetails = ({ contact, dispatch }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  console.log('ContactDetatils DETAILS!!!!!!!!!!!!!!!!', contact);
  return (
    <View style={styles.container}>
      <Toolbar onPress={() => setIsEditModalOpen(true)} text="Edit" />
      <Image style={styles.contactPhoto} source={{ uri: contact.photo }} />
      <Text style={styles.contactText}>{contact.name}</Text>
      <Text style={styles.contactText}>{contact.phoneNumber}</Text>
      <EditModal
        isOpen={isEditModalOpen}
        closeModal={() => {
          setIsEditModalOpen(false);
        }}
        edit={(name, photo, number) => dispatch({
          type: 'EDIT',
          contact: {
            id: contact.id,
            name,
            photo,
            phoneNumber: number,
          },
        })}
        currentName={contact.name}
        currentPhoto={contact.photo}
        currentNumber={contact.phoneNumber}
      />
    </View>
  );
};

const mapStateToProps = (reduxStoreState, ownProps) => ({
  // getting contacct by contactId
  contact: reduxStoreState.find((contact) => contact.id === ownProps.navigation.state.params.id),
});

ContactDetails.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(ContactDetails);
