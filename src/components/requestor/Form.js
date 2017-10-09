import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Switch, KeyboardAvoidingView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
// import SmartPicker from 'react-native-smart-picker';
import DatePicker from 'react-native-datepicker';


const inputs =
[
  {
    question: 'Destination',
    text: 'e.g. Port Dickson, Seremban'
  }, {
    question: 'Number of Pax',
    text: 'How many people will travel along..'
  }
]

// const calendars =
// [
//   {
//     text: 'Start Date'
//   }, {
//     text: 'End Date'
//   }
// ]

const monies =
[
  {
    question: 'Budget',
    currency: 'RM',
    text: 'State the budget..'
  }, {
    question: 'Cost',
    currency: 'RM',
    text: 'State the cost..'
  }
]


const InputSingle = ({question, text}) =>
<View style={{paddingBottom: 24}}>
  <Text style={{fontSize: 16, paddingBottom: 12, color: '#ee7202'}}>{question}</Text>
  <TextInput
    style={{fontSize: 16, borderColor: '#c4c4c4', borderWidth: 1, paddingBottom: 12, paddingVertical: 10, paddingHorizontal: 8}}
    placeholder= {text}
    />
</View>


// const CalendarSingle = ({text}) =>
// <View>
//   <View>
//     <Text style={{fontSize: 16, paddingBottom: 12}}>Date</Text>
//   </View>
//   <DatePicker
//       style={{width: '100%'}}
//       date={this.state.date}
//       mode="date"
//       placeholder="select date"
//       format="YYYY-MM-DD"
//       minDate="2010-01-01"
//       maxDate="2099-12-31"
//       confirmBtnText="Confirm"
//       cancelBtnText="Cancel"
//       onDateChange={(date) => {this.setState({date: date})}}
//     />
// </View>


const MoneySingle = ({question, currency, text}) =>
<View style={{paddingBottom: 24}}>
  <Text style={{paddingBottom: 12, fontSize: 16, color: '#ee7202'}}>{question}</Text>
  <View style={{flexDirection: 'row', borderColor: '#c4c4c4', borderWidth: 1, }}>
    <View style={{width: '15%', justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: '#c4c4c4', paddingVertical: 10, backgroundColor: '#c4c4c4'}}>
      <Text style={{fontSize: 16, color: '#f9f9ff'}}>{currency}</Text>
    </View>
    <View style={{width: '75%', paddingVertical: 10, paddingLeft: 8}}>
      <TextInput
        style={{fontSize: 16}}
        placeholder={text}
        keyboardType="numeric"
        />
    </View>
  </View>
</View>



