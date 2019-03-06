import React from 'react';
import { Image, View, Text } from 'react-native';
import { userProfileHeaderStyles } from './user-profile-header.styles';

export default class UserProfileHeader extends React.Component {
    render() {
        return (
            <View style={userProfileHeaderStyles.container}>
                <View style={userProfileHeaderStyles.titleContainer}>
                    <View style={userProfileHeaderStyles.titleIconContainer}>
                        <Image
                            source={{ uri: 'https://nobelexplorers.com/wp-content/uploads/2018/08/people.png' }}
                            style={{ width: 70, height: 70 }}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={userProfileHeaderStyles.titleTextContainer}>
                        <Image
                            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/block/32/box_edit-512.png' }}
                            style={{ width: 12, height: 12, opacity: 0.4, paddingHorizontal: 5, alignSelf: 'flex-end' }}
                        />
                        <Text style={userProfileHeaderStyles.usernameText} numberOfLines={1}>
                            @Username
                        </Text>
                        <Text style={userProfileHeaderStyles.joinedText}>Joined 10 september 2018</Text>

                        <Text style={userProfileHeaderStyles.bioText}>
                            my bio is short but my fame is great. dont underestimate me bitch
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
