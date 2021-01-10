import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/LoginPage'
import Tabbar from './tabbar';

const Stack = createStackNavigator()
 const state ={
     initialRouteName:'Login'
 }
function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={state.initialRouteName}>
                <Stack.Screen name="Login" component={Login} options={ {headerShown:false} } />
                <Stack.Screen name="Tabbar" component={Tabbar} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default  Nav
