import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactList from '../../components/ContactList';
import Toolbar from '../../components/Toolbar';
import AddModal from '../../components/AddModal';

const Contacts = ({ navigation, dispatch }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Toolbar onAdd={() => setIsAddModalOpen(true)} />
      <ContactList navigation={navigation} />
      <AddModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        add={(name, photo, number) => dispatch({
          type: 'ADD',
          contact: {
            id: 3,
            name,
            photo,
            phoneNumber: number,
          },
        })}
      />
    </View>
  );
};

Contacts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Contacts);
