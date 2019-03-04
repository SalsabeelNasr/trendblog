import React from 'react';
import { View, Image, Text } from 'react-native';
export default class UploadScreen extends React.Component {
  static navigationOptions = {
    title: 'Upload',
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <Image
          source={{ uri: 'http://2.bp.blogspot.com/-V31y2Ef4Ad0/VZservQf70I/AAAAAAAAdu8/ErI--hbXwfE/s1600/OpenCamera1.png' }}
          style={{ width: 100, height: 100, marginTop: 50 }}
          resizeMode="cover"></Image>
        <Text>Camera</Text>
        <Image
          source={{ uri: 'http://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Photo-icon.png' }}
          style={{ width: 100, height: 100, marginTop: 50 }}
          resizeMode="cover"></Image>
        <Text>Gallery</Text>
      </View >
    );
  }
} 
