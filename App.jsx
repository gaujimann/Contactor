import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import contactReducer from './src/reducers/contactReducer';
import AppContainer from './src/routes';
import { getAllContacts } from './src/services/fileService';

export default function App() {
  const [store, setStore] = useState(null);
  // const getContacts = useCallback(async () => {
  //   setStore(createStore(contactReducer, await getAllContacts()));
  // }, [setStore, contactReducer, getAllContacts]);
  useEffect(() => {
    const getContacts = async () => {
      const contacts = await getAllContacts();
      setStore(createStore(contactReducer, contacts));
    };
    getContacts();
  }, []);
  return store !== null ? (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ) : (
    <Text>Loading</Text>
  );
}
