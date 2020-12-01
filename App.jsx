import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import contactReducer from './src/reducers/contactReducer';
import AppContainer from './src/routes';
import dummy1 from './src/resources/dummy.json';
import dummy2 from './src/resources/dummy2.json';

const store = createStore(contactReducer, [dummy1, dummy2]);
export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
