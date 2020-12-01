import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contact: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginRight: 16,
    marginLeft: 16,
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  contactText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 16,
    color: 'white',
  },
});
