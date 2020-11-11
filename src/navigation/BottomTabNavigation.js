import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenStack from './stacks/HomeScreenStack';
import HandbagsScreenStack from './stacks/HandbagsStack';
import StoresScreenStack from './stacks/StoresScreenStack';

import BottomTabIcon from '../components/BottomTabIcon';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigation(props) {
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{showLabel: false}}>
      <BottomTab.Screen 
        name='Home' 
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({ focused }) => <BottomTabIcon focused={focused} name='home'/>,
        }}/>
      <BottomTab.Screen 
        name='Handbags' 
        component={HandbagsScreenStack}
        tabBar
        options={{
          tabBarIcon: ({ focused }) => <BottomTabIcon focused={focused} name='shopping-bag'/>,
        }}/>
      <BottomTab.Screen 
        name='Stores' 
        component={StoresScreenStack}
        options={{
          tabBarIcon: ({ focused }) => <BottomTabIcon focused={focused} name='map'/>,
        }}/>
    </BottomTab.Navigator>
  );
}