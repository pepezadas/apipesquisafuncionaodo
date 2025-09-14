import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageBanner: {
    width: '96%',         // Ocupa quase toda a largura da tela
    height: 320,          // Dobro da altura anterior
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,

    alignSelf: 'center',
  },

  textBanner: {
    fontSize: 32,
    color: "#ffffff",
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;