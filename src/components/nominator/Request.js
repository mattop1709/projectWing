import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const applications =
[
  {
   number: '76VD-TG7Q',
   name: 'Mohammad Hafiz bin Burhan',
   travelType: 'Site Survey'
   },
   {
     number: 'F54Y-82V5',
     name: 'Ali Muhd Wasil bin Ali Absar',
     travelType: 'Berjimba Berdansa Berdosa'
   },
   {
     number: 'F54Y-82V5',
     name: 'Mohammad Saifuddin Othman bin Kamal',
     travelType: 'Berjimba Berdansa Berdosa'
   },
   {
     number: 'F54Y-82V5',
     name: 'Nur Sazaliza Hiryiani Binti Zainol Abidin',
     travelType: 'Mentelaah Ilmu untuk Cukup Bekalan'
   },
   {
     number: 'F54Y-82V5',
     name: 'Nur Sazaliza Hiryiani Binti Zainol Abidin',
     travelType: 'Mentelaah Ilmu untuk Cukup Bekalan'
   },
]

const ApplicationSingle = ({number, name, travelType}) =>
<TouchableOpacity LongPress={()=>null} style={{flex: 0.2, width: '95%', paddingHorizontal: 8, paddingVertical: 16, marginBottom: 16, justifyContent: 'flex-start', backgroundColor: '#c4c4c4'}}>
  <View style={{flexDirection: 'row'}}>
    <View style={{width: '20%'}}>
      <Text style={{fontSize: 16, paddingBottom: 8}}>Ref ID</Text>
      <Text style={{fontSize: 16, paddingBottom: 8}}>Name</Text>
      <Text style={{fontSize: 16, paddingBottom: 16}}>Type</Text>
    </View>
    <View style={{width: '80%'}}>
        <Text style={{fontSize: 16, paddingBottom: 8, color: 'white'}}>{number}</Text>
        <Text style={{fontSize: 16, paddingBottom: 8, color: 'white'}}>{name}</Text>
        <Text style={{fontSize: 16, paddingBottom: 16, color: 'white'}}>{travelType}</Text>
    </View>
  </View>
  <View style={{backgroundColor: 'black', paddingVertical: 16, alignItems: 'center'}}>
    <Text style={{color:'#ffffff'}}>Tracking Progress Diagram</Text>
  </View>
</TouchableOpacity>


class Request extends React.Component{
  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {applications.map (applicationSingle =>
        <ApplicationSingle
          number={applicationSingle.number}
          name={applicationSingle.name}
          travelType={applicationSingle.travelType}
          />
        )}
      </View>
    )
  }
}

export default Request
