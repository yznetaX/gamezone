import React from "react"
import { StyleSheet , View ,Text, Image} from "react-native"
import { globalStyles } from '../styles/global'
import Card from "../shared/card"
export default function ReviewDetails  ({ route, navigation })  {
    const {title,rating,body} = route.params
    return ( 
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>
                    {title}
                </Text>
                <Text style={globalStyles.titleText}>
                    {body}
                </Text>
                <View style={styles.rating}>
                    <Text>{ title } Rating: </Text>
                    <Image source={require('../assets/rating-1.png')} />
                </View>
            </Card>
            
        </View>
    );
}
 
const styles = StyleSheet.create({

})