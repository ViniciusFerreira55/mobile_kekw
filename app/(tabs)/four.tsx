import { Text, View } from '../../components/Themed';
import { StyleSheet, Image, TextInput, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData, } from 'react-native';

export default function TabThreeScreen() {

    return(
        <View>
            <View style={styles.navbar}>
                <Image style={styles.logo} source={require('../../assets/images/milka_logo.png')}></Image>
                
                <Image style={styles.carrinho} source={require('../../assets/images/carrinho.png')}></Image>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
      },
      logo: {
        width: 100, 
        height: 50,
      },
      navbar: {
        backgroundColor: 'blue',
        height: 50,
        width: 1000,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      },
      carrinho: {
        width:50,
        height:50
      }
})