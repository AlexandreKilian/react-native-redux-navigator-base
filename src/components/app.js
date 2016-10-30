import React, { Component } from 'react';
import {
    NavigationExperimental,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const {
    CardStack: NavigationCardStack,
    Card: NavigationCard,
    Header: NavigationHeader
} = NavigationExperimental


import Page from '../containers/page'

export default class App extends Component{

    render(){
        let { navigationState, backAction } = this.props

        return (
            <NavigationCardStack
                navigationState={navigationState}
                onNavigateBack={backAction}
                style={styles.container}
                direction={navigationState.routes[navigationState.index].key === 'Second' ?
                    'vertical' : 'horizontal'
                }
                renderHeader={props => (
                    <NavigationHeader
                        {...props}
                        onNavigateBack={backAction}
                        renderTitleComponent={props => {
                            const title = props.scene.route.title
                            return <NavigationHeader.Title>{title}</NavigationHeader.Title>
                        }}
                        />
                )}
                renderScene={this._renderScene}
                />
        )
    }
    _renderScene({scene}) {
        const { route } = scene
        switch(route.key) {
            case 'Home':
                return <Page />
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
