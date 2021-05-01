import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Loading() {
    return (
        <View style={Style.container}>
            <Image source={require('../Images/loader.gif')} style={{
                height: 100,
                width: 100
            }}></Image>
        </View>
    )
}


const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})