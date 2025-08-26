
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Cabecalho from '../../componentes/cabecalho/index.js'
import Pesquisa from '../../componentes/barraPesquisa/index.js'
import Banner from '../../componentes/banner/index.js'
import Filmes from '../../componentes/data/filmes.js'
import CardMovies from '../../componentes/cardsFilmes/index.js';
import { ScrollView } from 'react-native-web';
import { useState, useEffect, } from 'react';

export default function Home() {


  const [movies, setMovies] = useState([]);

  useEffect(() => {


    async function buscarFilmes() {


      const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-br-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzY1YzEyYzUyMWRiMTEzMjJmZDk1MDJlMWNlYzlmYyIsIm5iZiI6MTc1NTAyMTUxMi40NzksInN1YiI6IjY4OWI4MGM4MzVlMGUyZDIxMDZkNzRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EAMFVwLizTgWASktiIgkzwldJO4_he776g98_jlTAY8'
        }
      };

      const response = await fetch(url, options)
      const data = await response.json();
      console.log(data);

      setMovies(data.results)

    }
    buscarFilmes();







  }, [])

  const [popular, setPopular] = useState([]);

  useEffect(() => {


    async function buscarFilmes() {

      const url = 'https://api.themoviedb.org/3/movie/popular?language=pt-br-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzY1YzEyYzUyMWRiMTEzMjJmZDk1MDJlMWNlYzlmYyIsIm5iZiI6MTc1NTAyMTUxMi40NzksInN1YiI6IjY4OWI4MGM4MzVlMGUyZDIxMDZkNzRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EAMFVwLizTgWASktiIgkzwldJO4_he776g98_jlTAY8'
        }
      };


      const response = await fetch(url, options)
      const data = await response.json();
      console.log(data);

      setPopular(data.results)

    }
    buscarFilmes();







  }, [])

  const [avaliado, setAvaliado] = useState([]);

  useEffect(() => {


    async function buscarFilmes() {

      const url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-br-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzY1YzEyYzUyMWRiMTEzMjJmZDk1MDJlMWNlYzlmYyIsIm5iZiI6MTc1NTAyMTUxMi40NzksInN1YiI6IjY4OWI4MGM4MzVlMGUyZDIxMDZkNzRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EAMFVwLizTgWASktiIgkzwldJO4_he776g98_jlTAY8'
        }
      };


      const response = await fetch(url, options)
      const data = await response.json();
      console.log(data);

      setAvaliado(data.results)

    }
    buscarFilmes();







  }, [])

  const [lancamento, setLancamento] = useState([]);

  useEffect(() => {


    async function buscarFilmes() {

      const url = 'https://api.themoviedb.org/3/movie/upcoming?language=pt-br-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzY1YzEyYzUyMWRiMTEzMjJmZDk1MDJlMWNlYzlmYyIsIm5iZiI6MTc1NTAyMTUxMi40NzksInN1YiI6IjY4OWI4MGM4MzVlMGUyZDIxMDZkNzRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EAMFVwLizTgWASktiIgkzwldJO4_he776g98_jlTAY8'
        }
      };


      const response = await fetch(url, options)
      const data = await response.json();
      console.log(data);

      setLancamento(data.results)

    }
    buscarFilmes();







  }, [])




  return (
    <ScrollView style={styles.container}>

      <View style={styles.containerImports}>

        <Cabecalho />

        <Pesquisa />

        <Banner />

        <View style={{ width: "90%" }}>

          <FlatList

            showsHorizontalScrollIndicator={false}

            horizontal={true}

            data={movies}

            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

              <CardMovies titulo={item.title} nota={item.vote_average} imagem={item.poster_path} sinopse={item.overview} />

            )}

          />

          <Text style={styles.textHome}> Populares </Text>

          <FlatList

            showsHorizontalScrollIndicator={false}

            horizontal={true}

            data={popular}

            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

              <CardMovies titulo={item.title} nota={item.vote_average} imagem={item.poster_path} sinopse={item.overview} />

            )}

          />

          <Text style={styles.textHome}> Bem Avaliados </Text>

          <FlatList

            showsHorizontalScrollIndicator={false}

            horizontal={true}

            data={avaliado}

            keyExtractor={(item) => item.id}/*  */
            renderItem={({ item }) => (

              <CardMovies titulo={item.title} nota={item.vote_average} imagem={item.poster_path} sinopse={item.overview} />

            )}

          />

          <Text style={styles.textHome}> Em Breve </Text>

          <FlatList

            showsHorizontalScrollIndicator={false}

            horizontal={true}

            data={lancamento}

            keyExtractor={(item) => item.id}/*  */
            renderItem={({ item }) => (

              <CardMovies titulo={item.title} nota={item.vote_average} imagem={item.poster_path} sinopse={item.overview} />

            )}

          />

        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
  },

  textHome: {
    fontSize: 30,
    color: "white",
    marginTop: 15,
    marginLeft: 0,
    fontWeight: 'bold'
  },

  containerImports: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

});