import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
type Props = {}

const Filter = (props: Props) => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const navigation = useNavigation()
  return (
    <View className="flex-row items-center px-4 py-2">
      {/* Custom Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} className="mr-2">
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Search Bar */}
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        className="flex-1 bg-gray-200 rounded-full"
        inputStyle={{ fontSize: 16 }}
      />
    </View>
  )
}

export default Filter
