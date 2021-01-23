import React from "react"
import {View ,Text, Button} from "react-native"
import { globalStyles } from '../styles/global'
const About = ({ navigation }) => {
    return ( 
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
        </View>
    );
}
 
export default About;
