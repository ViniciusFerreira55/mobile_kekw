import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useNavigation } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

export default function TabOneScreen() {

  const navigation = useNavigation();

   

  return (
    <View style={styles.mapContainer}>
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: -22.91323723452483, 
      longitude: -47.06816381850847, 
      latitudeDelta: 0.0922, 
      longitudeDelta: 0.0421,
    }}
  >
    <Marker
      coordinate={{ latitude: -22.91323723452483, longitude:-47.06816381850847 }} 
      title="Localização" 
      description="Descrição do local" 
    />
  </MapView>
  <View style={styles.text}>
  <Text>Seu Pedido já está indo até você no Roberto Mange a industria kkkkkkkkkkk</Text>
  </View>
</View>

  );
}

const styles = StyleSheet.create({
    mapContainer: {
      flex: 1,
    },
    map: {
      flex: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center'
    },
  });
  