import { Button, Text, View } from 'react-native'
import AcceptChat from '../AcceptChat'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({ navigation, route }) => {

  const handleLogout = () => {
    AsyncStorage.removeItem("user")
    navigation.navigate("login")
  }

  return (
    <View>
      <Button title={"Logout"} onPress={handleLogout} />
      <AcceptChat navigation={navigation} />
    </View>
  )
}

export default Home
