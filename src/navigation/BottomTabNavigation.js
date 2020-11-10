import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenStack from './stacks/HomeScreenStack';
import HandbagsScreenStack from './stacks/HandbagsStack';
import StoresScreenStack from './stacks/StoresScreenStack';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigation(props) {
  // Hide root header
  //props.navigation.setOptions({ headerShown: false });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen name='Home' component={HomeScreenStack}/>
      <BottomTab.Screen name='Handbags' component={HandbagsScreenStack} />
      <BottomTab.Screen name='Stores' component={StoresScreenStack} />
    </BottomTab.Navigator>
  );
}