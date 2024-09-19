export type RootStackParamList = {
  HomeScreen: undefined
  SearchScreen: undefined
  RestaurantDetailsScreen: {
    name: string
    location: string
    description: string
    coverImage: string | { uri: string };
    profileImage: string | { uri: string };
  }
  OrderScreen: undefined
  ProfileScreen: undefined
  LoginScreen: undefined
  SignupScreen: undefined
}