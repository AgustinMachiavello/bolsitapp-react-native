import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HandbagsScreen from '../screens/HandbagsScreen';
import HandbagsDetailBagScreen from '../screens/HandbagsDetailBagScreen';
import HandbagsAddBagScreen from '../screens/HandbagsAddBagScreen';

const HandbagsScreenStackNavigator = createStackNavigator();

export default function HandbagsScreenStack(props){
    return(
        <HandbagsScreenStackNavigator.Navigator>
            <HandbagsScreenStackNavigator.Screen
                name='Handbags'
                component={HandbagsScreen}
                options={{
                    title: 'Mis bolsas'
                }}
            />
            <HandbagsScreenStackNavigator.Screen
                name='HandbagsDetail'
                component={HandbagsDetailBagScreen}
                options={{
                    title: 'Detalles de mi bolsa'
                }}
            />
            <HandbagsScreenStackNavigator.Screen
                name='HandbagsAddBag'
                component={HandbagsAddBagScreen}
                options={{
                    title: 'Agregar bolsa'
                }}
            />
        </HandbagsScreenStackNavigator.Navigator>
    )
}