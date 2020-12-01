import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ContactList from '../../components/ContactList';
import Toolbar from '../../components/Toolbar';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
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

const mapStateToProps = (reduxStoreState) => ({
  contacts: [{ title: 'dummy', data: reduxStoreState }],
});

export default connect(mapStateToProps)(Contacts);
