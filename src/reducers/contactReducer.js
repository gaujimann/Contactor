import { addContact, editContact, deleteContact } from '../services/fileService';

export default function contactReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      addContact(action.contact);
      return [...state, action.contact];
    case 'EDIT':
      editContact(
        state.find((contact) => contact.id === action.contact.id),
        action.contact,
      );
      return state.map((contact) => (contact.id === action.contact.id ? action.contact : contact));
    case 'DELETE':
      deleteContact(action.contact);
      return state.filter((contact) => contact.id !== action.contact.id);
    default:
      return state;
  }
}
