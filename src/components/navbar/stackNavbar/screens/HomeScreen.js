import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';


class HomeScreen extends Component {
    render(){
        return(
            <View>
              <TouchableHighlight onPress={()=>this.props.navigation.navigate("Product")}>
                <Text>
                    go to productDetails
                </Text>
              </TouchableHighlight>
            </View>
        )
    }
}

export default HomeScreen;