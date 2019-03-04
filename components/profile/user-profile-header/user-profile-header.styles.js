import { StyleSheet } from 'react-native';
export const userProfileHeaderStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fbfbfb'
    },
    titleContainer: {
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
    },
    titleIconContainer: {
        flex: 1,
        paddingTop: 2,
    },
    titleTextContainer: {
        flex: 2,
        paddingTop: 2,
    },
    usernameText: {
        fontWeight: '600',
        fontSize: 18
    },
    bioText: {
        paddingVertical: 8,
        color: '#a39f9f',
        fontSize: 14,
        backgroundColor: 'transparent',
    },
    joinedText: {
        paddingTop: 3,
        marginRight: 3,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 10,
    }
});