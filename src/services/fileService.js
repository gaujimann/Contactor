import * as FileSystem from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

const loadContact = async (fileName) => {
  const contact = await FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`);
  return JSON.parse(contact);
};

export const editContact = async (oldContact, contact) => {
  const oldFileName = `${contactDirectory}/${oldContact.name}-${oldContact.id}.json`;
  const fileName = `${contactDirectory}/${contact.name}-${contact.id}.json`;
  console.log('filename: ', fileName);
  console.log('Oldfilename', oldFileName);
  await FileSystem.moveAsync({
    from: oldFileName,
    to: fileName,
  });
  await FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact));
};

export const addContact = async (contact) => {
  const fileName = `${contactDirectory}/${contact.name}-${contact.id}.json`;
  await FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact));
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
