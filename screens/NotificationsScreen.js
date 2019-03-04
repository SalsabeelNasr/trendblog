import React from 'react';
import { View } from 'react-native';
import UserNotifications from '../components/user-notifications/user-notifications';

export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };

  render() {
    return <View>
      <UserNotifications />
    </View>;
  }
}
