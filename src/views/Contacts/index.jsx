import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ContactList from '../../components/ContactList';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    const { contacts } = this.state;
    return <ContactList contacts={contacts} />;
  }
}

const mapStateToProps = (reduxStoreState) => ({
  contacts: [{ title: 'dummy', data: reduxStoreState }],
});

export default connect(mapStateToProps)(Contacts);
