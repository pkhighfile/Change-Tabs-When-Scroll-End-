import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';

class SwitchTabOnScroll extends Component {

    isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;

    }

    Callme = () => {

        const { state } = this.props.navigation        
        console.warn(this.props)
       if(state.key === "DeckList")
       { 
           this.props.navigation.navigate("AddDeck")
        }
       else if(state.key === "AddDeck")
        { 
            this.props.navigation.navigate("DeckList")
         }
    }

    render() {

        return (

            <ScrollView
            scrollTo={(0)}
                onScroll={({nativeEvent}) => {
                if (this.isCloseToBottom(nativeEvent)) {
                    this.Callme()
                }
            }}>

                <Text
                    style={{
                    flex: 5,
                    backgroundColor: 'steelblue',
                    fontSize: 96
                }}>Here is very long lorem ipsum or something hhhhhhhhhhhh</Text>
                <Text
                    style={{
                    flex: 5,
                    backgroundColor: 'steelblue',
                    fontSize: 96
                }}>Here is very long lorem ipsum or something hhhhhhhhhhhh</Text>

                <Text
                    style={{
                    flex: 5,
                    backgroundColor: 'steelblue',
                    fontSize: 96
                }}>Here is very long lorem ipsum or something hhhhhhhhhhhh</Text>

            </ScrollView>

        )
    }

}

export default SwitchTabOnScroll