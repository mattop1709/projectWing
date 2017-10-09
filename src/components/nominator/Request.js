import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const applications =
[
  {
   number: '76VD-TG7Q',
   status: 'Pending Nomination',
   name: 'Mohammad Hafiz bin Burhan',
   travelType: 'Site Survey'
   },
   {
     number: 'F54Y-82V5',
     status: 'Pending Approval',
     name: 'Ali Muhd Wasil bin Ali Absar',
     travelType: 'Berjimba Berdansa Berdosa'
   },
   {
     number: 'F54Y-82V5',
     status: 'Pending Approval',
     name: 'Mohammad Saifuddin Othman bin Kamal',
     travelType: 'Berjimba Berdansa Berdosa'
   },
   {
     number: 'F54Y-82V5',
     status: 'Pending Approval',
     name: 'Nur Sazaliza Hiryiani Binti Zainol Abidin',
     travelType: 'Mentelaah Ilmu untuk Cukup Bekalan'
   },
   {
     number: 'F54Y-82V5',
     status: 'Pending Approval',
     name: 'Nur Sazaliza Hiryiani Binti Zainol Abidin',
     travelType: 'Mentelaah Ilmu untuk Cukup Bekalan'
   },
]

const ApplicationSingle = ({number, status, name, travelType}) =>
<View  style={{flexDirection: 'row', flex: 0.2, width: '95%', paddingHorizontal: 8, paddingVertical: 16, marginBottom: 16, justifyContent: 'flex-start', backgroundColor: '#73d6f7'}}>
  <View style={{width: '20%'}}>
    <Text style={{fontSize: 16, paddingBottom: 8}}>Ref ID</Text>
    <Text style={{fontSize: 16, paddingBottom: 8}}>Status</Text>
    <Text style={{fontSize: 16, paddingBottom: 8}}>Name</Text>
    <Text style={{fontSize: 16, paddingBottom: 8}}>Type</Text>
  </View>
  <TouchableOpacity LongPress={()=> null} style={{width: '80%'}}>
      <Text style={{fontSize: 16, paddingBottom: 8, color: 'white'}}>{number}</Text>
      <Text style={{fontSize: 16, paddingBottom: 8, color: 'white'}}>{status}</Text>
      <Text style={{fontSize: 16, paddingBottom: 8, color: 'white'}}>{name}</Text>
      <Text style={{fontSize: 16, paddingBottom: 8, color: 'white'}}>{travelType}</Text>
  </TouchableOpacity>
</View>


class Request extends React.Component{
  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {applications.map (applicationSingle =>
        <ApplicationSingle
          number={applicationSingle.number}
          status={applicationSingle.status}
          name={applicationSingle.name}
          travelType={applicationSingle.travelType}
          />
        )}
      </View>
    )
  }
}

export default Request
