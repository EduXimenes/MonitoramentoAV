import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import { database } from "../../services/firebase";
import { RootStackParamsList } from "../../../App"
import { StackNavigationProp } from '@react-navigation/stack';
import { BarChart, Grid } from 'react-native-svg-charts';

const fill = 'rgb(134, 65, 244)'
const data = [50, 10, 40, 95, 4, 24, null, 85, undefined, 0, 35, 53, 70, 24, 50, 20, 80]

type relatoriosScreenProp = StackNavigationProp<RootStackParamsList, "Home">
const Relatorios: React.FC = () => {
    const navigation = useNavigation<relatoriosScreenProp>()
    return (
        <View
            style={{ flex: 1, justifyContent: 'center' }}>
            <BarChart
                style={{ height: 200 }}
                data={data}
                svg={{ fill }}
                contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>
            <Text>TESTE Relatorios</Text>
            <Button
                title="Ir para Home"
                onPress={() => navigation.navigate('Home')} />
        </View>
    )
}
export default Relatorios;