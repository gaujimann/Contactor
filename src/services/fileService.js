import * as FileSystem from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

const loadContact = async (fileName) => {
  const contact = await FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`);
  console.log(contact);
  return JSON.parse(contact);
};

export const addContact = async (contact) => {
  const fileName = `${contactDirectory}/${contact.name}-${contact.id}.json`;
  console.log('!!!!!!!', fileName);
  try {
    await FileSystem.writeAsStringAsync(fileName, JSON.stringify(contact));
  } catch (e) {
    console.log(e);
  }
  console.log('--------------------------------------------AFTER');
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
