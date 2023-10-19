import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, Animated, TouchableOpacity, Modal } from 'react-native';

import { Ionicons } from '@expo/vector-icons'

export default function Profile() {
  
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <SafeAreaView style={styles.container}>
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
        <Animated.Image
          source={require('./img/color_transparent.png')}
          style={{ width: 180, height: 180 }}
        />
        <View style={styles.icons}>
          <Ionicons name="receipt-outline" size={25} color={'#8a08bb'} />
          <Ionicons name="wine-outline" size={30} color={'#8a08bb'} />
          <Ionicons name="notifications-outline" size={30} color={'#8a08bb'} />
        </View>
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
        <View style={styles.topBox}></View>
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
  container:{
    backgroundColor: '#111'
  },
  header: {
    backgroundColor: '#111',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -50,
    marginBottom: -30,
    paddingRight: 30,
  },
  topBox: {
    height: 300,
    backgroundColor: '#222',
    margin: 7,
    borderRadius: 5
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
  },
  icons: {
    flexDirection: 'row',
    gap: 15
  }
});