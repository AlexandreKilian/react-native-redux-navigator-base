import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

export default class Page extends Component{

    render(){
        const {name} = this.props;
        console.log(name)
        return (
            <View style={styles.container}>
                <Text>{name}</Text>
            </View>
            )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
