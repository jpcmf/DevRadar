import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'DevRadar',
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: 'Github Profile',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#1a90e8',
        },
      },
    }
  )
);

export default Routes;
