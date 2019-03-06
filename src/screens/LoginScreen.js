
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import LoginButton from '../components/login/login-button/login-button';
import { FacebookApi } from '../api/login/facebook';
import { GoogleApi } from '../api/login/google';


export default class LoginScreen extends Component {

    static navigationOptions = {
        header: null,
    };
    componentDidMount() {
    }

    onGooglePress = async () => {
        try {
            const token = await GoogleApi.loginAsync();
            await this.props.authStore.login(token, 'GOOGLE');
            // await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('App');
        } catch (error) {
            console.log('error', error);
        }
    };

    onFacebookPress = async () => {
        try {
            const token = await FacebookApi.loginAsync();
            console.log('token', token);
        } catch (error) {
            console.log('error', error);
        }
    };

    render() {
        // console.log('props', this.props);
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', marginTop: 20 }}>
                <LoginButton onPress={this.onGooglePress} type="google">
                    <Text>Login with Google</Text>
                </LoginButton>
                <LoginButton onPress={this.onFacebookPress} type="facebook">
                    <Text>Login with Facebook</Text>
                </LoginButton>
            </View>
        );
    }
} 