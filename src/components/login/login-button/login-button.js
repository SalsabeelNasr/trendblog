import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const bgColor = type => {
    switch (type) {
        case 'google':
            return '#1976D2';
        case 'facebook':
            return '#4D6FA9';
        default:
            return '#fff';
    }
};

const LoginButton = ({ children, type, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Box
            dir="row"
            align="center"
            shadow={1}
            bg={bgColor(type)}
            w="80%"
            self="center"
            p="2xs"
            radius="xs"
            mb="sm"
        >
            <Box mr="sm">
                <Box
                    h={60}
                    w={60}
                    radius="xs"
                    center
                    style={{ position: 'relative' }} >
                    {type === 'google' &&
                        <FontAwesome
                            name="google"
                            color="#fff"
                            size={30}
                            style={{ marginLeft: 5 }}
                        />}
                    {type === 'facebook' && (
                        <FontAwesome
                            name="facebook"
                            color="#fff"
                            size={30}
                            style={{ marginLeft: 5 }}
                        />
                    )}
                </Box>
            </Box>
            <Box>
                <Text size="md" color="#fff">
                    {children}
                </Text>
            </Box>
        </Box>
    </TouchableOpacity>
);

export default LoginButton;