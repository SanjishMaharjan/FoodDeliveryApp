import React from 'react'
import { View } from 'react-native'
import Location from '../location'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../../../types/types'

export default function HomeTopTab() {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <SafeAreaView className="px-2 mb-2 ">
      <View className="flex-row items-center justify-between space-x-4 ">
        {/* Location Button */}
        <Location />

        {/* Searchbar */}
        <Button
          icon="magnify"
          buttonColor="#000"
          mode="outlined"
          onPress={() => navigation.navigate('SearchScreen')}
          className="h-12 rounded-full"
          labelStyle={{ color: 'green' }}
        >
          Search
        </Button>
      </View>
    </SafeAreaView>
  )
}
