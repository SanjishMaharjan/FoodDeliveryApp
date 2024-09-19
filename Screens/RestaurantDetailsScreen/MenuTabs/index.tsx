// navigation/TabNavigator.tsx
import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import MenuComponent from './MenuComponent'

const initialLayout = { width: Dimensions.get('window').width }

const RestaurantMenuTabs = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'first', title: 'Favourites' },
    { key: 'second', title: 'Items' },
  ])

  const renderScene = SceneMap({
    first: MenuComponent,
    second: MenuComponent,
  })

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#000000' }}
      style={{ backgroundColor: '#e4e4e4' }}
      labelStyle={{ fontSize: 16, color: '#000000' }}
    />
  )

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  )
}

export default RestaurantMenuTabs
