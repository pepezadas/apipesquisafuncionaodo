import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({ nome, raça, imagem, sinopse, elemento }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.Filmes}
            onPress={() => navigation.navigate('Detalhes', { nome, raça, elemento, imagem, sinopse })}
        >
            <Image style={styles.images} source={{ uri: `${imagem}` }} />
            <Text style={styles.titulo}>Nome: {nome}</Text>

            {raça ? <Text style={styles.titulo}>Raça: {raça}</Text> : null}

            {elemento ? <Text style={styles.titulo}>Elemento: {elemento}</Text> : null}
        </TouchableOpacity>
    );
}