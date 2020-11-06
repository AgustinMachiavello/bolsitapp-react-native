import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const HomeScreenStackNavigator = createStackNavigator();

export default function HomeScreenStack(props){
    return(
        <HomeScreenStackNavigator.Navigator>
            <HomeScreenStackNavigator.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'Inicio'
                }}
            />
        </HomeScreenStackNavigator.Navigator>
    )
}