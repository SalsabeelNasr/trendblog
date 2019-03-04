import React from 'react';
import { View } from 'react-native';
import Notifications from '../components/notifications/notifications';

export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };

  render() {
    return <View>
      <Notifications />
    </View>;
  }
}
