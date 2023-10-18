import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, Animated, TouchableOpacity, Modal } from 'react-native';

import { Ionicons } from '@expo/vector-icons'

export default function Profile() {
  
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <SafeAreaView>
      <Animated.View style={[
        styles.header,
        {
          height: scrollY.interpolate({
            inputRange: [10, 160, 185],
            outputRange: [140, 20, 0],
            extrapolate: 'clamp'
          }),
          opacity: scrollY.interpolate({
            inputRange: [1, 75, 170],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp'
          })
        }
      ]}>
        <Ionicons name="home" size={30} color={"#FFF"} />
        <Animated.Image
          source={require('./color_transparent.png')}
          style={{ width: 300, height: 300 }}
          resizeMode='contain'
        />
        <Image
          source={require('./color_with_background.jpg')}
          style={{ width: 35, height: 150 }}
          resizeMode='contain'
        />
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY }
          },
        }],
          { useNativeDriver: false })}
      >
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFF',
  },
  box: {
    height: 300,
    backgroundColor: '#ddd',
    margin: 7,
    borderRadius: 5
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50
  }
});