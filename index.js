/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './src/store/Store';

import App from './src/containers/app'

export default class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoadingStore: true,
        };
    }

    componentWillMount() {
        this.setState({
            store: configureStore(() => {
                this.setState({ isLoadingStore: false });
            }),
        });
    }
    render() {
        if (this.state.isLoadingStore) {
            return (<View style={{ flex: 1, flexDirection: 'column' }}><Text>Loading Store ...</Text></View>);
        }
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('MyApp', () => AppContainer);
