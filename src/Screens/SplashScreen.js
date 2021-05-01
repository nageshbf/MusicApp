import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';


export default function SplashScreen(props) {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: 'HomeScreen' },
                    ],
                })
            );
        }, 2000);
    }, []);

    return (
        <View style={{ ...Styles.container }}>
            <Image source={require('../Images/music.png')} style={{ ...Styles.logoStyle }}></Image>
            <Text style={{ ...Styles.appNameStyle }}>Music APP</Text>
        </View>
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    logoStyle: {
        width: 100, height: 100
    },
    appNameStyle: {
        fontSize: 16,
        marginTop:10
    }
})
