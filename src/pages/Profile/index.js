import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, ScrollView, Animated, TouchableOpacity, Modal, FlatList } from 'react-native';
import { ProfilePost } from '../../components/profilePost'
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
        <View style={styles.topBox}>
          <View style={styles.topInfo}>
            <Image
              style={styles.ftPerfil}
              source={require('./img/perfilrafa.jpg')}
            />
            <View style={styles.stats}>
              <View style={styles.statContainer}>
                <Text style={styles.number}>5</Text>
                <Text style={styles.stat}>Posts</Text>
              </View>
              <View style={styles.statContainer}>
                <Text style={styles.number}>527</Text>
                <Text style={styles.stat}>Seguidores</Text>
              </View>
              <View style={styles.statContainer}>
                <Text style={styles.number}>312</Text>
                <Text style={styles.stat}>Seguindo</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomInfo}>
            <Text style={styles.name}>Rafael Pacheco</Text>
            <Text style={styles.desc}>Da trilha ao balcão, uma vida movida pela aventura e pelos sabores únicos.</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editText}>Editar perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.postBox}>
        <FlatList
        data={ProfilePost}
        renderItem={({ item }) => <ProfilePost data={item} />}
        showsVerticalScrollIndicator={false}
      />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#111',
    flex: 1
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
    height: 250,
    backgroundColor: '#222',
    margin: 7,
    borderRadius: 5,
    padding: 15,
    gap: 15
  },
  postBox: {
    height: '100%',
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
  },
  topInfo: {
    flexDirection: 'row',
    gap: 50,
    alignItems: 'center',
  },
  bottomInfo:{
    gap: 5
  },
  ftPerfil: {
    width: 85,
    height: 85,
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: '#bf00ff'
  },
  name: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14
  },
  desc: {
    color: '#FFF',
    fontSize: 14,
    width: '70%'
  },
  stats: {
    flexDirection: 'row',
    gap: 35
  },
  statContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  },
  stat: {
    color: '#FFF',
    fontSize: 12
  },
  editButton: {
    marginTop: 30,
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 5,
  },
  editText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});