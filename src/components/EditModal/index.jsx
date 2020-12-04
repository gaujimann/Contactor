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

const EditModal = ({
  isOpen,
  closeModal,
  edit,
  currentName,
  currentPhoto,
  currentNumber,
}) => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [photo, setPhoto] = React.useState('');

  // Set values to current contact data
  React.useEffect(() => {
    setName(currentName);
  }, [currentName, setName]);

  React.useEffect(() => {
    setPhoto(currentPhoto);
  }, [currentPhoto, setPhoto]);

  React.useEffect(() => {
    setNumber(currentNumber);
  }, [currentNumber, setNumber]);

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <View>
        <Text style={styles.captionText}>Edit Contact</Text>
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
        <Text style={styles.captionText}> Photo</Text>
      </View>
      <Image source={{ uri: photo }} style={styles.photo} />
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
            edit(name, photo, number);
            closeModal();
          }}
          style={[styles.button, styles.acceptView]}
          // disable if any input field is empty
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
            Save
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setName(currentName);
            setPhoto(currentPhoto);
            closeModal(currentNumber);
          }}
          style={styles.button}
        >
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

EditModal.defaultProps = {
  currentName: '',
  currentPhoto: '',
  currentNumber: '',
};
EditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  currentName: PropTypes.string,
  currentPhoto: PropTypes.string,
  currentNumber: PropTypes.string,
};

export default EditModal;
