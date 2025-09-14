import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  Filmes: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#614c4cff', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 20,
    width: 150,

    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  titulo: {
    color: '#FFFFFF', 
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 8,
    textAlign: 'center',
  },

  images: {
    width: 130,
    height: 170,
    borderRadius: 8,
    resizeMode: 'contain',
  }
});

export default styles;