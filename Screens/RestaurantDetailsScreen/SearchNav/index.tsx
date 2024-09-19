import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../routes/types/navigationTypes'

const Filter = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <View className="flex-row items-center px-4 py-2 justify-between">
      {/* Custom Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="mr-2 bg-gray-300 rounded-full"
      >
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchScreen')}
        className="ml-2 bg-gray-300 rounded-full"
      >
        <Ionicons name="search" size={28} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default Filter
