import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface Props {
  title: string
}

const HeaderWithCloseButton = (props: Props) => {
  const { title } = props
  const navigation = useNavigation()
  return (
    <View className="flex-row justify-between items-center">
      <Text className="text-2xl font-bold flex-grow text-center">{title}</Text>

      <TouchableOpacity onPress={() => navigation.goBack()} className="ml-2">
        <Ionicons name="close" size={32} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderWithCloseButton
