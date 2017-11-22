import React from 'react'
import {purple, white} from './Color'
import {StackNavigator, TabNavigator} from 'react-navigation'
import {Constants} from 'expo'
import {Foundation, FontAwesome, Ionicons} from '@expo/vector-icons'
import DeckList from './DeckList'
import AddDeck from './AddCard'


import { View, StatusBar, Platform } from 'react-native'

export function UdaciStatusBar({backgroundColor, ...props}) {
    return (
        <View
            style={{
            backgroundColor,
            height: Constants.statusBarHeight
        }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

export const Tabs = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-list-outline' size={30} color={tintColor}/>
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
        }
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios'
            ? purple
            : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === 'ios'
                ? white
                : purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

export const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    }
})
