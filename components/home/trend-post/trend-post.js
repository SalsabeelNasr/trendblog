import React from 'react';
import { trendPostStyles } from './trend-post.styles';
import { Image, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
export default class TrendPost extends React.Component {
    render() {
        return (
            <View style={trendPostStyles.postContainer}>
                <Image
                    source={{ uri: 'https://www.rd.com/wp-content/uploads/2016/04/04-fashion-upgrades-classic-coats.jpg' }}
                    style={{ height: 250 }}
                    resizeMode="cover"
                />
                <View style={trendPostStyles.actionsContainer}>
                    <View style={trendPostStyles.actionsColumn}>
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-share-outline' : 'md-share'} size={22} style={trendPostStyles.action} />
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-chatbubbles-outline' : 'md-chatbubbles'} size={22} style={trendPostStyles.action} />
                        <Ionicons name={Platform.OS === 'ios' ? 'ios-trash-outline' : 'md-trash'} size={22} style={trendPostStyles.trash} />
                    </View>
                    <View style={trendPostStyles.ratingColumn}>
                        <Image
                            source={{ uri: 'https://dogsledding.is/wp-content/uploads/2018/09/google.gif' }}
                            style={trendPostStyles.rating}
                            resizeMode="cover"
                        />
                    </View>
                </View>
                <View style={trendPostStyles.caption}>
                    <Text>I am sexy and i know it bla bla bla. I am sexy and i know it bla bla bla. I am sexy and i know it bla bla bla</Text>
                </View>
            </View>
        );
    }
}