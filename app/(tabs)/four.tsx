import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { db } from './firebaseconfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
interface Produto {
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
}

export default function TabThreeScreen() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const navigation = useNavigation();
  const auth = getAuth();
  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    const produtosSnapshot = await getDocs(collection(db, 'produtos'));
    const produtosData = produtosSnapshot.docs.map((doc) => doc.data() as Produto);
    setProdutos(produtosData);
  };

  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho([...carrinho, produto]);
  };


  const calcularQuantidadeProdutos = () => {
    return carrinho.length;
  };

  const calcularTotalPreco = () => {
    return carrinho.reduce((total, produto) => total + produto.preco, 0);
  };

  const renderCard = (produto: Produto) => {
    return (
      <View key={produto.nome} style={styles.card}>
        <Image style={styles.foto} source={{ uri: produto.foto }} />
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.descricao}>{produto.descricao}</Text>
        <Text style={styles.preco}>Preço: R${produto.preco}</Text>
        <TouchableOpacity style={styles.botao} onPress={() => adicionarAoCarrinho(produto)}>
          <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const addOrder = async () => {
    const resultado = await addDoc(collection(db,"pedidos"), {
      email : auth.currentUser?.email,
      preco: calcularTotalPreco(),
      status: 'clean'
    });
    navigation.navigate("five")
    setCarrinho([])
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image style={styles.logo} source={require('../../assets/images/milka_logo.png')} />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.column}>
          {produtos.slice(0, Math.ceil(produtos.length / 2)).map(renderCard)}
        </View>
        <View style={styles.column}>
          {produtos.slice(Math.ceil(produtos.length / 2)).map(renderCard)}
        </View>
      </ScrollView>
      <View style={styles.carrinhoFooter}>
        <Text style={styles.carrinhoTexto}>Produtos no Carrinho: {calcularQuantidadeProdutos()}</Text>
        <Text style={styles.carrinhoTexto}>Total: R${calcularTotalPreco().toFixed(2)}</Text>
        <TouchableOpacity style={styles.finalizarCompraButton} onPress={()=> addOrder()}>
          <Text style={styles.finalizarCompraText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  logo: {
    width: 100,
    height: 50,
  },
  navbar: {
    backgroundColor: 'blue',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  column: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginRight: 8,
  },
  foto: {
    width: '100%',
    height: 120,
    marginBottom: 8,
    borderRadius: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  descricao: {
    marginBottom: 8,
  },
  preco: {
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  carrinhoFooter: {
    backgroundColor: 'blue',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  carrinhoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  finalizarCompraButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  finalizarCompraText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
