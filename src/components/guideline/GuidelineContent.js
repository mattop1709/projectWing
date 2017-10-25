import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Check from 'react-native-vector-icons/EvilIcons'

const contents = [
  {
    header: 'Applicability',
    data: [
      {
        text: 'Some of these travel mishaps can be avoided and some of them are just a part of traveling. You simply cannot plan for everything. However, keeping a few important things in mind will make your travels much easier. So, in no particular order, here are my 25 best travel tips:'
      }, {
        text: 'Some of these travel mishaps can be avoided and some of them are just a part of traveling. You simply cannot plan for everything. However, keeping a few important things in mind will make your travels much easier. So, in no particular order, here are my 25 best travel tips:'
      }, {
        text: 'Some of these travel mishaps can be avoided and some of them are just a part of traveling. You simply cannot plan for everything. However, keeping a few important things in mind will make your travels much easier. So, in no particular order, here are my 25 best travel tips:'
      }
    ]
  },
]


const GuidelineSingle = ({header, data}) => (
<View style={{paddingHorizontal: 16}}>
  <Text style={{fontSize: 16, fontWeight: 'bold', paddingBottom: 24}}>{header}</Text>
    {data.map ( guidelineList =>
      <GuidelineList text={guidelineList.text} />
    )}
</View>
)

const GuidelineList = ({text}) => (
<View style={{flexDirection: 'row', paddingBottom: 24}}>
  <Check style={{paddingRight: 8, paddingTop: 2}} name="check" size={32} color="#c4c4c4" />
  <View style={{flex: 1}}>
    <Text style={{fontSize: 16, paddingBottom: 8, lineHeight: 24}}>{text}</Text>
  </View>
</View>
)


class GuidelineContent extends React.Component{
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
          <Text style={{ fontSize: 16 }}>Guideline</Text>
        </View>

        <ScrollView style={{flex: 1}}>
          {contents.map ( content =>
            <GuidelineSingle
              header={content.header}
              data={content.data}
              />
            )}
        </ScrollView>

      </View>
    )
  }
}

export default GuidelineContent
