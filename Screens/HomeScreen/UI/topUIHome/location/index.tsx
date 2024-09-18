import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { useLocationServicesEnabled } from '../../../../../hooks/useLocationServicesEnabled'
import { useCurrentLocation } from '../../../../../hooks/useCurrentLocation'

export default function LocationScreen() {
  const locationServicesEnabled = useLocationServicesEnabled()
  const { displayCurrentAddress, getCurrentLocation } = useCurrentLocation()

  return (
    <View>
      <Button
        icon="map-marker-radius"
        buttonColor="#00C853"
        mode="contained"
        onPress={getCurrentLocation}
        className="w-40 h-12 self-center"
      >
        {displayCurrentAddress === 'Locating...'
          ? 'Deliver Location'
          : displayCurrentAddress}
      </Button>
    </View>
  )
}
