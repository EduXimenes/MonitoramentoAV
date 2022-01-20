import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, {Component} from "react";
import {View, Text, Button} from "react-native";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import { database } from "../../services/firebase";
import { RootStackParamsList } from "../../../App"
import { StackNavigationProp } from '@react-navigation/stack';

type relatoriosScreenProp = StackNavigationProp<RootStackParamsList, "Home">
const Relatorios: React.FC = () =>{
    const navigation = useNavigation<relatoriosScreenProp>()
        return (
            <View>
                <Text>TESTE Relatorios</Text>

                <Button title="Ir para Home" onPress= {() => navigation.navigate('Home')}/>
            </View>
        )
    
}
export default Relatorios;