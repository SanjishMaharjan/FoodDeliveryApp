import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RestaurantProfile from './RestarurantProfile'
import RestaurantMenuTabs from './MenuTabs'
import { RouteProp, useRoute } from '@react-navigation/native'

type RestaurantDetailsScreenParams = {
  name: string
  location: string
  description?: string
  coverImage: string
  profileImage: string
}

type RestaurantDetailsRouteProp = RouteProp<
  { RestaurantDetailsScreen: RestaurantDetailsScreenParams },
  'RestaurantDetailsScreen'
>

const RestaurantDetailsScreen: React.FC = () => {
  const route = useRoute<RestaurantDetailsRouteProp>()
  const { name, location, description, coverImage, profileImage } = route.params

  return (
    <SafeAreaView className="flex-1">
      <RestaurantProfile
        name={name}
        coverImage={coverImage}
        profileImage={profileImage}
        location={location}
        description={description}
      />
      <RestaurantMenuTabs />
    </SafeAreaView>
  )
}

export default RestaurantDetailsScreen
