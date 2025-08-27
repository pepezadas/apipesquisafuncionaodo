import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../paginas/home";
import Detalhes from "../paginas/detalhes";
import PesquisasFilmes from "../paginas/pesquisas";

export default function Rotas() {
    const stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false }}>
                <stack.Screen 
                    name="Home" 
                    component={Home} 
                />
                <stack.Screen 
                    name="Detalhes" 
                    component={Detalhes} 
                    options={{
                        headerShown: true,
                        headerStyle: { backgroundColor: 'black' }, 
                        headerTintColor: 'white', 
                    }} 
                />
                <stack.Screen 
                    name="pesquisa" 
                    component={PesquisasFilmes} 
                    options={{
                        headerShown: true,
                        headerStyle: { backgroundColor: 'black' }, 
                        headerTintColor: 'white', 
                    }} 
                />
            </stack.Navigator>
        </NavigationContainer>
    );
}
