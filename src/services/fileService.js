import * as FileSystem from 'expo-file-system';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

export const copyFile = async (file, newLocation) => FileSystem.copyAsync({
  from: file,
  to: newLocation,
});

const loadImage = async (fileName) => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.Base64,
});

export const addContact = async (contactLocation) => {
  const folderSplit = contactLocation.split('/');
  const fileName = folderSplit[folderSplit.length - 1];
  await copyFile(contactLocation, `${contactLocation}/${fileName}`);

  return {
    name: fileName,
    file: await loadImage(fileName),
  };
};
