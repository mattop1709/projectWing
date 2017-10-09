import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import ActionButton from 'react-native-action-button';
import Search from 'react-native-vector-icons/EvilIcons';



import Request from './Request'
import Task from './Task'



class Main extends React.Component{
  constructor(props) {
    super(props)
    this.state = { page: 'request' }
  }
  render() {
    let displayedPage
    switch (this.state.page) {
      case 'request':
        displayedPage = <Request/>
        break
      case 'task':
        displayedPage = <Task />
        break
      default:
        displayedPage = <Request />
    }
    return (
      <View style={{flex: 1}}>
        <View style={{height: 60, backgroundColor: 'grey', paddingTop: 32, alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>Nominator</Text>
        </View>

        <View style={{flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 16}}>
          <TouchableOpacity onPress={()=> this.setState({page: 'request'})}
            style={[
              {width: '50%', paddingVertical: 8, alignItems: 'center', borderWidth: 1, borderTopLeftRadius: 8, borderBottomLeftRadius: 8},
              this.state.page === 'request' && {backgroundColor: 'black'}
              ]}
            >
              <Text style={[
                    {fontWeight: 'bold'},
                    this.state.page === 'request' && {color: '#ee7202'}
                  ]}
                >
                Request
              </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.setState({page: 'task'})}
            style={[
              {width: '50%', paddingVertical: 8, alignItems: 'center', borderWidth: 1, borderLeftWidth: 0, borderTopRightRadius: 8, borderBottomRightRadius: 8},
                this.state.page === 'task' && {backgroundColor: 'black'}
                ]}
              >
              <Text style={[
                    {fontWeight: 'bold'},
                    this.state.page === 'task' && {color: '#ee7202'}
                    ]}
                  >
                  Task
              </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{flex: 1}}>
          {displayedPage}
        </ScrollView>

      </View>
    )
  }
}

export default Main
