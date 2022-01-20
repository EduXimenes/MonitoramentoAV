import React, { Component } from "react";
import { View, Text } from "react-native";
import { database } from "../../services/firebase";

class Lumi extends Component{
    constructor(props){
        super(props);
        this.state={
            Temperatura: '10'
        }
    }

    componentDidMount(){
        database()
        .ref('User/Luminosidade')
        .on('value', snapshot =>{
            console.log(snapshot.val())
            this.setState({
                Luminosidade:snapshot.val()
            })
        });

    }

    render(){
        return(
            <View>
                <Text>
                    {this.state.Luminosidade}
                </Text>
            </View>

        )
    }
}
export default Lumi;