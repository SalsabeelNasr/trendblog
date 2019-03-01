import React from 'react';
import UserProfileHeader from '../components/user-profile-header/user-profile-header';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return <UserProfileHeader />;
  }
}
