import { Text, Image } from "react-native";
import styles from './style.js'

// Vetor img
const imagens = [
    require('../../../assets/ANIM.png'),
    require('../../../assets/ANIM.png'),
];

// Escolhe aleatóriamente uma img
const imagem = imagens[Math.floor(Math.random() * imagens.length)];

export default function Banner() {

    return (
        <>
            <Image style={styles.imageBanner} source={imagem} />

            <Text style={styles.textBanner}> ANIMES </Text>
        </>
    );

}