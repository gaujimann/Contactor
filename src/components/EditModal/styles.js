import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  icon: {
    color: 'white',
    fontSize: 40,
    marginTop: 10,
    marginBottom: 20,
  },
  caption: {
    width: winWidth - 100,
    marginTop: 10,
    borderStyle: 'solid',
    borderTopColor: 'white',
    borderTopWidth: 1,
    alignItems: 'center',
    padding: 20,
  },
  captionText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  container: {
    backgroundColor: 'rgba(155, 155, 155, 0.5)',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: winWidth - 100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  acceptView: {
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: 'white',
  },
  textAccept: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#00F',
  },
  textCancel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#F00',
  },
  textInput: {
    width: winWidth - 100,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
  },
});
