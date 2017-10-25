import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/components/home/Home'
import Form from './src/components/requestor/Form'
import Formv2 from './src/components/requestor/Formv2'
import Main from './src/components/nominator/Main'
import Task from './src/components/nominator/Task'
import Request from './src/components/nominator/Request'

import TaskForm from './src/components/task/TaskForm'
import SubmitForm from './src/components/requestor/SubmitForm'
import ChatRoom from './src/components/message/ChatRoom'
import StatusForm from './src/components/requestor/StatusForm';
import ActivityLog from './src/components/activity/ActivityLog';
import GuidelineHome from './src/components/guideline/GuidelineHome'
import GuidelineContent from './src/components/guideline/GuidelineContent'
import AddPerson from './src/components/addition/AddPerson'


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AddPerson />
      </View>
    );
  }
}
