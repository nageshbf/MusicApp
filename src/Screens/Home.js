import React, { useEffect, useState } from 'react';
import { View, Pressable, Text, StyleSheet, FlatList } from 'react-native'
import axios from 'react-native-axios';
import Loading from '../Components/Loading';
import SongCard from '../Components/SongCard';
export default function HomeScreen(props) {


    const [isLoading, updateIsLoading] = useState(true);
    const [songsList, updateSongsList] = useState([]);

    useEffect(() => {
        axios.get('https://itunes.apple.com/search?term=Michael+jackson')
            .then(function (response) {
                if (response.data && response.data.results) {
                    updateSongsList(response.data.results);

                    // For Stop processing
                    updateIsLoading(false)
                }
            })
            .catch(function (error) {

                // For Stop processing
                updateIsLoading(false)
            });

    }, [])

    function onSongPress(item) {
        props.navigation.navigate("MusicDetails", {
            song_details: item
        })
    }

    // Show Loading
    if (isLoading) {
        return <Loading />
    }

    return (
        <View style={{ ...Style.container }}>
            <FlatList
                keyExtractor={(item, index) => item.trackName + "" + item.collectionId}
                data={songsList}
                renderItem={({ item, index }) => <SongCard item={item} index={index} onSongPress={onSongPress}></SongCard>}
            >
            </FlatList>
        </View>
    )
}


const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})
