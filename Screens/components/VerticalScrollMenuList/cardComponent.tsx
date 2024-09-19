import React from 'react'
import { Button, Card } from 'react-native-paper'
import { Text, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../routes/types/navigationTypes'

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
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  return (
    <Card style={{ marginBottom: 10, marginHorizontal: 8 }}>
      <Card.Cover source={typeof image === 'string' ? { uri: image } : image} />
      <Card.Content>
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex mt-1 ">
            <Text className="text-xl">{name}</Text>
            <Text className="text-sm ">{location}</Text>
            <Text className="text-sm font-bold">{timing}</Text>
          </View>
          <Button
            icon="cart-outline"
            buttonColor="grey"
            mode="contained"
            className="py-0.5 mt-2"
            onPress={() => {
              navigation.navigate('RestaurantDetailsScreen', {
                name,
                location,
                description: timing,
                coverImage: image,
                profileImage: image,
              })
            }}
          >
            Order
          </Button>
        </View>
      </Card.Content>
    </Card>
  )
}

export default CardComponent
