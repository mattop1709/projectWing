import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import Send from 'react-native-vector-icons/MaterialIcons';

const profiles = [
  {
    id: 1,
    name: 'Ali Muhd Wasil bin Ali Absar',
    div: 'Group Digital Centre'
  }, {
    id: 2,
    name: 'Mohammad Hafiz bin Burhan',
    div: 'Group Procurement'
  }
]

const ListSingle = ({name, div}) => (
  <TouchableOpacity onPress={()=>null} style={{paddingHorizontal: 16, paddingVertical: 16, borderBottomWidth: 1, borderColor: '#c4c4c4'}}>
    <Text style={{paddingBottom: 4, fontSize: 16, fontWeight: 'bold'}}>{name}</Text>
    <Text>{div}</Text>
  </TouchableOpacity>
)


class AddPerson extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 60,
            backgroundColor: "#f27178",
            paddingTop: 32,
            marginBottom: 16,
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 16 }}>Add Person</Text>
        </View>

        <View style={{flexDirection: 'row', borderWidth: 1, borderColor: "#c4c4c4", paddingVertical: 8, marginHorizontal: 16, borderRadius: 100, marginBottom: 16}}>
            <View style={{flex: 0.1, justifyContent: 'center', alignItems: 'flex-end'}}>
              <Send name="search" size={24} color="#000000" />
            </View>
            <TextInput
              style={{flex: 0.9, paddingHorizontal: 8, fontSize: 14, color: '#000000'}}
              placeholder="Type name here.."
              clearButtonMode="always"
              />
        </View>

        <ScrollView style={{flex: 1, borderTopWidth: 1, borderColor: '#f27178', marginHorizontal: 8}}>
          {profiles.map (listSingle =>
            <ListSingle
              name={listSingle.name}
              div={listSingle.div}
              />
          )}
        </ScrollView>

      </View>
    )
  }
}


export default AddPerson
