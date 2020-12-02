import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, SectionList } from 'react-native';
import { connect } from 'react-redux';
import ContactThumbnail from '../ContactThumbnail';
import styles from './styles';

const ContactList = ({ contacts, navigation }) => {
  const renderSeparator = () => (
    <View
      style={{
        height: 0.5,
        width: '96%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginLeft: '2%',
      }}
    />
  );
  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={contacts}
        keyExtractor={(item, index) => item + index}
        renderItem={({
          item: {
            id, name, photo, phoneNumber,
          },
        }) => (
          <ContactThumbnail
            navigation={navigation}
            id={id}
            name={name}
            photo={photo}
            phoneNumber={phoneNumber}
          />
        )}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.title}>{title}</Text>}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          photo: PropTypes.string.isRequired,
          phoneNumber: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (reduxStoreState) => {
  reduxStoreState.sort((contact1, contact2) => (contact1.name.toUpperCase() < contact2.name.toUpperCase() ? -1 : 1));
  const contacts = reduxStoreState.reduce((acc, contact) => {
    const title = contact.name[0].toUpperCase();
    const lastIndex = acc.length - 1;
    if (lastIndex < 0 || acc[lastIndex].title !== title) {
      return [...acc, { title, data: [contact] }];
    }
    const { data } = acc[lastIndex];
    return [...acc.slice(0, -1), { title, data: [...data, contact] }];
  }, []);
  return {
    contacts,
  };
};

export default connect(mapStateToProps)(ContactList);
