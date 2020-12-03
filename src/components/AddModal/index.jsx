import React from 'react';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import {
  TouchableOpacity, Text, View, Image,
} from 'react-native';
import Modal from '../Modal';
import styles from './styles';
import NameTextInput from '../TextInputName';
import { takePhoto, selectFromCameraRoll } from '../../services/imageServices';

const AddModal = ({ isOpen, closeModal, add }) => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [photo, setPhoto] = React.useState('');

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <View
        style={{
          borderStyle: 'solid',
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          paddingHorizontal: 10,
        }}
      >
        <Text style={styles.captionText}>Add Contact</Text>
      </View>
      <TouchableOpacity style={styles.textInput}>
        <NameTextInput
          value={name}
          setValue={setName}
          placeHolder="Enter Name"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.textInput}>
        <NameTextInput
          value={number}
          setValue={setNumber}
          placeHolder="Enter Phone Number"
          keyboardType="number-pad"
          maxLength={7}
        />
      </TouchableOpacity>
      <View style={styles.caption}>
        <Text style={styles.captionText}>Photo</Text>
      </View>
      {photo !== '' ? (
        <Image source={{ uri: photo }} style={styles.photo} />
      ) : (
        <></>
      )}
      <TouchableOpacity
        onPress={async () => {
          const p = await takePhoto();
          setPhoto(p);
        }}
      >
        <Entypo style={styles.icon} name="camera" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          const p = await selectFromCameraRoll();
          setPhoto(p);
        }}
      >
        <Entypo style={styles.icon} name="image" />
      </TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            add(name, photo, number);
            setPhoto('');
            setName('');
            setNumber('');
            closeModal();
          }}
          style={[styles.button, styles.acceptView]}
          disabled={photo === '' || name === '' || number.length < 7}
        >
          <Text
            style={[
              styles.textAccept,
              !(photo === '' || name === '' || number.length < 7)
                ? {}
                : { color: 'rgba(155, 155, 155, 0.5)' },
            ]}
          >
            OK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setName('');
            setPhoto('');
            closeModal();
          }}
          style={styles.button}
        >
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

AddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
};

export default AddModal;
