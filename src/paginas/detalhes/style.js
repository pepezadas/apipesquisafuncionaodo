import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    image: {
        width: 260,
        height: 260,
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#E94444',
        marginTop: 50,
        resizeMode: 'contain',
        backgroundColor: '#1e1e1e',
    },

    name: {
        marginTop: 30,
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize',
    },

    nota: {
        color: '#FF6B6B',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10,
        textAlign: 'center',
        textTransform: 'capitalize',
    },

    sinopse: {
        marginTop: 30,
        color: '#CCCCCC',
        width: '100%',
        fontSize: 16,
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 12,
        textAlign: 'justify',
    }
});

export default styles;
