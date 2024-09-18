import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native'

// Custom TabBarButton with scaling effect
const TabBarButton = ({ children, onPress }: any) => {
  const [scale] = useState(new Animated.Value(1)) // Initialize scale animation value

  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: 1.5,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start()
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.tabBarButton}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
})

export default TabBarButton
