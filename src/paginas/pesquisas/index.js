import { useRoute } from '@react-navigation/native';
import { View ,Text, Image, FlatList } from 'react-native';
import { useEffect,useState } from 'react';
export default function PesquisasFilmes(){

   const route = useRoute();
   const[filmes,setFilmes] = useState([''])

   useEffect(()=>{


async function buscarFilmes(){
    const url = `https://api.themoviedb.org/3/search/movie?query=${route.params.Pesquisa}s&include_adult=false&language=pt-BR&page=1`
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzY1YzEyYzUyMWRiMTEzMjJmZDk1MDJlMWNlYzlmYyIsIm5iZiI6MTc1NTAyMTUxMi40NzksInN1YiI6IjY4OWI4MGM4MzVlMGUyZDIxMDZkNzRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EAMFVwLizTgWASktiIgkzwldJO4_he776g98_jlTAY8'
  }
   

};

const response = await fetch(url,options)
const data = await response.json()
console.log(data.results)
setFilmes(data.results)

}

buscarFilmes();

   },[])

    
   
   return (
       <View>
           <FlatList
           data={filmes}
           keyExtractor={(item)=>item.id}
           renderItem={({item})=>(
               <View>
                   <Text> filme:{item.title} </Text>
                   <Text>nota :{item.vote_average}</Text>
                   <Image style = {{width:"100%", height:150}} source={{uri:(`https://image.tmdb.org/t/p/original${item.poster_path}`)}}></Image>
               </View>
           )}>
           </FlatList>
          
       </View>
   )
};