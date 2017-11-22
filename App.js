import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { purple } from './Color'
import { UdaciStatusBar, MainNavigator } from  './appTabs'

export default class App extends React.Component {


  render() {
    return (
       <View style={{flex: 1}}>
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
