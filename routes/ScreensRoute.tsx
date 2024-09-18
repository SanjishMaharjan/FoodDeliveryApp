import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen'
import OrderScreen from '../Screens/OrderScreen'
// import ProfileScreen from '../Screens/ProfileScreen'
import LoginScreen from '../Screens/Auth/LoginScreen'
import SignupScreen from '../Screens/Auth/SignnupScreen'
import SearchComponent from '../Screens/SearchScreen'

const Stack = createStackNavigator()
export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchComponent} />
    </Stack.Navigator>
  )
}

// Order Stack Navigator
export function OrderStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
    </Stack.Navigator>
  )
}

// Profile Stack Navigator
export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={LoginScreen} />
    </Stack.Navigator>
  )
}

// Auth Stack Navigator
export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  )
}
