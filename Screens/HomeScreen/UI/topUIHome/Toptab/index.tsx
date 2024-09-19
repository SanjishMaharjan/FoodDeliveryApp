import React from 'react'
import { View } from 'react-native'
import Location from '../location'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../../../routes/types/navigationTypes'

export default function HomeTopTab() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <SafeAreaView className="px-2 mb-2 ">
      <View className="flex-row items-center justify-between space-x-4 ">
        {/* Location Button */}
        <Location />

        {/* Searchbar */}
        <Button
          icon="magnify"
          buttonColor="#e4e4e4"
          mode="outlined"
          onPress={() => navigation.navigate('SearchScreen')}
          className="h-12 rounded-full"
          labelStyle={{ color: 'black', fontSize: 14 }}
        >
          Search
        </Button>
      </View>
    </SafeAreaView>
  )
}