class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {date:"2017-01-01"}
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>

        <View style={{height: 60, backgroundColor: 'grey', paddingTop: 32, alignItems: 'center'}}>
          <Text style={{fontSize: 16}}>Application Form</Text>
        </View>

        <ScrollView>
          <View style={{paddingTop: 32, paddingHorizontal: 24}}>

            {inputs.map (inputSingle =>
              <InputSingle
                question={inputSingle.question}
                text={inputSingle.text}
                />
              )}

                <View>
                  <Text style={{fontSize: 16, paddingBottom: 12, color: '#ee7202'}}>Start Travel</Text>
                </View>
                <DatePicker
                    style={{width: '100%'}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2010-01-01"
                    maxDate="2099-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => {this.setState({date: date})}}
                  />

                  <View style={{paddingTop: 24}}>
                    <Text style={{fontSize: 16, paddingBottom: 12, color: '#ee7202'}}>End Travel</Text>
                  </View>
                  <DatePicker
                      style={{width: '100%'}}
                      date={this.state.date}
                      mode="date"
                      placeholder="select date"
                      format="YYYY-MM-DD"
                      minDate="2010-01-01"
                      maxDate="2099-12-31"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      onDateChange={(date) => {this.setState({date: date})}}
                    />


                <View style={{paddingVertical: 24}}>
                  <Text style={{paddingBottom: 12, fontSize: 16, color: '#ee7202'}}>
                    Travel Type
                  </Text>
                  <ModalDropdown
                    options = {['Sales Visit', 'Meeting', 'Conference', 'Site Visit', ]}
                    textStyle={{fontSize: 16}}
                    dropdownTextStyle={{fontSize: 16}}
                    dropdownTextHighlightStyle={{color: 'blue'}}
                    dropdownStyle={{width: '85%', height: '30%'}}
                    style={{borderWidth: 1, borderColor: '#c4c4c4', paddingVertical: 10, paddingLeft: 8}}
                    />
                </View>

                <View style={{paddingBottom: 24}}>
                  <Text style={{paddingBottom: 12, fontSize: 16, color: '#ee7202'}}>
                    Division
                  </Text>
                  <ModalDropdown
                    options = {['Group Finance', 'Group Legal Secretarial and Internal Property', 'Group Procurement']}
                    textStyle={{fontSize: 16}}
                    dropdownTextStyle={{fontSize: 16}}
                    dropdownTextHighlightStyle={{color: 'blue'}}
                    dropdownStyle={{width: '85%', height: '30%'}}
                    style={{borderWidth: 1, borderColor: '#c4c4c4', paddingVertical: 10, paddingLeft: 8}}
                    />
                </View>

                <View style={{paddingBottom: 24}}>
                  <Text style={{paddingBottom: 12, fontSize: 16, color: '#ee7202'}}>
                    Cost Centre
                  </Text>
                  <ModalDropdown
                    options = {['Group Finance', 'Group Legal Secretarial and Internal Property', 'Group Procurement']}
                    textStyle={{fontSize: 16}}
                    dropdownTextStyle={{fontSize: 16}}
                    dropdownTextHighlightStyle={{color: 'blue'}}
                    dropdownStyle={{width: '85%', height: '50%'}}
                    style={{borderWidth: 1, borderColor: '#c4c4c4', paddingVertical: 10, paddingLeft: 8}}
                    />
                </View>

                <View style={{paddingBottom: 24}}>
                  <Text style={{paddingBottom: 12, fontSize: 16, color: '#ee7202'}}>
                    Cost Category
                  </Text>
                  <ModalDropdown
                    options = {['Group Finance', 'Group Legal Secretarial and Internal Property', 'Group Procurement']}
                    textStyle={{fontSize: 16}}
                    dropdownTextStyle={{fontSize: 16}}
                    dropdownTextHighlightStyle={{color: 'blue'}}
                    dropdownStyle={{width: '85%', height: '30%'}}
                    style={{borderWidth: 1, borderColor: '#c4c4c4', paddingVertical: 10, paddingLeft: 8}}
                    />
                </View>


            {monies.map (moneySingle =>
              <MoneySingle
                question={moneySingle.question}
                currency={moneySingle.currency}
                text={moneySingle.text}
                />
              )}


            <View style={{flexDirection: 'row', paddingTop: 12, paddingBottom: 48}}>
              <View style={{flex: 1, width: '85%', justifyContent: 'center'}}>
                <Text style={{paddingBottom: 12, fontSize: 16}}>EEIU</Text>
              </View>
              <Switch
                value={true}
                onValueChange={(val) => console.log(val)}
                disabled={false}
                activeText={'Yay'}
                inActiveText={'Nay'}
                backgroundActive={'green'}
                backgroundInactive={'grey'}
              />
            </View>

            <TouchableOpacity onPress={() => Alert.alert(
              'Your application has submitted successfully',
              'Ref ID: A9898SAD'
              )}>
              <View style={{backgroundColor: '#ee7202', paddingVertical: 16, alignItems: 'center', marginBottom: 40, borderRadius: 100}}>
                <Text style={{fontSize: 16}}>Submit</Text>
              </View>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default Form
