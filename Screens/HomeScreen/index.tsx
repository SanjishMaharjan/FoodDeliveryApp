import React from 'react'
import { ScrollView, View } from 'react-native'
import HorizontalScrollMenu from '../components/VerticalScrollMenuList'
import HomeTopTab from './UI/topUIHome/Toptab'
import MenuItems from '../components/HorizontalScrollMenuList'
import Advertisement from '../components/Ads'
import CategoryList from '../components/Category'
import { FOOD_ITEMS } from './dummydata/menuItems'
import { NEPALI_RESTAURANTS } from './dummydata/restaurantsDummydata'
import { AdvertismentImages } from './dummydata/adsDummy'
import { CategoryListData } from './dummydata/Category'

export default function Home() {
  return (
    <View className="flex-1 p-2">
      {/* Adding a ScrollView to make both MenuItems and AvailableOffers scrollable */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeTopTab />
        <CategoryList data={CategoryListData} />
        <Advertisement images={AdvertismentImages} />
        <MenuItems title="Hot Deals" data={FOOD_ITEMS} />
        <MenuItems title="Delivery" data={FOOD_ITEMS} />
        <HorizontalScrollMenu title="Resturant" data={NEPALI_RESTAURANTS} />
      </ScrollView>
    </View>
  )
}
