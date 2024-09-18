import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Filter from './Filter'
import TabNavigator from './SearchTab'

type Props = {}

const SearchComponent = (props: Props) => {
  return (
    <SafeAreaView className="flex-1">
      <Filter />
      <TabNavigator />
    </SafeAreaView>
  )
}

export default SearchComponent
