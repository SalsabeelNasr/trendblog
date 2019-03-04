import { StyleSheet } from 'react-native';
export const trendPostStyles = StyleSheet.create({
    postContainer: {
        marginTop: 10,
        marginBottom: 10
    },
    actionsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    actionsColumn: {
        flex: 0.33,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    ratingColumn: {
        flex: 0.66,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    rating: {
        height: 22
        , width: 130
    },
    action: {
        color: '#a39f9f',
    },
    trash: {
        color: '#a39f9f',
        marginTop: -2
    },
    caption: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 14,
        backgroundColor: 'transparent',
        color: '#a39f9f'
    }
});

