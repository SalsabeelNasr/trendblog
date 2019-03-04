import React from 'react';
import { Image, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import { userNotificationsStyles } from './user-notifications.styles';

export default class UserNotifications extends React.Component {
    render() {
        return (
            <View>
                <Text style={userNotificationsStyles.optionsTitleText}>
                </Text>
                <Touchable
                    style={userNotificationsStyles.option}
                    background={Touchable.Ripple('#ccc', false)}
                    onPress={this._handlePress}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={userNotificationsStyles.optionIconContainer}>
                            <Image
                                source={{ uri: 'https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096280_960_720.png' }}
                                resizeMode="contain"
                                fadeDuration={0}
                                style={{ width: 20, height: 20, marginTop: 1 }}
                            />
                        </View>
                        <View style={userNotificationsStyles.optionTextContainer}>
                            <Text style={userNotificationsStyles.optionText}>
                                someone has rated your post ! wow
                              </Text>
                        </View>
                    </View>
                </Touchable>

                <Touchable
                    background={Touchable.Ripple('#ccc', false)}
                    style={userNotificationsStyles.option}
                    onPress={this._handlePress}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={userNotificationsStyles.optionIconContainer}>
                            <Image
                                source={{ uri: 'https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096280_960_720.png' }}
                                fadeDuration={0}
                                style={{ width: 20, height: 20 }}
                            />
                        </View>
                        <View style={userNotificationsStyles.optionTextContainer}>
                            <Text style={userNotificationsStyles.optionText}>
                                Oh you got trashed :(
              </Text>
                        </View>
                    </View>
                </Touchable>

                <Touchable
                    style={userNotificationsStyles.option}
                    background={Touchable.Ripple('#ccc', false)}
                    onPress={this._handlePress}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={userNotificationsStyles.optionIconContainer}>
                            <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
                        </View>
                        <View style={userNotificationsStyles.optionTextContainer}>
                            <Text style={userNotificationsStyles.optionText}>
                                Ask trendblog team a question
              </Text>
                        </View>
                    </View>
                </Touchable>
            </View>
        );
    }

    _handlePress = () => {
        WebBrowser.openBrowserAsync('https://google.com');
    };
}
