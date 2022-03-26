import React, { Component } from "react";
import { View, Text } from "react-native";
import { database } from "../../services/firebase";

class Temp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Temperatura: '0'
        }
    }

    componentDidMount() {
        database()
            .ref('User/Temperatura')
            .on('value', snapshot => {
                console.log(snapshot.val())
                this.setState({
                    Temperatura: snapshot.val()
                })
            });
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 24 }}>
                    {this.state.Temperatura}
                </Text>
            </View>

        )
    }
}
export default Temp;