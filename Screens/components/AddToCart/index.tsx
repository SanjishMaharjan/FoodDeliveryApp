import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderWithCloseButton from '../HeaderWithCloseButton'
import ProductInfo from './ProductInfo'
import { useRoute, useNavigation } from '@react-navigation/native'
import QuantityAndPrice from './QuantityUpdate'

interface RouteParams {
  image: string
  restaurantName: string
  itemName: string
  location: string
  price: string
}

const AddToCartScreen: React.FC = () => {
  const route = useRoute()
  const {
    image,
    restaurantName,
    location,
    itemName,
    price,
  } = route.params as RouteParams

  return (
    <SafeAreaView className="flex-1 p-2">
      <HeaderWithCloseButton title="Add to Cart" />

      {/* Image and restaurant details */}
      <ProductInfo
        image={image}
        restaurantName={restaurantName}
        itemName={itemName}
        location={location}
        price={price}
      />
      <QuantityAndPrice price={price} />

      {/* Quantity adjustment */}
    </SafeAreaView>
  )
}

export default AddToCartScreen
