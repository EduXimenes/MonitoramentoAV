import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { RootStackParamsList } from "./../../../App"
import { StackNavigationProp } from '@react-navigation/stack';
import Temp from './Temp';
import Umi from './Umi';
import Sensor from './Lumi';


//Type é uma tipagem para não ter problema com navigation
type homeScreenProp = StackNavigationProp<RootStackParamsList, "Home">
const Home: React.FC = () => {
    const navigation = useNavigation<homeScreenProp>()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Luminosidade:</Text>
            <Sensor />
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Temperatura:</Text>
            <Temp />
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Umidade:</Text>
            <Umi />
            <Button title="Ir para Relatorios" onPress={() => navigation.navigate('Relatorios')} />
        </View>
    )
}
export default Home;