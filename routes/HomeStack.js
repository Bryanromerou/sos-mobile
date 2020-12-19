import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';

const HomeStack = createStackNavigator();

export default homeStack = () =>{
    return (
        <NavigationContainer style={{width:"100%"}}>
            <HomeStack.Navigator screenOptions={{headerShown: false}} style={{width:"100%"}}>
                <HomeStack.Screen name="Home" component={Home} style={{width:"100%"}}/>
                <HomeStack.Screen name="Statistics" component={Statistics}/>
            </HomeStack.Navigator>
        </NavigationContainer>
    )
}