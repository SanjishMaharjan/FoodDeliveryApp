// components/CardComponent.tsx
import React from 'react'
import { Text, View, Image } from 'react-native'

interface CardComponentProps {
  image: string | { uri: string }
  name: string
}

const CardComponent: React.FC<CardComponentProps> = ({ image, name }) => (
  <View className="mb-3 mx-2">
    <Image
      source={typeof image === 'string' ? { uri: image } : image}
      className="w-16 h-16 rounded-full "
    />
    <Text className="text-center text-sm  mt-2">{name}</Text>
  </View>
)

export default CardComponent
