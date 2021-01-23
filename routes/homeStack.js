import * as React from 'react'
import Home from "../screens/Home"
import ReviewDetails from "../screens/ReviewDetails"
import { DefaultTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Header from "../shared/header"

const Stack = createStackNavigator()

export const HomeNavigator = () => {
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
            <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
                headerTitle: <Header navigation={navigation} title="💖 Game Zone" />
            })}  />
            <Stack.Screen name="Review Details" component={ReviewDetails} />
        </Stack.Navigator>
    )
}