import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/Home';
import MusicDetails from '../Screens/MuicDetails'


const Stack = createStackNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{
                    headerShown:false
                }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Music APP' }} />
                <Stack.Screen name="MusicDetails" component={MusicDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}