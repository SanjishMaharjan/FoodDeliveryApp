import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Button } from 'react-native-paper'

interface Props {
  price: string
}

const QuantityAndPrice: React.FC<Props> = ({ price }) => {
  // Parse the price string to a number for calculations
  const basePrice = parseFloat(price)
  const [quantity, setQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(basePrice)

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
    setTotalPrice((prevTotal) => prevTotal + basePrice)
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
      setTotalPrice((prevTotal) => prevTotal - basePrice)
    }
  }

  return (
    <View className="items-center">
      {/* Quantity Controls */}
      <View className="flex-row justify-center items-center mt-8">
        <TouchableOpacity
          onPress={handleDecreaseQuantity}
          className="p-2 bg-gray-200 rounded-full"
        >
          <Ionicons name="remove" size={24} color="black" />
        </TouchableOpacity>

        <Text className="mx-4 text-xl font-bold">{quantity}</Text>

        <TouchableOpacity
          onPress={handleIncreaseQuantity}
          className="p-2 bg-gray-200 rounded-full"
        >
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Total Price */}
      <Text className="text-3xl font-bold mt-4 text-center">
        Rs {totalPrice.toFixed(2)}
      </Text>

      {/* Add to Cart Button */}
      <View className="mt-6">
        <Button
          mode="contained"
          buttonColor="grey"
          icon="cart-outline"
          className="w-full rounded-full"
          onPress={() => {}}
        >
          Add to Cart
        </Button>
      </View>
    </View>
  )
}

export default QuantityAndPrice
