import { View, Text, Image } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function Detalhes() {
    const route = useRoute();
    const navigation = useNavigation();

    const { nome, imagem, elemento, raça } = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: route.params.imagem }} />
         

            <Text style={styles.name}>Nome: {nome}</Text>

            {elemento ? (
                <Text style={styles.nota}>Elemento: {elemento}</Text>
            ) : null}

            {raça ? (
                <Text style={styles.nota}>Raça: {raça}</Text>
            ) : null}
        </View>
    );
}