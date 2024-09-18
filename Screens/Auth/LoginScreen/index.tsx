import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  navigation: any
}

export default function LoginScreen({ navigation }: Props) {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  return (
    <SafeAreaView className="flex-1 p-4">
      <View className="mt-5">
        <Text className="text-2xl font-bold mb-4 ">Login</Text>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Enter your email"
          className="mb-4 rounded-md"
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
        <View className="flex-row justify-center items-center gap-3 mt-4">
          <Text>Forgot Password?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text className="text-blue-500 ">Create New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
