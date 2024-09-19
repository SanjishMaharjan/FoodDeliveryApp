import React, { useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native'

interface TabBarButtonProps {
  children: React.ReactNode
  onPress: () => void
  isActive: boolean
}

const TabBarButton: React.FC<TabBarButtonProps> = ({
  children,
  onPress,
  isActive,
}) => {
  const [scale] = useState(new Animated.Value(1)) // Initialize scale animation value

  useEffect(() => {
    Animated.timing(scale, {
      toValue: isActive ? 1.5 : 1, // Scale up if active, scale down if inactive
      duration: 300, // Duration of the animation
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start()
  }, [isActive]) // Re-run animation when isActive changes

  return (
    <TouchableOpacity onPress={onPress} style={styles.tabBarButton}>
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
