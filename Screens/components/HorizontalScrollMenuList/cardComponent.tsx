// components/CardComponent.tsx
import React from 'react'
import { Button, Card } from 'react-native-paper'
import { Text, View } from 'react-native'

interface CardComponentProps {
  image: string | { uri: string }
  name: string
  price: string | number
}

const CardComponent: React.FC<CardComponentProps> = ({
  image,
  name,
  price,
}) => (
  <Card style={{ marginBottom: 10, marginHorizontal: 8, width: 250 }}>
    <Card.Cover
      source={typeof image === 'string' ? { uri: image } : image}
      style={{ height: 100 }}
    />
    <Card.Content>
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-sm ">{name}</Text>
        <Text className="text-sm ">{price}</Text>
      </View>
      <Button
        icon="cart-outline"
        buttonColor="grey"
        mode="contained"
        className="py-0.5 mt-2"
      >
        Add to Cart
      </Button>
    </Card.Content>
  </Card>
)

export default CardComponent
