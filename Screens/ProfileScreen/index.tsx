import React from 'react'
import { Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  return (
    <SafeAreaView className="flex-1 p-2 pl-4">
      <View className="mt-5">
        <Text className="text-2xl font-bold mb-4">Login</Text>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Enter your email"
          className="mb-4"
          activeOutlineColor="#00C853"
        />

        <TextInput
          mode="outlined"
          label="Password"
          placeholder="Enter your password"
          className="mb-4"
          activeOutlineColor="#00C853"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          textContentType="password"
          right={
            <TextInput.Icon
              icon={passwordVisible ? 'eye-off' : 'eye'}
              color="black"
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        />
        <Button mode="contained" buttonColor="#00C853" className="w-full">
          Login
        </Button>
      </View>
    </SafeAreaView>
  )
}
