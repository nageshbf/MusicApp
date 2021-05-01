import React, { useEffect, useState } from 'react';
import { View, Pressable, Text, StyleSheet, Image } from 'react-native'
import TrackPlayer from 'react-native-track-player';


export default function MuicDetails(props) {

    let item = props.route.params && props.route.params.song_details

    const [isPlaying, updateIsPlaying] = useState(false);

    useEffect(async () => {
        props.navigation.setOptions({ title: item.trackName, })

    }, [])

    function playSongs() {

        updateIsPlaying(true)

        TrackPlayer.setupPlayer().then(() => {

            // Add a track to the queue
            TrackPlayer.add({
                id: item.trackId,
                url: item.previewUrl,
                title: item.trackName,
                artist: item.artistName,
                artwork: item.artworkUrl100
            });

            TrackPlayer.play()

            // The player is ready to be used
        })


    }

    function pauseSong() {
        updateIsPlaying(false)

        TrackPlayer.pause()
    }

    return (
        <View style={{ ...Style.container }}>
            {
                item.artworkUrl100 && <Image resizeMode="cover" source={{ uri: item.artworkUrl100 }} style={{ height: 200, width: 200, marginTop: 50 }}>

                </Image>
            }

            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <Text numberOfLines={1} style={{ ...Style.collectionNameStyle }}>{item.collectionName}</Text>
                <Text numberOfLines={1} style={{ ...Style.collectionNameStyle }}>{item.artistName}</Text>
            </View>

            <Pressable
            style={{
                marginTop:100
            }}
            onPress={() => {
                if (isPlaying) {
                    pauseSong()
                } else {
                    playSongs()
                }

            }}>
                {
                    isPlaying ? <Image source={require('../Images/pause.png')}
                        style={{ height: 100, width: 100 }}></Image>
                        :
                        <Image source={require('../Images/play.png')}
                            style={{ height: 100, width: 100 }}></Image>
                }
            </Pressable>

        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF'
    },


    songNameStyle: {
        fontSize: 16,
    },
    collectionNameStyle: {
        fontSize: 15,
    }
})
