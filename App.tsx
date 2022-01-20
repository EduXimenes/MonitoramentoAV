import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Relatorios from './src/pages/Relatorios';
import Home from './src/pages/Home/index'

const Stack = createStackNavigator();

export type RootStackParamsList = {
    Home: undefined
    Relatorios: undefined
    Login: undefined
 } 

const App: React.FC = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">   
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen  name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Relatorios" component={Relatorios} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;