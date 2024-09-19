import React from 'react'
import { View, Image, Text } from 'react-native'
import { styled } from 'nativewind'
import Filter from '../SearchNav'
import { Ionicons } from '@expo/vector-icons'
import { Button } from 'react-native-paper'

const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledText = styled(Text)

interface RestaurantProfileProps {
  coverImage: string
  profileImage: string
  name: string
  location: string
  description?: string
}

const RestaurantProfile: React.FC<RestaurantProfileProps> = ({
  coverImage,
  profileImage,
  name,
  location,
  description,
}) => {
  return (
    <StyledView className="mb-4">
      <StyledView className="relative">
        {/* Cover Photo */}
        <StyledImage source={{ uri: coverImage }} className="w-full h-48" />

        {/* Filter Component positioned on top of the image */}
        <StyledView className="absolute top-0 left-0 right-0">
          <Filter />
        </StyledView>

        {/* Profile Picture */}
        <StyledView className="absolute -bottom-12 left-4">
          <StyledImage
            source={{ uri: profileImage }}
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </StyledView>
      </StyledView>

      {/* Restaurant Info */}
      <StyledView className="mt-16 px-4">
        <StyledText className="text-xl font-bold">{name}</StyledText>
        <StyledText className="text-gray-600">{location}</StyledText>
        {description && (
          <StyledText className="text-gray-500 mt-2">{description}</StyledText>
        )}
        <StyledView className="flex-row items-center justify-center mt-4">
          <Button>
            <Ionicons name="star" size={20} color="black" />
          </Button>
          <Button>
            <Ionicons name="location" size={20} color="black" />
          </Button>
          <Button>
            <Ionicons name="share-social" size={20} color="black" />
          </Button>
        </StyledView>
      </StyledView>
    </StyledView>
  )
}

export default RestaurantProfile
