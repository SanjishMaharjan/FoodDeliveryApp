import { useState } from 'react'
import * as Location from 'expo-location'
import { Alert } from 'react-native'

export const useCurrentLocation = () => {
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    'Locating...',
  )

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert(
        'Permission denied',
        'Allow the app to use the location services',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
      )
      return
    }

    const { coords } = await Location.getCurrentPositionAsync()
    if (coords) {
      const { latitude, longitude } = coords
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      })

      for (let item of response) {
        let address = `${item.name}, ${item.city}, ${item.postalCode}`
        setDisplayCurrentAddress(address)
      }
    }
  }

  return { displayCurrentAddress, getCurrentLocation }
}
