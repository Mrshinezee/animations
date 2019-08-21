import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Screen1 extends Component {
  render() {
    return (
      <View>
        <Text>Screen1</Text>
        <Icon name="ios-person" size={30} color="#4F8EF7" />
      </View>
    );
  }
}

export default Screen1;
