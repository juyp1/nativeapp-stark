import React from 'react';
import {Button, View, Text, StyleSheet,SafeAreaView} from 'react-native';
import Nav from './src/nav';

function App() {
    return (
    
    <Nav/>


    );
}

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
