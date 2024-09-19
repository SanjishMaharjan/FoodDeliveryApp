import React from 'react'
import { Button, Card } from 'react-native-paper'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native' // Import the hook

interface CardComponentProps {
  image: string | { uri: string }
  name: string
  price: string | number
  restaurantName: string
  location: string
}

const CardComponent: React.FC<CardComponentProps> = ({
  image,
  name,
  price,
  restaurantName,
  location,
}) => {
  const navigation = useNavigation<any>() // Access the navigation object

  return (
    <Card style={{ marginBottom: 10, marginHorizontal: 8, width: 250 }}>
      <Card.Cover
        source={typeof image === 'string' ? { uri: image } : image}
        style={{ height: 100 }}
      />
      <Card.Content>
        <View className="flex-row justify-between items-center mt-2">
          <View className="flex mt-1">
            <Text className="text-xl">{name}</Text>
            <Text className="text-sm">{restaurantName}</Text>
            <Text className="text-sm">{location}</Text>
          </View>
          <Text className="text-sm">Rs {price}</Text>
        </View>
        <Button
          icon="cart-outline"
          buttonColor="grey"
          mode="contained"
          className="py-0.5 mt-2"
          onPress={() => {
            navigation.navigate('AddToCartScreen', {
              image,
              itemName: name,
              restaurantName,
              price,
              location,
            })
          }}
        >
          Add to Cart
        </Button>
      </Card.Content>
    </Card>
  )
}

export default CardComponent
