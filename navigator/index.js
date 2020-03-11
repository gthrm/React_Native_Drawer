import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Sidebar from './Sidebar';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: Profile },
    Settings: { screen: Settings }
  },
  {
    initialRouteName: 'Home',
    unmountInactiveRoutes: true,
    headerMode: 'none',
    // eslint-disable-next-line react/react-in-jsx-scope
    contentComponent: (props) => (<Sidebar {...props} />)
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: 'Drawer',
  }
);

const AppContainer = createAppContainer(AppNavigator);

Drawer.navigationOptions = {
  header: null,
  title: '',
  hideHeader: true,
  headerTransparent: true,
  headerStyle: {
    borderBottomWidth: 0
  }
};

export default AppContainer;
