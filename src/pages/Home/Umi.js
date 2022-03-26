import React, { Component } from "react";
import { View, Text } from "react-native";
import { database } from "../../services/firebase";

class Umi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Temperatura: '0'
        }
    }

    componentDidMount() {
        database()
            .ref('User/Umidade')
            .on('value', snapshot => {
                console.log(snapshot.val())
                this.setState({
                    Umidade: snapshot.val()
                })
            });

    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 24 }}>
                    {this.state.Umidade}
                </Text>
            </View>

        )
    }
}
export default Umi;