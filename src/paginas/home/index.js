import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Cabecalho from '../../componentes/cabecalho/index.js';
import Pesquisa from '../../componentes/barraPesquisa/index.js';
import Banner from '../../componentes/banner/index.js';
import CardMovies from '../../componentes/cardsFilmes/index.js';

export default function Home() {

  const [dragonBall, setDragonBall] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function buscarPersonagensDragonBall() {
      try {
        const response = await fetch('https://dragonball-api.com/api/characters');
        const data = await response.json();
        setDragonBall(data.items);
      } catch (error) {
        console.error("Erro ao buscar personagens de Dragon Ball:", error);
      }
    }
    buscarPersonagensDragonBall();
  }, []);

  useEffect(() => {
    async function buscarPokemon() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              name: details.name,
              type: details.types.map(t => t.type.name).join(', '),
              image: details.sprites.front_default,
            };
          })
        );

        setPokemon(pokemonDetails);
      } catch (error) {
        console.error("Erro ao buscar Pokémons:", error);
      }
    }

    buscarPokemon();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImports}>

        <Cabecalho />
        <Pesquisa />
        <Banner />

        <View style={{ width: "90%" }}>

          <Text style={styles.textHome}>Dragon Ball</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dragonBall}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CardMovies
                nome={item.name}
                raça={item.race}
                imagem={item.image}
                sinopse={item.description}
              />
            )}
          />

          <Text style={styles.textHome}>Pokémon</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={pokemon}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <CardMovies
                nome={item.name}
                elemento={item.type}
                imagem={item.image}
              />
            )}
          />

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2e1f1c',
    width: '100%',
    height: '100%',
  },
  textHome: {
    fontSize: 30,
    color: "white",
    marginTop: 15,
    marginLeft: 0,
    fontWeight: 'bold',
  },
  containerImports: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
