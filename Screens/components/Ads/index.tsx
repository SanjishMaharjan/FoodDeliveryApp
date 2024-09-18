// screens/Advertisement.tsx
import React, { useRef, useEffect } from 'react'
import { FlatList, View, Image, Dimensions } from 'react-native'

interface AdvertisementProps {
  images: string[]
}

const { width } = Dimensions.get('window') // Get the full width of the device

const Advertisement: React.FC<AdvertisementProps> = ({ images }) => {
  const flatListRef = useRef<FlatList>(null)
  const scrollX = useRef<number>(0)
  const currentIndex = useRef<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current && images.length > 1) {
        currentIndex.current = (currentIndex.current + 1) % images.length
        scrollX.current = currentIndex.current * width
        flatListRef.current.scrollToOffset({
          offset: scrollX.current,
          animated: true,
        })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [images])

  const renderItem = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={{ width, height: 200 }} />
  )

  return (
    <View className="my-2">
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false} // Disable manual scrolling for auto-scroll effect
      />
    </View>
  )
}

export default Advertisement
