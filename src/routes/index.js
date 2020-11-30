import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Contacts from '../views/Contacts';

const StackNavigator = createStackNavigator(
  {
    Contacts,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'rgb(25, 25, 25)' },
      cardStyle: { backgroundColor: 'black' },
    },
  },
);

export default createAppContainer(StackNavigator);
