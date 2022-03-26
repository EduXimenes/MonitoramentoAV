import React, { Component, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { database } from "../../services/firebase";

const Sensor = () => {
    const [sensorValues, setSensorValues] = useState({})
    useEffect(() => {
        database()
            .ref('User')
            .on('value', values => {
                setSensorValues(values.val())
            });
    }, [])

    return (
        <View>
            <Text style={{ fontSize: 24 }}>
                {sensorValues.Luminosidade}

            </Text>

        </View>
    )
}
export default Sensor;

/*
class Lumi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Temperatura: '0'
        }
    }

    componentDidMount() {
        database()
            .ref('User/Luminosidade')
            .on('value', snapshot => {
                console.log(snapshot.val())
                this.setState({
                    Luminosidade: snapshot.val()
                })
            });

    }

    render() {
        return (
            <View>
                <Text>
                    {this.state.Luminosidade}
                </Text>
            </View>

        )
    }
}
export default Lumi;
*/