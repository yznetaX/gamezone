import * as React from 'react'
import About from "../screens/About"
import { DefaultTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Header from "../shared/header"
const Stack = createStackNavigator()

export const AboutNavigator = () => {
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: 'rgb(255, 45, 85)',
            background: 'white',
            card: '#eee',
        },
    };
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} options={({ navigation }) => ({
                headerTitle: <Header navigation={navigation} title="About GameZone" />
            })} />
        </Stack.Navigator>
    )
}