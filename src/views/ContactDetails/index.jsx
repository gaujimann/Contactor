import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { SimpleLineIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import call from 'react-native-phone-call';
import Toolbar from '../../components/Toolbar';
import styles from './styles';
import EditModal from '../../components/EditModal';

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
            <Text style={styles.contactText}>
              {contact?.phoneNumber}
              <SimpleLineIcons name="phone" />
            </Text>
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
          Alert.alert('Alert Title', 'Alert message here...', [
            {
              text: 'YES',
              onPress: () => {
                dispatch({
                  type: 'DELETE',
                  contact,
                });
                navigation.navigate('Contacts');
              },
            },
            {
              text: 'NO',
              style: 'cancel',
            },
          ]);
        }}
      />
    </View>
  );
};

const mapStateToProps = (reduxStoreState, ownProps) => ({
  contact: reduxStoreState.find(
    (contact) => contact.id === ownProps.navigation.state.params.id,
  ),
});

ContactDetails.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(ContactDetails);
