import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contactPhoto: {
    marginTop: 24,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageAlt: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'rgb(155, 155, 155)',
    borderRadius: 100,
  },
  textContainer: {
    paddingTop: 4,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(155, 155, 155, 0.5)',
    marginRight: 16,
    marginLeft: 16,
  },
  contactText: {
    fontSize: 24,
    paddingTop: 8,
    paddingBottom: 16,
    color: 'white',
  },
  container: {
    flex: 1,
  },
  infoContainer: {
    backgroundColor: 'rgb(40, 40, 40)',
    borderStyle: 'solid',
    borderColor: 'rgba(155, 155, 155, 0.3)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 40,
    marginBottom: 16,
  },
  icon: {
    fontSize: 24,
    paddingTop: 8,
    paddingBottom: 16,
    paddingRight: 8,
    color: 'rgb(10, 132, 255)',
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
