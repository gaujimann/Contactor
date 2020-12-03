import React, { useState } from 'react';
import {
  View, Text, Image, Button, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { SimpleLineIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import call from 'react-native-phone-call';
import Toolbar from '../../components/Toolbar';
import styles from './styles';
import EditModal from '../../components/EditModal';

// set up PropTypes !!!
const ContactDetails = ({ contact, dispatch, navigation }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Toolbar onPress={() => setIsEditModalOpen(true)} text="Edit" />
      <View style={styles.imageContainer}>
        <Image style={styles.contactPhoto} source={{ uri: contact?.photo }} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={{ color: 'rgb(155, 155, 155)' }}>Name</Text>
          <Text style={styles.contactText}>{contact?.name}</Text>
        </View>
        <View style={[styles.textContainer, { borderBottomWidth: 0 }]}>
          <Text style={{ color: 'rgb(155, 155, 155)' }}>Phone Number</Text>
          <TouchableOpacity
            onPress={() => call({
              number: contact.phoneNumber,
              prompt: false,
            }).catch(console.error)}
          >
            <View style={styles.numberContainer}>
              <Text
                style={[
                  styles.contactText,
                  { fontStyle: 'italic', color: 'rgb(10, 132, 255)' },
                ]}
              >
                {contact?.phoneNumber.substring(0, 3)}
                {' '}
                {contact?.phoneNumber.substring(3, 7)}
              </Text>
              <SimpleLineIcons name="phone" style={styles.icon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
        currentName={contact?.name}
        currentPhoto={contact?.photo}
        currentNumber={contact?.phoneNumber}
      />
      <Button
        title="Delete"
        onPress={() => {
          dispatch({
            type: 'DELETE',
            contact,
          });
          navigation.navigate('Contacts');
        }}
      />
    </View>
  );
};

const mapStateToProps = (reduxStoreState, ownProps) => ({
  // getting contacct by contactId
  contact: reduxStoreState.find(
    (contact) => contact.id === ownProps.navigation.state.params.id,
  ),
});

ContactDetails.defaultProps = {
  contact: undefined,
};

ContactDetails.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(ContactDetails);
