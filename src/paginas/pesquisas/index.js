import { useRoute } from '@react-navigation/native';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function PesquisasFilmes() {
  const route = useRoute();
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      const url = `https://api.themoviedb.org/3/search/movie?query=${route.params.Pesquisa}&include_adult=false&language=pt-BR&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzY1YzEyYzUyMWRiMTEzMjJmZDk1MDJlMWNlYzlmYyIsIm5iZiI6MTc1NTAyMTUxMi40NzksInN1YiI6IjY4OWI4MGM4MzVlMGUyZDIxMDZkNzRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EAMFVwLizTgWASktiIgkzwldJO4_he776g98_jlTAY8',
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setFilmes(data.results);
    }

    buscarFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image
              style={styles.image}
              source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.vote}>Nota: {item.vote_average}</Text>
            <Text style={styles.sinopse}>{item.overview}</Text>
          </View>
        )}
        contentContainerStyle={styles.flatlistContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  flatlistContent: {
    paddingBottom: 20,
  },
  cardContainer: {
    backgroundColor: '#1c1c1c',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  vote: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  sinopse: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
});
