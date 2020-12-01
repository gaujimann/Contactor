import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ContactList from '../../components/ContactList';
import Toolbar from '../../components/Toolbar';
import AddModal from '../../components/AddModal';

const Contacts = ({ contacts, dispatch }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Toolbar onAdd={() => setIsAddModalOpen(true)} />
      <ContactList contacts={contacts} />
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

const mapStateToProps = (reduxStoreState) => ({
  contacts: [{ title: 'dummy', data: reduxStoreState }],
});

export default connect(mapStateToProps)(Contacts);
