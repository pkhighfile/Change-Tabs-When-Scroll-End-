import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import SwitchTabOnScroll from './Scroll'
class DeckList extends Component {
  
  render() {  
     
    return (
      <SwitchTabOnScroll {...this.props} />
    )
  }
}
export default DeckList
