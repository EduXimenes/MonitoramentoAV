import React, { Component } from "react";
import { View, Text } from "react-native";
import { database } from "../../services/firebase";

class Temp extends Component{
    constructor(props){
        super(props);
        this.state={
            Temperatura: '10'
        }
    }

    componentDidMount(){
        database()
        .ref('User/Temperatura')
        .on('value', snapshot =>{
            console.log(snapshot.val())
            this.setState({
                Temperatura:snapshot.val()
            })
        });

    }

    render(){
        return(
            <View>
                <Text>
                    {this.state.Temperatura}
                </Text>
            </View>

        )
    }
}
export default Temp;