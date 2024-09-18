// screens/CategoryList.tsx
import React from 'react'
import { FlatList, View } from 'react-native'
import CardComponent from './cardComponent'
import HeaderComponent from './headerComponent'

interface CategoryListProps {
  data: any[]
}

const CategoryList: React.FC<CategoryListProps> = ({ data }) => {
  const renderItem = ({ item }: { item: any }) => (
    <CardComponent image={item.image} name={item.name} />
  )

  return (
    <View>
      <HeaderComponent title="All Categories" />
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

export default CategoryList
