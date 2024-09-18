import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import MainRoute from './routes/MainRoute'

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView className="flex-1">
        <MainRoute />
      </SafeAreaView>
    </PaperProvider>
  )
}
