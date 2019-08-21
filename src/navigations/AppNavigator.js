import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import IconNav from 'react-native-vector-icons/MaterialIcons';
import ScreenA from '../screens/screen1/Screen1';
import ScreenB from '../screens/screen2/Screen2';
import ScreenC from '../screens/screen3/Screen3';
import DrawerContent from './components/Drawer';
import Dashboard from '../screens/landingPage/LandingPage';
import Search from '../screens/search/Search';
import Trending from '../screens/trending/Trending';
import Inbox from '../screens/inbox/Inbox';

const DashboardBottomNavigation = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <IconNav name="home" color={tintColor} size={25} />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <IconNav name="search" color={tintColor} size={25} />
        ),
      },
    },
    Trending: {
      screen: Trending,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <IconNav name="whatshot" color={tintColor} size={25} />
        ),
      },
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <IconNav name="folder" color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    navigationOptions: ({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    },
    tabBarOptions: {
      activeTintColor: '#AA00FF',
      inactiveTintColor: '#605F60',
      inactiveBackgroundColor: '#ffffff',
      activeBackgroundColor: '#ffffff',
      labelStyle: {
        fontSize: 10,
        paddingBottom: 3,
      },
      style: {
        backgroundColor: '#ffffff',
      },
    },
  },
);

const DashboardStackNavigation = createStackNavigator(
  {
    DashboardBottomNavigation: DashboardBottomNavigation,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerLeft: (
          <TouchableOpacity onPress={navigation.openDrawer}>
            <Icon name="md-menu" style={{padding: 10}} size={20} />
          </TouchableOpacity>
        ),
      };
    },
  },
);

const Screen1 = createStackNavigator({
  Screen1: {
    screen: ScreenA,
  },
});
const Screen2 = createStackNavigator({
  Screen2: {
    screen: ScreenB,
  },
});
const Screen3 = createStackNavigator({
  Screen3: {
    screen: ScreenC,
  },
});

const DrawerNavigator = createDrawerNavigator(
  {
    Dashboard: DashboardStackNavigation,
    ScreenA: {screen: Screen1},
    ScreenB: {screen: Screen2},
    ScreenC: {screen: Screen3},
  },
  {
    // initialRouteName: 'ScreenA',
    contentComponent: DrawerContent,
  },
);

const AppSwitchNavigator = createSwitchNavigator({
  App: DrawerNavigator,
});

export default createAppContainer(AppSwitchNavigator);
