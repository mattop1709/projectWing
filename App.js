import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/components/home/Home'
import Form from './src/components/requestor/Form'
import Main from './src/components/nominator/Main'
import Task from './src/components/nominator/Task'
import Request from './src/components/nominator/Request'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Form />
      </View>
    );
  }
}
