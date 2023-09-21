import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native';

const { height: heightScreen } = Dimensions.get("screen")

export function FeedItem({ data }) {


  return (
    <Pressable onPress={handlePlayer}>
      <Image
        source={ data.image }
        style={{ width: '100%', height: heightScreen }}
      />
      <View style={[styles.info, { bottom: 100 }]}>
        <Text style={styles.name}>{data.name}</Text>
        <Text numberOfLines={2} style={styles.description}>{data.description}</Text>
      </View>

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