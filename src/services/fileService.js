import * as FileSystem from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

export const copyFile = async (file, newLocation) => FileSystem.copyAsync({
  from: file,
  to: newLocation,
});

const loadContact = async (fileName) => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.Base64,
});

export const addContact = async (contactLocation) => {
  const folderSplit = contactLocation.split('/');
  const fileName = folderSplit[folderSplit.length - 1];
  await copyFile(contactLocation, `${contactLocation}/${fileName}`);

  return {
    name: fileName,
    file: await loadContact(fileName),
  };
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
  return Promise.all(
    result.map(async (fileName) => ({
      name: fileName,
      file: await loadContact(fileName),
    })),
  );
};
