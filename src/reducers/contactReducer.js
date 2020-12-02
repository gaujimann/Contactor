import { addContact } from '../services/fileService';

export default function (state, action) {
  switch (action.type) {
    case 'ADD':
      addContact(action.contact);
      return [...state, action.contact];
    case 'EDIT':
      return state.map((contact) => (contact.id === action.contact.id ? action.contact : contact));
    default:
      return state;
  }
}
