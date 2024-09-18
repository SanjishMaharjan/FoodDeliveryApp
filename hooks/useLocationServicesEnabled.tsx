import { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import { Alert } from 'react-native'

export const useLocationServicesEnabled = () => {
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false)

  useEffect(() => {
    checkIfLocationEnabled()
  }, [])

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync()
    if (!enabled) {
      Alert.alert('Location not enabled', 'Please enable your Location', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ])
    } else {
      setLocationServicesEnabled(enabled)
    }
  }

  return locationServicesEnabled
}
