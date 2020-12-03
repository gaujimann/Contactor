import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  toolbarAction: {
    alignItems: 'flex-end',
    padding: 16,
  },
  toolbarPlus: {
    fontSize: 32,
    color: 'rgb(10, 132, 255)',
  },
  toolbarText: {
    fontSize: 20,
    color: 'rgb(10, 132, 255)',
  },
});
