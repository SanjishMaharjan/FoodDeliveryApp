import React from 'react'
import { Button, Card } from 'react-native-paper'
import { Text, View } from 'react-native'

interface CardComponentProps {
  image: string | { uri: string }
  name: string
  location: string
  timing: string
}

const CardComponent: React.FC<CardComponentProps> = ({
  image,
  name,
  location,
  timing,
}) => (
  <Card style={{ marginBottom: 10, marginHorizontal: 8 }}>
    <Card.Cover source={typeof image === 'string' ? { uri: image } : image} />
    <Card.Content>
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex mt-1 ">
          <Text className="text-xl font-bold">{name}</Text>
          <Text className="text-sm ">{location}</Text>
          <Text className="text-sm font-bold">{timing}</Text>
        </View>
        <Button
          icon="cart-outline"
          buttonColor="grey"
          mode="contained"
          className="py-0.5 mt-2"
        >
          Order
        </Button>
      </View>
    </Card.Content>
  </Card>
)

export default CardComponent
