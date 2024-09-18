import React from 'react'
import { Text, View } from 'react-native'

interface HeaderComponentProps {
  title: string
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ title }) => (
  <View>
    <Text className="text-2xl font-bold mb-2 ml-2">{title}</Text>
  </View>
)

export default HeaderComponent
