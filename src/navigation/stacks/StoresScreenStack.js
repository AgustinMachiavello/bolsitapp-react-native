import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import StoresScreen from '../screens/StoresScreen';

const StoresScreenStackNavigator = createStackNavigator();

export default function StoresScreenStack(props){
    return(
        <StoresScreenStackNavigator.Navigator>
            <StoresScreenStackNavigator.Screen
                name='Stores'
                component={StoresScreen}
                options={{
                    title: 'Tiendas'
                }}
            />
        </StoresScreenStackNavigator.Navigator>
    )
}