import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, SectionList } from 'react-native';
import { connect } from 'react-redux';
import ContactThumbnail from '../ContactThumbnail';
import styles from './styles';

const ContactList = ({ contacts }) => (
  <View style={{ flex: 1 }}>
    <SectionList
      sections={contacts}
      keyExtractor={(item, index) => item + index}
      renderItem={({
        item: {
          id, name, photo, phoneNumber,
        },
      }) => (
        <ContactThumbnail id={id} name={name} photo={photo} phoneNumber={phoneNumber} />
      )}
      renderSectionHeader={({ section: { title } }) => <Text style={styles.title}>{title}</Text>}
    />
  </View>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          photo: PropTypes.string.isRequired,
          phoneNumber: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

const mapStateToProps = (reduxStoreState) => {
  return {
    contact: reduxStoreState,
  };
};

export default connect(mapStateToProps)(ContactList);
