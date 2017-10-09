import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const types =
[
  {
    name1: 'Submit',
    name2: 'Check'
  }, {
    name1: 'Nominate',
    name2: 'Endorse'
  }, {
    name1: 'Approve',
    name2: 'Guideline'
  }
]


const TypeSingle = ({name1, name2}) =>
<View style={{flexDirection: 'row'}}>
  <View style={{width: '50%', height: 120, borderColor: '#f9f9ff', borderBottomWidth: 1, borderRightWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity onPress={()=>null}>
      <Text style={{fontSize: 16}}>{name1}</Text>
    </TouchableOpacity>
  </View>
  <View style={{width: '50%', height: 120, borderColor: '#f9f9ff', borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity onPress={()=>null}>
      <Text style={{fontSize: 16}}>{name2}</Text>
    </TouchableOpacity>
  </View>
</View>



class Home extends React.Component{
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#73d6f7'}}>

        <View style={{alignItems: 'flex-end', paddingTop: 32, paddingBottom: 16, paddingRight: 24, backgroundColor: '#c4c4c4'}}>
          <TouchableOpacity onPress={()=> null}>
            <Icon name="lock-open" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Text style={{fontSize: 24}}>What do you want to do?</Text>
          </View>
          <View style={{flex: 0.6, justifyContent: 'flex-start'}}>
            {types.map (typeSingle =>
              <TypeSingle
                name1={typeSingle.name1}
                name2={typeSingle.name2}
                />
              )}
          </View>
        </View>

      </View>
    )
  }
}

export default Home
