import { addContact } from '../services/fileService';

export default function (state, action) {
  switch (action.type) {
    case 'ADD':
      addContact(action.contact);
      return [...state, action.contact];
    default:
      return state;
  }
}
