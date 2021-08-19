import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/home';
import SignInScreen from '../screens/signin';
import Onboard from '../screens/onboard';
import productDetails from '../screens/productsdetails';
import Logout from '../screens/logout';
const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShown:false,
        }}>
    <Stack.Screen name="Onboard" component={Onboard} />
    <Stack.Screen name="Home" component={HomePage} />
    <Stack.Screen name="SignIn" component={SignInScreen}/>
    <Stack.Screen name="ProductDetails" component={productDetails} />
    <Stack.Screen name="Logout" component={Logout} />

    </Stack.Navigator>
      
    </NavigationContainer>
  )
    
}



export default Navigator;