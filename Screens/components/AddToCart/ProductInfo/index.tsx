import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

interface Props {
  image: string
  itemName: string
  description?: string
  restaurantName: string
  location: string
  price: string
}

const ProductInfo = (props: Props) => {
  const { image, restaurantName, location, itemName, description } = props
  const navigation = useNavigation<any>()
  return (
    <View className="mt-6 items-center">
      <Image
        source={{ uri: image }}
        style={{ width: 300, height: 200, borderRadius: 10 }}
      />
      <Text className="text-2xl font-bold mt-4">{itemName}</Text>
      <Text className="text-xl font-bold mt-4">{restaurantName}</Text>
      {description && (
        <Text className="text-xl font-bold mt-4">{description}</Text>
      )}
      <Text className="text-gray-600">{location}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RestaurantDetailsScreen', {
            name: restaurantName,
            location,
            coverImage: image,
            profileImage: image,
          })
        }}
        className="mt-4"
      >
        <Text className="text-gray-600">View Details</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductInfo
