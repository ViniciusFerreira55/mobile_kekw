import { StyleSheet, Image, TextInput, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData  } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from 'expo-router';

export default function TabTwoScreen() {
  
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const auth = getAuth();
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) :void => {
    // No longer need to cast to any - hooray for react!
    // this.setState({temperature: e.target.value});
    setLogin(e.nativeEvent.text)
    
  }
  const handleChange2 = (e: NativeSyntheticEvent<TextInputChangeEventData>) :void => {
    // No longer need to cast to any - hooray for react!
    // this.setState({temperature: e.target.value});
    setSenha(e.nativeEvent.text)
    
  }
  const navigation = useNavigation();
  const logar = () => {
    signInWithEmailAndPassword(auth, login, senha)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigation.navigate('four')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      navigation.navigate('three')
    });
  }




  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/milka_logo.png')}></Image>
      <TextInput value={login} onChange={handleChange}   placeholder='Email' style={styles.input} ></TextInput>
      <TextInput value={senha} onChange={handleChange2} secureTextEntry={true} placeholder='Password' style={styles.input}></TextInput>
      <TouchableOpacity style={styles.botao} onPress={logar}>
        <Text>Entrar</Text>
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
  input: {
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 5,
    width: 150,
    height: 20,
    textAlign: 'center'
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#ff0000',
    padding: 10,
    marginTop: 10,
    width: 150,
    borderRadius: 5,

  }
});
