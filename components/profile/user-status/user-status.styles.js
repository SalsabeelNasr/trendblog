import { StyleSheet } from 'react-native';
export const userStatusStyles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column: {
        flex: 1,
        flexDirection: 'row',
        width: 33
    },
    starImage: {
        width: 50, height: 50
    },
    trashImage: {
        width: 25, height: 25, marginTop: 10
    },
    shareImage: {
        width: 25, height: 25, marginTop: 10
    },
    text: {
        marginTop: 15, paddingHorizontal: 8
    }
});