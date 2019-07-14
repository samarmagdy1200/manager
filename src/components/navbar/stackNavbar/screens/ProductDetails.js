import React, { Component } from 'react';
import {Text, TouchableHighlight, View} from 'react-native';


class ProductDetails extends Component {
    render(){
        return(
            <View>
                <TouchableHighlight onPress={()=>this.props.navigation.pop("Product")}>
                    <Text>
                    go to Home
                    </Text> 
                </TouchableHighlight>
            </View>
        )
    }
}

export default ProductDetails;