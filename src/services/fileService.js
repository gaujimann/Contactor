import * as FileSystem from 'expo-file-system';
import latinize from 'latinize';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

const loadContact = async (fileName) => {
  const contact = await FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`);
  return JSON.parse(contact);
};

export const addContact = async (contact) => {
  const fileName = `${contactDirectory}/${latinize(contact.name)}-${contact.id}.json`;
  await FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact));
};

export const editContact = async (oldContact, contact) => {
  const oldFileName = `${contactDirectory}/${latinize(oldContact.name)}-${oldContact.id}.json`;
  const fileName = `${contactDirectory}/${latinize(contact.name)}-${contact.id}.json`;
  await FileSystem.moveAsync({
    from: oldFileName,
    to: fileName,
  });
  await FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact));
};

export const deleteContact = async (contact) => {
  const fileName = `${contactDirectory}/${latinize(contact.name)}-${contact.id}.json`;
  await FileSystem.deleteAsync(fileName);
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  }
};

export const getAllContacts = async () => {
  await setupDirectory();
  const result = await FileSystem.readDirectoryAsync(contactDirectory);
  return Promise.all(result.map(async (fileName) => loadContact(fileName)));
};
