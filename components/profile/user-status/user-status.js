import React from 'react';
import { Image, View, Text } from 'react-native';
import { userStatusStyles } from './user-status.styles';

export default class UserStatus extends React.Component {
    render() {
        return (
            <View style={userStatusStyles.container}>
                <View style={userStatusStyles.column}>
                    <Image
                        source={{ uri: 'https://www.shareicon.net/download/2016/12/05/861850_star_512x512.png' }}
                        style={userStatusStyles.starImage}
                        resizeMode="cover"
                    />
                    <Text style={userStatusStyles.text}>12.3K</Text>
                </View>
                <View style={userStatusStyles.column}>
                    <Image
                        source={{ uri: 'http://www.icon100.com/up/4081/512/trash-bin-open.png' }}
                        style={userStatusStyles.trashImage}
                        resizeMode="cover"
                    />
                    <Text style={userStatusStyles.text}>55.3K</Text>
                </View>
                <View style={userStatusStyles.column}>
                    <Image
                        source={{ uri: 'https://www.shareicon.net/data/48x48/2016/08/18/809311_multimedia_512x512.png' }}
                        style={userStatusStyles.shareImage}
                        resizeMode="cover"
                    />
                    <Text style={userStatusStyles.text}>35.3K</Text>
                </View>

            </View >
        );
    }
}
