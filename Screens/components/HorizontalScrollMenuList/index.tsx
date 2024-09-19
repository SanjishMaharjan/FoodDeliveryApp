// screens/MenuItems.tsx
import React from 'react'
import { FlatList, View } from 'react-native'
import CardComponent from './cardComponent'
import HeaderComponent from './headerComponent'

interface MenuItemsProps {
  title: string
  data: any[]
}

const MenuItems: React.FC<MenuItemsProps> = ({ title, data }) => {
  const renderItem = ({ item }: { item: any }) => (
    <CardComponent
      image={item.image}
      name={item.name}
      price={item.price}
      restaurantName={item.restaurantName}
      location={item.location}
    />
  )

  return (
    <View className="mb-2">
      <HeaderComponent title={title} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default MenuItems
