import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import ContactList from '../../components/ContactList';
import Toolbar from '../../components/Toolbar';
import AddModal from '../../components/AddModal';

const Contacts = ({ navigation, dispatch }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchString, setSearchString] = useState('');
  return (
    <View style={{ flex: 1 }}>
      <Toolbar
        onPress={() => setIsAddModalOpen(true)}
        icon="plus"
        search="Search"
        navigation={navigation}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <ContactList navigation={navigation} searchString={searchString} />
      <AddModal
        isOpen={isAddModalOpen}
        closeModal={() => setIsAddModalOpen(false)}
        add={(name, photo, number) => dispatch({
          type: 'ADD',
          contact: {
            id: uuidv4(),
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
