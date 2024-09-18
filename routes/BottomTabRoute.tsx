import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { HomeStack } from './ScreensRoute'
import { OrderStack } from './ScreensRoute'
import { ProfileStack } from './ScreensRoute'
import TabBarButton from '../components/Buttons/TabBarButton'
import { AuthStack } from './ScreensRoute'

const Tab = createBottomTabNavigator()

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00C853',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#D3D3D3',
          borderTopWidth: 0,
          height: 50,
          paddingBottom: 5,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName:
            | 'home'
            | 'cart-outline'
            | 'account'
            | 'login'
            | undefined

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Order') {
            iconName = 'cart-outline'
          } else if (route.name === 'Profile') {
            iconName = 'account'
          } else if (route.name === 'Auth') {
            iconName = 'login'
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          )
        },
        tabBarButton: (props) => <TabBarButton {...props} />,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Order" component={OrderStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Auth" component={AuthStack} />
    </Tab.Navigator>
  )
}
