import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import  ProductDetails  from './components/navbar/stackNavbar/screens/ProductDetails';
import  HomeScreen  from './components/navbar/stackNavbar/screens/HomeScreen';

const StackNavigator = createStackNavigator({
    Home:HomeScreen,
    Product:ProductDetails
})

const AppContainer = createAppContainer(StackNavigator);
export default AppContainer;
