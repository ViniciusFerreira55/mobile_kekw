import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useNavigation } from 'expo-router';

export default function TabOneScreen() {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/milka_logo.png')}></Image>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("two")}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("three")}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  logo: {
    width: 200, 
    height: 100,
    marginBottom: 100,
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    width: 150,
    borderRadius: 5,
    
  }
});
