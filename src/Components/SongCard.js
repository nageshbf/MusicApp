import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function SongCard({ item, index, onSongPress }, props) {
    return (
        <Pressable
            onPress={() => {
                onSongPress(item)
            }}
            style={{ ...Style.container }}>

            <Image source={{ uri: item.artworkUrl100 }} style={{ height: 50, width: 50 }}></Image>

            <View style={{ paddingLeft: 10, flex: 1 }}>
                <Text style={{ ...Style.songNameStyle }}>{item.trackName}</Text>
                <Text numberOfLines={1} style={{ ...Style.collectionNameStyle }}>{item.collectionName}</Text>
                <Text numberOfLines={1} style={{ ...Style.collectionNameStyle }}>{item.artistName}</Text>

            </View>

        </Pressable>
    )
}


const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 12,
        flexDirection: 'row'
    },

    songNameStyle: {
        fontSize: 16,
    },
    collectionNameStyle: {
        fontSize: 12,
        color: "gray"
    }
})