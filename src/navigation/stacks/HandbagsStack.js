import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HandbagsScreen from '../screens/HandbagsScreen';

const HandbagsScreenStackNavigator = createStackNavigator();

export default function HandbagsScreenStack(props){
    return(
        <HandbagsScreenStackNavigator.Navigator>
            <HandbagsScreenStackNavigator.Screen
                name='Handbags'
                component={HandbagsScreen}
                options={{
                    title: 'Handbags'
                }}
            />
        </HandbagsScreenStackNavigator.Navigator>
    )
}