import React from 'react'
import { FlatList, Text, View } from 'react-native'
import CardComponent from './cardComponent'

interface VerticalMenuItemsProps {
  title: string
  data: any[]
}

const VerticalMenuItems: React.FC<VerticalMenuItemsProps> = ({
  title,
  data,
}) => {
  const renderItem = ({ item }: { item: any }) => (
    <CardComponent
      image={item.image}
      name={item.name}
      location={item.location}
      timing={item.timing}
    />
  )

  return (
    <View>
      <Text className="text-2xl font-bold mb-2 ml-2">{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  )
}

export default VerticalMenuItems
