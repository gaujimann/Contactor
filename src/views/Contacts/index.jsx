import React from 'react';
import { View, Text } from 'react-native';
import ContactList from '../../components/ContactList';
import Toolbar from '../../components/Toolbar';
import dummy1 from '../../resources/dummy.json';
import dummy2 from '../../resources/dummy2.json';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [{ title: 'dummy', data: [dummy1, dummy2] }] };
  }

  render() {
    const { contacts } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar />
        <ContactList contacts={contacts} />
      </View>
    );
  }
}

export default Contacts;
