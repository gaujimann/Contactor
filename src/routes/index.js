import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from '../views/Contacts';
import ContactDetails from '../views/ContactDetails';

const StackNavigator = createStackNavigator(
  {
    Contacts,
    ContactDetails: {
      screen: ContactDetails,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'rgb(30, 30, 30)' },
      cardStyle: { backgroundColor: 'rgb(20, 20, 20)' },
    },
  },
);

export default createAppContainer(StackNavigator);
