/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';

class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default App;
