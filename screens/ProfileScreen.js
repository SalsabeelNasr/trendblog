import React from 'react';
import UserProfileHeader from '../components/profile/user-profile-header/user-profile-header';
import { View } from 'react-native';
import UserStatus from '../components/profile/user-status/user-status';
import UserMenu from '../components/profile/user-menu/user-menu';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return <View>
      <UserProfileHeader />
      <UserStatus />
      <UserMenu></UserMenu>
    </View>;
  }
}
