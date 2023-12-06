// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Home from './Components/Home';
import RepoDetails from './Components/RepoDetails';
import WatchersList from './Components/WatchersList';

const Stack = createNativeStackNavigator();

export default function App(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Repo" component={RepoDetails} />
                <Stack.Screen name="Watchers" component={WatchersList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    
});