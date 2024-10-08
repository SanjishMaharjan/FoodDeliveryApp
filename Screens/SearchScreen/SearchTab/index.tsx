// navigation/TabNavigator.tsx
import React, { useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import FirstComponent from '../TabComponents/firstComponent'
import SecondComponent from '../TabComponents/secondComponent'

const initialLayout = { width: Dimensions.get('window').width }

const TabNavigator = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'first', title: 'Restaurants' },
    { key: 'second', title: 'Items' },
  ])

  const renderScene = SceneMap({
    first: FirstComponent,
    second: SecondComponent,
  })

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#00C853' }}
      style={{ backgroundColor: '#e4e4e4' }}
      renderLabel={({ route, focused }) => (
        <Text
          style={{
            color: focused ? '#00C853' : '#000000',
            fontSize: 16,
            margin: 8,
          }}
        >
          {route.title}
        </Text>
      )}
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

export default TabNavigator
