import * as Contacts from 'expo-contacts';
import * as Permission from 'expo-permissions';

const getPermissions = async (permissionTypes) => {
  await Promise.all(
    permissionTypes.map(async (type) => Permission.askAsync(type)),
  );
};

export const getContacts = async () => {
  await getPermissions([Permission.CONTACTS]);
  const result = await Contacts.getContactsAsync();
  return result.data;
};
