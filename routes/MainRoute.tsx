import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import MainTabNavigator from './BottomTabRoute'

// Main Navigation Container
export default function MainRoute() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}
