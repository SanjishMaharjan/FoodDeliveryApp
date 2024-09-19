import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Filter from './Filter'
import TabNavigator from './SearchTab'
import { useRoute } from '@react-navigation/native'

const SearchComponent = () => {
  const route = useRoute<any>()
  const name = route.params?.name || ''
  return (
    <SafeAreaView className="flex-1">
      <Filter name={name} />
      <TabNavigator />
    </SafeAreaView>
  )
}

export default SearchComponent
