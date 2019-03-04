import React from 'react';
import TrendPost from '../components/home/trend-post/trend-post';
import { Badge } from 'react-native-elements'

import {
  ScrollView,
  View,
  Text
} from 'react-native';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ marginTop: 16 }}>
        {/* <View style={{ marginBottom: 25, flex: 1, flexDirection: 'row', backgroundColor: '#fbfbfb' }}>
          <Badge status="warning" value={<Text style={{ color: '#ffffff', marginVertical: 5, marginHorizontal: 5 }}>#accessories</Text>} />
          <Badge status="warning" value={<Text style={{ color: '#ffffff', paddingHorizontal: 5, paddingVertical: 5 }}>#Beauty</Text>} />
        </View> */}
        <ScrollView>
          <TrendPost />
          <TrendPost />
          <TrendPost />
          <TrendPost />
          <TrendPost />
          <TrendPost />
        </ScrollView>
      </View>
    );
  }
}
