import React from 'react';
import { Image, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import { notificationsStyles } from './notifications.styles';

export default class Notifications extends React.Component {
    render() {
        return (
            <View>
                <Text style={notificationsStyles.optionsTitleText}>
                </Text>
                <Touchable
                    style={notificationsStyles.option}
                    background={Touchable.Ripple('#ccc', false)}
                    onPress={this._handlePress}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={notificationsStyles.optionIconContainer}>
                            <Image
                                source={{ uri: 'https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096280_960_720.png' }}
                                resizeMode="contain"
                                fadeDuration={0}
                                style={{ width: 20, height: 20, marginTop: 1 }}
                            />
                        </View>
                        <View style={notificationsStyles.optionTextContainer}>
                            <Text style={notificationsStyles.optionText}>
                                someone has rated your post ! wow
                              </Text>
                        </View>
                    </View>
                </Touchable>

                <Touchable
                    background={Touchable.Ripple('#ccc', false)}
                    style={notificationsStyles.option}
                    onPress={this._handlePress}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={notificationsStyles.optionIconContainer}>
                            <Image
                                source={{ uri: 'https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096280_960_720.png' }}
                                fadeDuration={0}
                                style={{ width: 20, height: 20 }}
                            />
                        </View>
                        <View style={notificationsStyles.optionTextContainer}>
                            <Text style={notificationsStyles.optionText}>
                                Oh you got trashed :(
              </Text>
                        </View>
                    </View>
                </Touchable>

                <Touchable
                    style={notificationsStyles.option}
                    background={Touchable.Ripple('#ccc', false)}
                    onPress={this._handlePress}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={notificationsStyles.optionIconContainer}>
                            <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
                        </View>
                        <View style={notificationsStyles.optionTextContainer}>
                            <Text style={notificationsStyles.optionText}>
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
