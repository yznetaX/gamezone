import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import {HomeNavigator} from './homeStack'
import {AboutNavigator} from './aboutStack'

const RootDrawer = createDrawerNavigator()

export const AppDrawer = () => {
    return (
        <NavigationContainer>
            <RootDrawer.Navigator>
                <RootDrawer.Screen name="Home" component={HomeNavigator} />
                <RootDrawer.Screen name="About" component={AboutNavigator} />
            </RootDrawer.Navigator>
        </NavigationContainer>
    )
}