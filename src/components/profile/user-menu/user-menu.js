import React from 'react';
import { View, Text } from 'react-native';
import { UserMenuStyles } from './user-menu.styles';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default class UserMenu extends React.Component {
    render() {
        return (
            <View style={UserMenuStyles.container}>
                <Touchable
                    style={UserMenuStyles.option}
                    background={Touchable.Ripple('#ccc', false)}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={UserMenuStyles.optionIconContainer}>
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-images' : 'md-images'} size={22} color="#ccc" />
                        </View>
                        <View style={UserMenuStyles.optionTextContainer}>
                            <Text style={UserMenuStyles.optionText}>
                                My uploads
                             </Text>
                        </View>
                    </View>
                </Touchable>
                <Touchable
                    style={UserMenuStyles.option}
                    background={Touchable.Ripple('#ccc', false)}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={UserMenuStyles.optionIconContainer}>
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-switch' : 'md-switch'} size={22} color="#ccc" />
                        </View>
                        <View style={UserMenuStyles.optionTextContainer}>
                            <Text style={UserMenuStyles.optionText}>
                                Switch to a brand account
                             </Text>
                        </View>
                    </View>
                </Touchable>
                <Touchable
                    style={UserMenuStyles.option}
                    background={Touchable.Ripple('#ccc', false)}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={UserMenuStyles.optionIconContainer}>
                            <Ionicons name={Platform.OS === 'ios' ? 'ios-log-out' : 'md-log-out'} size={22} color="#ccc" />
                        </View>
                        <View style={UserMenuStyles.optionTextContainer}>
                            <Text style={UserMenuStyles.optionText}>
                                Log out
                             </Text>
                        </View>
                    </View>
                </Touchable>
            </View>

        );
    }
}
