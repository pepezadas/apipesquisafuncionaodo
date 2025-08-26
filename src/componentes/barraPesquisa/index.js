import { TextInput, View, TouchableOpacity } from "react-native";
import styles from './style.js';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";


export default function Pesquisa() {

   const[Pesquisa,setPesquisa] = useState('');

   const navigation = useNavigation ();
   
   function testeBotao(){
   console.log(Pesquisa)

   }

    return (


        <View style={styles.containerSearch}>
            
            <TextInput onChangeText={(texto)=>setPesquisa(texto)}
                style={styles.inputSearch}
                placeholder="Digite o Filme que deseja buscar"
                 />
       <TouchableOpacity onPress={()=>navigation.navigate('pesquisa',{Pesquisa})} style={{marginLeft:-40}}>

            <AntDesign name="search1" size={24} color="white" />
            </TouchableOpacity>
        </View>

    );
}