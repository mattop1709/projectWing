import React from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import Emoji from 'react-native-vector-icons/Entypo';
import Send from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/EvilIcons'

import TrackingBar from '../tab/TrackingBar'

class StatusForm extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 60,
            backgroundColor: "#f27178",
            paddingTop: 32,
            marginBottom: 24,
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 16 }}>Request Form</Text>
        </View>

        <TrackingBar />

        <ScrollView style={{ flex: 1, paddingHorizontal: 8 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 40,
            }}
          >
            <View style={{backgroundColor: "#f27178", paddingHorizontal: 16, paddingVertical: 16, marginLeft: 8 }}>
              <Text
                style={{
                  paddingHorizontal: 8,
                  fontSize: 18,
                  fontWeight: "bold"
                }}
              >
                Logo
              </Text>
            </View>
            <View style={{paddingHorizontal: 8, justifyContent: 'center'}}>
              <Text style={{fontSize: 12}}>XCSD-12BG</Text>
              <Text style={{fontSize: 12}}>12 Sept 2017</Text>
              <Text style={{fontSize: 12}}>9.30am</Text>
            </View>
          </View>

          <TravelDetails />
          <ProfileDetails />
          <ApproverDetails />
          <CostDetails />

          <View>

              <View style={{flexDirection: 'row', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#c4c4c4', paddingVertical: 8, justifyContent: 'center'}}>
                <Icon name="comment" size={24} color="#000000" />
                <View style={{justifyContent: 'center'}}>
                  <Text>Comment</Text>
                </View>
              </View>

              <TouchableOpacity onPress={()=> null} style={{flex: 1, paddingVertical: 8, paddingHorizontal: 16}}>
                <Text style={{fontWeight: 'bold', paddingBottom: 2}}>Hasniza binti Mohamed</Text>
                <Text>Hafiz, I did not expect that you can be this good! Keep up the good work!</Text>
              </TouchableOpacity>


            <View behavior="padding" style={{flexDirection: 'row', borderTopWidth: 1, borderColor: "#f9f9f9", paddingVertical: 8, justifyContent: 'space-around'}}>
                <TouchableOpacity onPress={()=> null} style={{flex: 0.9}}>
                  <Text style={{padding: 8, fontSize: 14, borderWidth: 1, borderRadius: 8, color: '#c4c4c4'}}>
                    Type your comment here..
                  </Text>
                  </TouchableOpacity>

              <TouchableOpacity style={{justifyContent: 'center'}}>

                  <Send name="send" size={24} color="#000000" />

              </TouchableOpacity>
            </View>
          </View>

          </ScrollView>
      </View>
    )
  }
}

export default StatusForm


const TravelDetails = () =>
<View style={{ paddingHorizontal: 8, paddingBottom: 40 }}>
<Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
  Travel Details
</Text>
  <Text
    style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
  >
    Seremban, Negeri Sembilan
  </Text>
  <Text style={{ fontSize: 14, paddingBottom: 4 }}>17 Sept to 18 Oct 2016</Text>
  <Text style={{ fontSize: 14, paddingBottom: 4 }}>Site Survey</Text>
  <Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
    Description
  </Text>
  <Text style={{ fontSize: 12, lineHeight: 18, textAlign: 'justify' }}>
    Kan ku kenang semua suara mu, oh sayang. Janganlah dikau pergi
    meninggalkan aku keseorangan di sini. Betapa kejamnya hatimu,
    sanggup meninggalkan ku seorang diri di sini.
  </Text>
</View>


const ProfileDetails = () =>
<View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
<Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
  Profile Details
</Text>
  <Text
    style={{ fontSize: 20, paddingBottom: 4, fontWeight: "bold" }}
  >
    Mohammad Hafiz bin Burhanuddin Helmi
  </Text>
  <Text style={{ fontSize: 12, paddingBottom: 16 }}>
    Group Digital Centre
  </Text>
  <Text style={{ fontSize: 12, paddingBottom: 8, color: "#c4c4c4" }}>
    Additional Travellers
  </Text>
  <Text
    style={{
      paddingLeft: 8,
      fontSize: 14,
      paddingBottom: 4,
      fontWeight: "bold"
    }}
  >
    Ali Muhd Wasil bin Ali Absar
  </Text>
  <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
    Group Digital Centre
  </Text>
  <Text
    style={{
      paddingLeft: 8,
      fontSize: 14,
      paddingBottom: 4,
      fontWeight: "bold"
    }}
  >
    Engku Fariez bin Engku Azahan
  </Text>
  <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
    Group Digital Centre
  </Text>
  <Text
    style={{
      paddingLeft: 8,
      fontSize: 14,
      paddingBottom: 4,
      fontWeight: "bold"
    }}
  >
    Khairold Safri bin Ibrahim
  </Text>
  <Text style={{ paddingLeft: 8, fontSize: 12, paddingBottom: 12 }}>
    Group Digital Centre
  </Text>
</View>

const ApproverDetails = () =>
<View style={{ paddingHorizontal: 8, paddingBottom: 32 }}>
    <Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
      Approvers Details
    </Text>
    <Text
      style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
    >
      Hasniza binti Mohamed
    </Text>
    <Text style={{ fontSize: 12, paddingBottom: 12 }}>Nominator</Text>
    <Text
      style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
    >
      Ahmad Azhar bin Yahya
    </Text>
    <Text style={{ fontSize: 12, paddingBottom: 12 }}>Endorser</Text>
    <Text
      style={{ fontSize: 14, paddingBottom: 4, fontWeight: "bold" }}
    >
      Dato Sri Mohammed Shazalli bin Ramly
    </Text>
    <Text style={{ fontSize: 12, paddingBottom: 12 }}>Approver</Text>
  </View>


const CostDetails = () =>
<View style={{paddingBottom: 40, paddingHorizontal: 8}}>
<Text style={{ fontSize: 12, paddingBottom: 8, color: "#f27178" }}>
  Cost Details
</Text>
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 8,
      borderBottomWidth: 0.5,
      borderColor: "#c4c4c4"
    }}
  >
    <Text style={{ color: "grey" }}>
      Budget (BMCE02)
    </Text>
    <Text style={{ paddingRight: 8, color: "grey" }}>RM43,000.00</Text>
  </View>
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 8
    }}
  >
    <Text style={{ fontSize: 18 }}>TOTAL</Text>
    <Text style={{ paddingRight: 8, fontSize: 18, fontWeight: "bold" }}>
      RM43,000.00
    </Text>
  </View>
</View>
