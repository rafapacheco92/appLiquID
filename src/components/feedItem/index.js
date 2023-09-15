import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native';

import { Video } from 'expo-av'

const { height: heightScreen } = Dimensions.get("screen")

export function FeedItem({ data }) {
  const video = useRef(null);
  const [status, setStatus] = useState({})

  function handlePlayer() {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
  }

  return (
    <Pressable onPress={handlePlayer}>
      {/* <Image
        source={{ uri: data.image }}
        style={{ width: '100%', height: heightScreen }}
      /> */}
      <View style={[styles.info, { bottom: 100 }]}>
        <Text style={styles.name}>{data.name}</Text>
        <Text numberOfLines={2} style={styles.description}>{data.description}</Text>
      </View>

      <Video
        ref={video}
        style={{ width: '100%', height: heightScreen }}
        source={{ uri: data.video }}
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  info: {
    position: 'absolute',
    zIndex: 99,
    left: 8,
    padding: 8
  },
  name: {
    color: "#FFF"
  },
  description: {
    color: "#FFF"
  }
})