import React from 'react'
import HomePage from '../../app/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../../app/Settings';
import Profile from '../../app/Profile';
import Alerts from '../../app/Alerts';
import Community from '../../app/Community';
import Tracking from '../../app/Tracking';
// import { Icon } from 'react-native-vector-icons/Icon';a

export default function MyTabs() {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator       
    screenOptions={({ route }) => ({
      // tabBarLabel: getTabBarLabel(route),
      // tabBarIcon: getTabBarIcon(route), 
      headerShown: false  
    })}
>
      <Tab.Screen name="HomePage" component={HomePage} /> 
      <Tab.Screen name="Profile" component={Profile} /> 
      <Tab.Screen name="Community" component={Community} /> 
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Tracking" component={Tracking} /> 
      <Tab.Screen name="Alerts" component={Alerts} /> 
    </Tab.Navigator>
  )
}

// const getTabBarLabel = (route) => {
//   // Customize the labels based on the route name
//   return route.name === 'HomePage' ? 'Home' : 'Settings';
// };

// const getTabBarIcon = (route) => {
//   const facebook = route.name === 'HomePage' ? 'home' : 'cog'; // Replace with your icon names
//   return <Icon name={facebook} size={24} color="black" />; // Customize size and color
// };
