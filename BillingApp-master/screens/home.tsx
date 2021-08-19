import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './homescreen';
import Profile from './profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from './notification';
import Logout from './logout';

const Tab = createMaterialBottomTabNavigator();

function Home(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fd7c72"
        inactiveColor="rgba(0,0,0,0.6)"
        barStyle={{ backgroundColor: '#fff' }}>
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Logout" component={Logout}
         options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} />
              <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
    );
}
export default Home